function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-12">
        <div className="flex items-center gap-2 font-bold text-blue-950">
          <span>▣</span>
          QR Precision
        </div>

        <div className="flex gap-5 text-sm text-slate-600">
          <a href="#privacy" className="hover:text-blue-900 hover:underline">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-blue-900 hover:underline">
            Terms
          </a>
          <a href="#support" className="hover:text-blue-900 hover:underline">
            Support
          </a>
        </div>

        <p className="text-sm text-slate-500">© 2026 QR Precision.</p>
      </div>
    </footer>
  );
}

export default Footer;