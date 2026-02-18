import { heatmapCells } from "@/lib/mockData";
import { cn } from "@/lib/utils";

function intensityClass(intensity: number) {
  if (intensity > 80) return "bg-blue-500/70";
  if (intensity > 60) return "bg-blue-500/50";
  if (intensity > 40) return "bg-blue-500/30";
  return "bg-blue-500/15";
}

export function UtilizationHeatmap() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {heatmapCells.map((cell) => (
        <div
          key={`${cell.asset}-${cell.metric}`}
          className={cn("rounded-lg border border-white/10 p-3 text-xs", intensityClass(cell.intensity))}
        >
          <p className="text-slate-100">{cell.asset}</p>
          <p className="text-slate-300">{cell.metric}</p>
          <p className="mt-1 font-semibold text-white">{cell.intensity}</p>
        </div>
      ))}
    </div>
  );
}
