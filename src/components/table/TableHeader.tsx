import { ChevronUp, ChevronDown, Filter } from "lucide-react";
import { useState } from "react";
import { HealthFilter } from "../filters/HealthFilter";
import { useCharactersStore } from "../../features/characters/store/character.store";

export const TableHeader = () => {
  const { toggleSort, sort } = useCharactersStore();
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="grid grid-cols-5 bg-gray-100 px-2 py-2 font-semibold sticky top-0 z-10">
      <div>Select</div>
      <div>Name</div>
      <div>Location</div>

      {/* Health column */}
      <div className="flex items-center gap-1 relative">
        Health
        <button onClick={() => setShowFilter((s) => !s)}>
          <Filter size={16} />
        </button>
        {showFilter && <HealthFilter />}
      </div>

      {/* Power column */}
      <button onClick={toggleSort} className="flex items-center gap-1">
        Power
        {sort === "asc" && <ChevronUp size={16} />}
        {sort === "desc" && <ChevronDown size={16} />}
        {!["asc", "desc"].includes(sort ?? "") && <Filter size={16} />}
      </button>
    </div>
  );
};
