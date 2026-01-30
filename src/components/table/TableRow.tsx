import type { Character } from "../../types/character.ts";
import { useCharactersStore } from "../../features/characters/store/character.store";

export const TableRow = ({
  row,
  style,
}: {
  row: Character;
  style: React.CSSProperties;
}) => {
  const { selected, toggleSelect } = useCharactersStore();

  return (
    <div
      style={style}
      className="grid grid-cols-5 border-b px-2 py-2 items-center"
    >
      <input
        type="checkbox"
        checked={selected.has(row.id)}
        onChange={() => toggleSelect(row.id)}
      />
      <div>{row.name}</div>
      <div>{row.location}</div>
      <div>{row.health}</div>
      <div>{row.power}</div>
    </div>
  );
};
