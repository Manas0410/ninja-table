import { ChevronUp, ChevronDown, Filter } from "lucide-react";
import { useState } from "react";
import { HealthFilter } from "../filters/HealthFilter";
import { useCharactersStore } from "../../features/characters/store/character.store";

export const TableHeader = () => {
  const { toggleSort, sort } = useCharactersStore();
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="grid grid-cols-5 bg-gray-50 border-b px-4 py-3 font-semibold text-sm sticky top-0 z-20">
      <div className="text-center">Select</div>
      <div>Name</div>
      <div>Location</div>

      <div className="flex items-center gap-1 relative">
        Health
        <button
          className="p-1 hover:bg-gray-200 rounded"
          onClick={() => setShowFilter((s) => !s)}
        >
          <Filter size={14} />
        </button>
        {showFilter && <HealthFilter />}
      </div>

      <button
        onClick={toggleSort}
        className="flex items-center justify-end gap-1"
      >
        Power
        {sort === "asc" && <ChevronUp size={14} />}
        {sort === "desc" && <ChevronDown size={14} />}
      </button>
    </div>
  );
};
