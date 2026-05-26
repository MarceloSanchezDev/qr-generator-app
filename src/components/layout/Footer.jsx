function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-12">
        <a href="/" className="flex items-center gap-2 text-xl font-bold text-blue-950">
          <span className="text-2xl">▣</span>
          QR Precision
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm text-slate-600 hover:text-blue-900">
            Features
          </a>
          <a href="#pricing" className="text-sm text-slate-600 hover:text-blue-900">
            Pricing
          </a>
          <a href="#help" className="text-sm text-slate-600 hover:text-blue-900">
            Help
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden text-sm font-medium text-slate-600 hover:text-blue-900 md:block">
            Log In
          </button>
          <button className="rounded-lg bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 active:scale-95">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;