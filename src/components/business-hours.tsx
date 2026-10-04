import { business } from "@/data/business";

export function BusinessHours({ compact = false }: { compact?: boolean }) {
  return (
    <dl className={compact ? "business-hours compact" : "business-hours"}>
      {business.hours.map((hours) => (
        <div key={hours.label}>
          <dt>{hours.label}</dt>
          <dd>{hours.display}</dd>
        </div>
      ))}
    </dl>
  );
}
