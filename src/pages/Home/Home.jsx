import { useState } from "react";
import UrlForm from "../../components/qr/UrlForm";
import ColorSelector from "../../components/qr/ColorSelector";
import QrSettings from "../../components/qr/QrSettings";
import QrPreview from "../../components/qr/QrPreview";
import RecentQrList from "../../components/qr/RecentQrList";
import { isValidUrl } from "../../helpers/validateUrl";

function Home() {
  const [url, setUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [error, setError] = useState("");

  const [foregroundColor, setForegroundColor] = useState("#0b1c30");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [isTransparent, setIsTransparent] = useState(false);

  const [errorCorrection, setErrorCorrection] = useState("M");
  const [size, setSize] = useState(1024);

  const handleGenerateQrCode = () => {
    const cleanUrl = url.trim();

    if (!isValidUrl(cleanUrl)) {
      setError("Ingresá una URL válida que comience con http:// o https://");
      setGeneratedUrl("");
      return;
    }

    setError("");
    setGeneratedUrl(cleanUrl);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff] text-slate-950">
      <main className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-8 px-4 py-10 md:px-12 lg:grid-cols-12">
        <section
          className="flex flex-col gap-6 lg:col-span-7"
          aria-labelledby="qr-generator-title"
        >
          <header>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              Generador QR online gratis
            </p>

            <h1
              id="qr-generator-title"
              className="mb-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl"
            >
              Generador de códigos QR gratis para URLs
            </h1>

            <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Creá un código QR personalizado para tu sitio web, menú, evento,
              campaña o perfil social. Elegí colores, ajustá el tamaño y generá
              un QR en alta resolución listo para compartir o imprimir.
            </p>
          </header>

          <UrlForm
            url={url}
            error={error}
            onUrlChange={setUrl}
            onGenerate={handleGenerateQrCode}
          />

          <p className="text-sm text-slate-500">
            Ingresá una URL válida que comience con http:// o https://. El
            código QR se generará después de validar el enlace.
          </p>

          <div
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
            aria-label="Opciones de personalización del código QR"
          >
            <ColorSelector
              foregroundColor={foregroundColor}
              backgroundColor={backgroundColor}
              isTransparent={isTransparent}
              onForegroundChange={setForegroundColor}
              onBackgroundChange={setBackgroundColor}
              onTransparentChange={setIsTransparent}
            />

            <QrSettings
              errorCorrection={errorCorrection}
              size={size}
              onErrorCorrectionChange={setErrorCorrection}
              onSizeChange={setSize}
            />
          </div>

          <section
            className="rounded-2xl bg-white p-6 shadow-sm"
            aria-labelledby="qr-benefits-title"
          >
            <h2
              id="qr-benefits-title"
              className="mb-3 text-2xl font-bold tracking-tight text-slate-950"
            >
              Creá códigos QR para negocios, marketing y uso personal
            </h2>

            <p className="mb-5 text-slate-600">
              Convertí cualquier URL en un código QR escaneable para folletos,
              packaging, menús de restaurantes, tarjetas personales, eventos,
              landing pages y campañas en redes sociales. Personalizá el diseño
              para que el QR se adapte a tu marca y funcione tanto en piezas
              impresas como digitales.
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <article>
                <h3 className="font-semibold text-slate-950">
                  Colores personalizados
                </h3>
                <p className="text-sm text-slate-600">
                  Adaptá el código QR a la identidad visual de tu marca o
                  campaña.
                </p>
              </article>

              <article>
                <h3 className="font-semibold text-slate-950">
                  Fondo transparente
                </h3>
                <p className="text-sm text-slate-600">
                  Usá tu QR sobre diseños, etiquetas, flyers, packaging o piezas
                  para redes sociales.
                </p>
              </article>

              <article>
                <h3 className="font-semibold text-slate-950">
                  Alta resolución
                </h3>
                <p className="text-sm text-slate-600">
                  Generá códigos QR grandes y nítidos, ideales para materiales
                  impresos y digitales.
                </p>
              </article>

              <article>
                <h3 className="font-semibold text-slate-950">
                  Corrección de errores
                </h3>
                <p className="text-sm text-slate-600">
                  Elegí el nivel de corrección según el diseño, el tamaño y el
                  uso final del código QR.
                </p>
              </article>
            </div>
          </section>

          <RecentQrList />
        </section>

        <aside className="lg:col-span-5" aria-labelledby="qr-preview-title">
          <h2 id="qr-preview-title" className="sr-only">
            Vista previa del código QR
          </h2>

          <QrPreview
            generatedUrl={generatedUrl}
            foregroundColor={foregroundColor}
            backgroundColor={backgroundColor}
            isTransparent={isTransparent}
            errorCorrection={errorCorrection}
            size={size}
          />
        </aside>
      </main>

      
    </div>
  );
}

export default Home;