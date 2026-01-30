import type { Health } from "../../types/character.ts";
import { useCharactersStore } from "../../features/characters/store/character.store";

const options: Health[] = ["Healthy", "Injured", "Critical"];

export const HealthFilter = () => {
  const { healthFilter, setHealthFilter } = useCharactersStore();

  const toggle = (h: Health) => {
    setHealthFilter(
      healthFilter.includes(h)
        ? healthFilter.filter((x) => x !== h)
        : [...healthFilter, h],
    );
  };

  return (
    <div className="absolute top-8 left-0 bg-white shadow-lg border rounded p-2 space-y-1 z-20">
      {options.map((h) => (
        <label key={h} className="flex gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={healthFilter.includes(h)}
            onChange={() => toggle(h)}
          />
          {h}
        </label>
      ))}
    </div>
  );
};
