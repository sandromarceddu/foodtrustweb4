'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from './I18nProvider';

export default function Header() {
  const { t, toggle, lang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white fixed top-0 left-0 z-50">
      <nav className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo2.png" alt="Logo" width={36} height={36} />
          <span className="font-semibold">Blockchain Food Trust</span>
        </Link>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-6">
          <li><Link href="/">{t.nav.home}</Link></li>
          {/* Se crei la pagina del progetto, sblocca questa voce: */}
          {/* <li><Link href="/progetto">{t.nav.project}</Link></li> */}
          <li><Link href="/prodotti">{t.nav.products}</Link></li>
          {/* /territori attualmente NON esiste: crea la pagina o nascondi il link */}
          {/* <li><Link href="/territori">{t.nav.regions}</Link></li> */}
          <li><Link href="/verifica">{t.nav.verify}</Link></li>
          <li><Link href="/contatti">{t.nav.contact}</Link></li>
          <li>
            <button onClick={toggle} className="btn btn-secondary">
              {t.nav.lang} {/* Mostra EN su IT e viceversa */}
            </button>
          </li>
        </ul>

        {/* MOBILE */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Apri menu"
        >
          <span className={`block h-1 w-7 bg-black transition ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-1 w-7 bg-black transition ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-1 w-7 bg-black transition ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="container py-3 flex flex-col gap-3">
            <li><Link href="/" onClick={() => setOpen(false)}>{t.nav.home}</Link></li>
            {/* <li><Link href="/progetto" onClick={() => setOpen(false)}>{t.nav.project}</Link></li> */}
            <li><Link href="/prodotti" onClick={() => setOpen(false)}>{t.nav.products}</Link></li>
            {/* <li><Link href="/territori" onClick={() => setOpen(false)}>{t.nav.regions}</Link></li> */}
            <li><Link href="/verifica" onClick={() => setOpen(false)}>{t.nav.verify}</Link></li>
            <li><Link href="/contatti" onClick={() => setOpen(false)}>{t.nav.contact}</Link></li>
            <li>
              <button onClick={() => { toggle(); setOpen(false); }} className="btn btn-secondary">
                {t.nav.lang}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
