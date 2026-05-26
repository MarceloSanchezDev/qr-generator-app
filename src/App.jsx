import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import UrlForm from "./components/qr/UrlForm";
import ColorSelector from "./components/qr/ColorSelector";
import QrSettings from "./components/qr/QrSettings";
import QrPreview from "./components/qr/QrPreview";
import RecentQrList from "./components/qr/RecentQrList";
import { isValidUrl } from "./helpers/validateUrl";

function App() {
  const [url, setUrl] = useState("https://example.com/campaign/q4-launch");
  const [generatedUrl, setGeneratedUrl] = useState("https://example.com/campaign/q4-launch");
  const [error, setError] = useState("");

  const [foregroundColor, setForegroundColor] = useState("#0b1c30");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [isTransparent, setIsTransparent] = useState(false);

  const [errorCorrection, setErrorCorrection] = useState("M");
  const [size, setSize] = useState(1024);

  const handleGenerateQrCode = () => {
    if (!isValidUrl(url)) {
      setError("Please enter a valid URL starting with http:// or https://");
      setGeneratedUrl("");
      return;
    }

    setError("");
    setGeneratedUrl(url);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff] text-slate-950">
      <Navbar />

      <main className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-6 px-4 py-10 md:px-12 lg:grid-cols-12">
        <section className="flex flex-col gap-6 lg:col-span-7">
          <div>
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Generate QR Codes for Any URL
            </h1>
            <p className="text-base text-slate-600">
              Create high-quality QR codes for business, marketing campaigns,
              social profiles or personal links.
            </p>
          </div>

          <UrlForm
            url={url}
            error={error}
            onUrlChange={setUrl}
            onGenerate={handleGenerateQrCode}
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

          <RecentQrList />
        </section>

        <aside className="lg:col-span-5">
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

      <Footer />
    </div>
  );
}

export default App;