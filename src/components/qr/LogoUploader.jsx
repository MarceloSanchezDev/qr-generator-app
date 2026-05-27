function LogoUploader({ logoImage, onLogoChange, onLogoRemove }) {
  const handleLogoUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const isValidImage = file.type.startsWith("image/");

    if (!isValidImage) {
      alert("Seleccioná un archivo de imagen válido.");
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    onLogoChange(imageUrl);
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-bold text-slate-950">
        Logo central
      </h2>

      <p className="mb-4 text-sm text-slate-600">
        Subí una imagen para mostrarla en el centro del código QR.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <label className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
          Subir logo
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="sr-only"
          />
        </label>

        {logoImage && (
          <button
            type="button"
            onClick={onLogoRemove}
            className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Quitar logo
          </button>
        )}
      </div>

      {logoImage && (
        <div className="mt-5 flex items-center gap-3">
          <img
            src={logoImage}
            alt="Logo seleccionado para el QR"
            className="h-14 w-14 rounded-xl border border-slate-200 object-contain p-1"
          />
          <p className="text-sm text-slate-500">
            Logo cargado correctamente.
          </p>
        </div>
      )}
    </section>
  );
}

export default LogoUploader;