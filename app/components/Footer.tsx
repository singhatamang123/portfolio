export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <div className="text-4xl font-semibold mb-6">Let's create something extraordinary.</div>
        <p className="text-slate-400 max-w-md mx-auto mb-10">
          Currently open to exciting opportunities and collaborations.
        </p>
        
        <a
          href="mailto:your.email@example.com"
          className="inline-block px-12 py-5 bg-white text-black rounded-2xl font-medium text-lg hover:bg-slate-200 transition-all"
        >
          Say Hello →
        </a>

        <div className="mt-20 text-sm text-slate-500">
          © {new Date().getFullYear()} Singh. Crafted with precision.
        </div>
      </div>
    </footer>
  );
}