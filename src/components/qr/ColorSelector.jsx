import SectionCard from "../ui/SectionCard";

function UrlForm({ url, error, onUrlChange, onGenerate }) {
  return (
    <SectionCard>
      <label htmlFor="url" className="mb-2 block text-sm font-semibold text-slate-900">
        Destination URL
      </label>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          🔗
        </span>

        <input
          id="url"
          type="url"
          value={url}
          onChange={(event) => onUrlChange(event.target.value)}
          placeholder="https://example.com"
          className={`w-full rounded-lg border bg-slate-50 py-3 pl-10 pr-4 text-base outline-none transition focus:ring-2 ${
            error
              ? "border-red-500 focus:ring-red-200"
              : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
          }`}
        />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={onGenerate}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-950 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-800 active:scale-95"
      >
        Generate QR Code
      </button>
    </SectionCard>
  );
}

export default UrlForm;