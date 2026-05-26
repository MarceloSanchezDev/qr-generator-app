import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import SectionCard from "../ui/SectionCard";
import { downloadCanvasAsPng } from "../../helpers/downloadQr";

function QrPreview({
  generatedUrl,
  foregroundColor,
  backgroundColor,
  isTransparent,
  errorCorrection,
  size,
}) {
  const qrRef = useRef(null);
  const hasQrCode = Boolean(generatedUrl);

  const handleDownload = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    downloadCanvasAsPng(canvas, "qr-code.png");
  };

  const handleCopyUrl = async () => {
    if (!generatedUrl) return;
    await navigator.clipboard.writeText(generatedUrl);
  };

  return (
    <SectionCard className="sticky top-24">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-950">Live Preview</h2>

        {hasQrCode && (
          <span className="flex h-3 w-3">
            <span className="h-3 w-3 rounded-full bg-emerald-500" />
          </span>
        )}
      </div>

      <div className="qr-well mb-6 flex min-h-[320px] items-center justify-center rounded-lg border border-slate-200 p-8">
        {hasQrCode ? (
          <div
            ref={qrRef}
            className="rounded-lg bg-white p-3 shadow-sm transition hover:scale-[1.02]"
          >
            <QRCodeCanvas
              value={generatedUrl}
              size={260}
              level={errorCorrection}
              fgColor={foregroundColor}
              bgColor={isTransparent ? "transparent" : backgroundColor}
              includeMargin
            />
          </div>
        ) : (
          <div className="text-center text-slate-400">
            <div className="mb-2 text-5xl">▦</div>
            <p className="text-sm">Your QR code preview will appear here</p>
          </div>
        )}
      </div>

      <div className="mb-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Target URL
          </span>

          <button
            type="button"
            onClick={handleCopyUrl}
            disabled={!hasQrCode}
            className="text-sm text-slate-500 hover:text-blue-900 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Copy
          </button>
        </div>

        <p className="truncate text-sm text-slate-900">
          {generatedUrl || "No URL generated yet"}
        </p>

        <div className="mt-3 flex justify-between border-t border-slate-200 pt-3 text-xs text-slate-500">
          <span>Format: PNG</span>
          <span>Size: {size}x{size}px</span>
        </div>
      </div>

      <div className="space-y-3">
        <button
          type="button"
          onClick={handleDownload}
          disabled={!hasQrCode}
          className="w-full rounded-lg bg-blue-950 py-3 font-semibold text-white transition hover:bg-blue-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Download PNG
        </button>

        <button
          type="button"
          disabled={!hasQrCode}
          className="w-full rounded-lg border border-blue-950 py-3 font-semibold text-blue-950 transition hover:bg-blue-50 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Copy Image to Clipboard
        </button>
      </div>
    </SectionCard>
  );
}

export default QrPreview;