const Bfooter = () => {
  const socialLinks = [
    { href: 'https://www.facebook.com/santiago.valadez.50', label: 'Facebook', icon: 'f' },
    { href: 'https://x.com/Santiaga_va7', label: 'X', icon: 'x' },
    { href: 'https://www.instagram.com/valadez8829/', label: 'Instagram', icon: '◎' },
    { href: 'https://www.linkedin.com/in/santiago-valadez-b02a812b0/', label: 'LinkedIn', icon: 'in' },
  ];

  return (
    <footer className="mt-10 border-t border-slate-200 bg-slate-900 text-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-bold tracking-wide text-white">Santiago Valadez</p>
          <p className="mt-2 text-sm text-slate-400">
            © {new Date().getFullYear()} Santiago Valadez. Built with React, JavaScript and Tailwind.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <a href="mailto:saniago1340@gmail.com" className="rounded-full border border-slate-700 px-3 py-1.5 transition hover:border-blue-400 hover:text-white">
            saniago1340@gmail.com
          </a>
          <a href="https://www.instagram.com/valadez8829/" target="_blank" rel="noreferrer" className="rounded-full border border-slate-700 px-3 py-1.5 transition hover:border-blue-400 hover:text-white">
            @valadez8829
          </a>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-sm font-bold text-slate-200 transition hover:border-blue-400 hover:bg-blue-500 hover:text-white"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Bfooter;
