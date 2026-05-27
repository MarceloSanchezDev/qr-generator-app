import { useState } from "react";
import UrlForm from "../../components/qr/UrlForm";
import ColorSelector from "../../components/qr/ColorSelector";
import QrSettings from "../../components/qr/QrSettings";
import QrPreview from "../../components/qr/QrPreview";
import LogoUploader from "../../components/qr/LogoUploader";
//import RecentQrList from "../../components/qr/RecentQrList";
import { isValidUrl } from "../../helpers/validateUrl";

function Home() {
  const [url, setUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [error, setError] = useState("");

  const [foregroundColor, setForegroundColor] = useState("#0b1c30");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [isTransparent, setIsTransparent] = useState(false);

  const [errorCorrection, setErrorCorrection] = useState("H");
  const [size, setSize] = useState(1024);

  const [logoImage, setLogoImage] = useState("");
  const [logoSize, setLogoSize] = useState(56);

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
              campaña o perfil social. Elegí colores, agregá tu logo y descargá
              tu QR listo para compartir o imprimir.
            </p>
          </header>

          <UrlForm
            url={url}
            error={error}
            onUrlChange={setUrl}
            onGenerate={handleGenerateQrCode}
          />

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
              logoSize={logoSize}
              onErrorCorrectionChange={setErrorCorrection}
              onSizeChange={setSize}
              onLogoSizeChange={setLogoSize}
            />
          </div>

          <LogoUploader
            logoImage={logoImage}
            onLogoChange={setLogoImage}
            onLogoRemove={() => setLogoImage("")}
          />

          <section
            className="rounded-2xl bg-white p-6 shadow-sm"
            aria-labelledby="qr-benefits-title"
          >
            <h2
              id="qr-benefits-title"
              className="mb-3 text-2xl font-bold tracking-tight text-slate-950"
            >
              Creá códigos QR personalizados para tu marca
            </h2>

            <p className="mb-5 text-slate-600">
              Podés personalizar colores, fondo, tamaño y agregar un logo en el
              centro. Para mejores resultados con logo, usá nivel de corrección
              alto.
            </p>
          </section>

          
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
            logoImage={logoImage}
            logoSize={logoSize}
          />
        </aside>
      </main>
    </div>
  );
}

export default Home;