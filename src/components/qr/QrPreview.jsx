import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { downloadCanvasAsPng } from "../../helpers/downloadQr";

function QrPreview({
  generatedUrl,
  foregroundColor,
  backgroundColor,
  isTransparent,
  errorCorrection,
  size,
  logoImage,
  logoSize,
}) {
  const qrRef = useRef(null);
  const hasQrCode = Boolean(generatedUrl);

  const previewSize = 280;

  const handleDownload = () => {
    const canvas = qrRef.current?.querySelector("canvas");

    if (!canvas) return;

    downloadCanvasAsPng(canvas, "codigo-qr.png");
  };

  return (
    <section className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-950">
          Vista previa
        </h2>

        {hasQrCode && (
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase text-emerald-700">
            Activo
          </span>
        )}
      </div>

      <div className="mb-6 flex min-h-[340px] items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-8">
        {hasQrCode ? (
          <div ref={qrRef} className="rounded-2xl bg-white p-4 shadow-sm">
            <QRCodeCanvas
              value={generatedUrl}
              size={previewSize}
              level={errorCorrection}
              fgColor={foregroundColor}
              bgColor={isTransparent ? "transparent" : backgroundColor}
              includeMargin
              imageSettings={
                logoImage
                  ? {
                      src: logoImage,
                      height: logoSize,
                      width: logoSize,
                      excavate: true,
                    }
                  : undefined
              }
            />
          </div>
        ) : (
          <div className="text-center text-slate-400">
            <div className="mb-3 text-6xl">▦</div>
            <p className="text-sm">
              Generá un QR para ver la vista previa.
            </p>
          </div>
        )}
      </div>

      <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-500">
          URL generada
        </p>

        <p className="truncate text-sm text-slate-900">
          {generatedUrl || "Todavía no generaste una URL"}
        </p>

        <div className="mt-3 flex justify-between border-t border-slate-200 pt-3 text-xs text-slate-500">
          <span>Corrección: {errorCorrection}</span>
          <span>Descarga: {size}px</span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleDownload}
        disabled={!hasQrCode}
        className="w-full rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Descargar PNG
      </button>
    </section>
  );
}

export default QrPreview;