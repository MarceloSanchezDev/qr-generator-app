const FOREGROUND_COLORS = ["#0b1c30", "#1d4ed8", "#047857", "#be123c"];
const BACKGROUND_COLORS = ["#ffffff", "#f8fafc", "#eff6ff", "#ecfdf5"];

function ColorButton({ color, isActive, onClick, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`h-9 w-9 rounded-full border-2 transition hover:scale-110 ${
        isActive ? "border-blue-600 ring-2 ring-blue-100" : "border-slate-200"
      }`}
      style={{ backgroundColor: color }}
    />
  );
}

function ColorSelector({
  foregroundColor,
  backgroundColor,
  isTransparent,
  onForegroundChange,
  onBackgroundChange,
  onTransparentChange,
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-slate-950">
        Colores
      </h2>

      <div className="space-y-5">
        <div>
          <p className="mb-2 text-sm font-semibold text-slate-700">
            Color del QR
          </p>

          <div className="flex gap-2">
            {FOREGROUND_COLORS.map((color) => (
              <ColorButton
                key={color}
                color={color}
                label={`Seleccionar color ${color}`}
                isActive={foregroundColor === color}
                onClick={() => onForegroundChange(color)}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold text-slate-700">
            Color de fondo
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {BACKGROUND_COLORS.map((color) => (
              <ColorButton
                key={color}
                color={color}
                label={`Seleccionar fondo ${color}`}
                isActive={backgroundColor === color && !isTransparent}
                onClick={() => {
                  onBackgroundChange(color);
                  onTransparentChange(false);
                }}
              />
            ))}

            <label className="ml-2 flex cursor-pointer items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={isTransparent}
                onChange={(event) => onTransparentChange(event.target.checked)}
              />
              Fondo transparente
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ColorSelector;