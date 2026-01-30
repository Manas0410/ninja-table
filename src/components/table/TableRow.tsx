import type { Character } from "../../types/character.ts";
import { useCharactersStore } from "../../features/characters/store/character.store";
import { HealthBadge } from "../ui/HealthBadge.tsx";

export const TableRow = ({
  row,
  style,
}: {
  row: Character;
  style: React.CSSProperties;
}) => {
  const { selected, toggleSelect } = useCharactersStore();
  const isSelected = selected.has(row.id);

  return (
    <div
      style={style}
      className={`
        grid grid-cols-5 px-4 py-3 items-center border-b text-sm
        ${isSelected ? "bg-blue-50" : "odd:bg-white even:bg-gray-50"}
        hover:bg-blue-100 transition
      `}
    >
      <div className="text-center">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => toggleSelect(row.id)}
        />
      </div>

      <div className="font-medium">{row.name}</div>
      <div className="text-gray-600">{row.location}</div>
      <HealthBadge health={row.health} />
      <div className="text-right font-mono">{row.power}</div>
    </div>
  );
};
