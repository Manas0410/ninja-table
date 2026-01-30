import { useEffect, useMemo } from "react";
import { fetchCharacters } from "../../../api/characters.api";
import { useCharactersStore } from "../store/character.store";
import { useDebounce } from "../../../hooks/useDebounce";
import { Table } from "../../../components/table/Table";

export const CharactersTable = () => {
  const {
    data,
    loading,
    setData,
    search,
    setSearch,
    healthFilter,
    sort,
    selected,
  } = useCharactersStore();

  const debounced = useDebounce(search);

  useEffect(() => {
    fetchCharacters().then(setData);
  }, [setData]);

  const rows = useMemo(() => {
    let r = [...data];

    if (debounced)
      r = r.filter(
        (x) =>
          x.name.toLowerCase().includes(debounced.toLowerCase()) ||
          x.location.toLowerCase().includes(debounced.toLowerCase()),
      );

    if (healthFilter.length)
      r = r.filter((x) => healthFilter.includes(x.health));

    if (sort === "asc") r.sort((a, b) => a.power - b.power);
    if (sort === "desc") r.sort((a, b) => b.power - a.power);

    return r;
  }, [data, debounced, healthFilter, sort]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-6 space-y-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center bg-white p-4 rounded shadow-sm">
        <input
          placeholder="Search by name or location..."
          className="border px-3 py-2 rounded w-96"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          onClick={() => console.log(Array.from(selected))}
        >
          Submit
        </button>
      </div>

      <Table rows={rows} />
    </div>
  );
};
