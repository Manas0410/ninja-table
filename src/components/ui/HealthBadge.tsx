import type { Health } from "../../types/character.ts";

const colors: Record<Health, string> = {
  Healthy: "bg-green-100 text-green-700",
  Injured: "bg-yellow-100 text-yellow-700",
  Critical: "bg-red-100 text-red-700",
};

export const HealthBadge = ({ health }: { health: Health }) => {
  return (
    <span
      className={`px-2 py-1 text-xs rounded-full font-medium ${colors[health]}`}
    >
      {health}
    </span>
  );
};
