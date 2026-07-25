const NAV = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" className="header__brand">
          Sidartha
        </a>

        <nav className="header__nav" aria-label="Principal">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="header__link">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contacto" className="btn btn--primary btn--sm">
          Hablemos
        </a>
      </div>
    </header>
  );
}
