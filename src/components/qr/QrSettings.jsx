const ERROR_CORRECTION_LEVELS = [
  {
    value: "L",
    label: "Bajo (7%)",
  },
  {
    value: "M",
    label: "Medio (15%)",
  },
  {
    value: "Q",
    label: "Alto (25%)",
  },
  {
    value: "H",
    label: "Máximo (30%) recomendado para logo",
  },
];

function QrSettings({
  errorCorrection,
  size,
  logoSize,
  onErrorCorrectionChange,
  onSizeChange,
  onLogoSizeChange,
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-slate-950">
        Configuración
      </h2>

      <div className="space-y-5">
        <div>
          <label
            htmlFor="errorCorrection"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Corrección de errores
          </label>

          <select
            id="errorCorrection"
            value={errorCorrection}
            onChange={(event) => onErrorCorrectionChange(event.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            {ERROR_CORRECTION_LEVELS.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="qrSize"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Tamaño de descarga: {size}px
          </label>

          <input
            id="qrSize"
            type="range"
            min="300"
            max="1600"
            step="100"
            value={size}
            onChange={(event) => onSizeChange(Number(event.target.value))}
            className="w-full accent-blue-700"
          />
        </div>

        <div>
          <label
            htmlFor="logoSize"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Tamaño del logo: {logoSize}px
          </label>

          <input
            id="logoSize"
            type="range"
            min="32"
            max="96"
            step="4"
            value={logoSize}
            onChange={(event) => onLogoSizeChange(Number(event.target.value))}
            className="w-full accent-blue-700"
          />
        </div>
      </div>
    </section>
  );
}

export default QrSettings;