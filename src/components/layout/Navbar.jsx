function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-12">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="QR Precision logo"
            className="h-9 w-9 rounded-md object-contain"
          />

          <span className="text-xl font-bold text-blue-950">
            QR Precision
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
        </div>

        <div className="flex items-center gap-3">
        </div>
      </nav>
    </header>
  );
}

export default Navbar;