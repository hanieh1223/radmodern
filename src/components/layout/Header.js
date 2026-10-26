import Image from "next/image";
import Link from "next/link";
import { mainNavigation, secondaryNavigation } from "../../lib/site";

export default function Header() {
  return (
    <header className="header">
      <div className="shell header-inner">
        <nav className="nav nav-right" aria-label="منوی اصلی">
          {mainNavigation.map(({ href, label }) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </nav>

        <Link href="/" className="brand" aria-label="راد مدرن، صفحه اصلی">
          <Image
            className="brand-logo"
            src="/Logo.svg"
            alt=""
            width={42}
            height={42}
            priority
          />
          <span className="brand-name">راد مدرن<small>RAD MODERN</small></span>
        </Link>

        <nav className="nav nav-left" aria-label="پیوندهای تکمیلی">
          {secondaryNavigation.map(({ href, label }) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
          <Link className="contact-link" href="/contact">تماس با ما <b aria-hidden="true">↗</b></Link>
        </nav>
      </div>
    </header>
  );
}
