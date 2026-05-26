import SectionCard from "../ui/SectionCard";
import { ERROR_CORRECTION_LEVELS } from "../../constants/qrOptions";

function QrSettings({ errorCorrection, size, onErrorCorrectionChange, onSizeChange }) {
  return (
    <SectionCard>
      <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-950">
        ⚙️ Settings
      </h2>

      <div className="space-y-5">
        <div>
          <label htmlFor="errorCorrection" className="mb-2 block text-xs font-bold uppercase text-slate-500">
            Error Correction Level
          </label>

          <select
            id="errorCorrection"
            value={errorCorrection}
            onChange={(event) => onErrorCorrectionChange(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            {ERROR_CORRECTION_LEVELS.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="size" className="mb-2 block text-xs font-bold uppercase text-slate-500">
            Output Size
          </label>

          <div className="flex items-center gap-3">
            <input
              id="size"
              type="range"
              min="200"
              max="1200"
              step="50"
              value={size}
              onChange={(event) => onSizeChange(Number(event.target.value))}
              className="w-full accent-blue-950"
            />

            <span className="w-20 text-right text-sm text-slate-700">
              {size}px
            </span>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

export default QrSettings;