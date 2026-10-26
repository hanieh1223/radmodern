import Link from "next/link";
import { mainNavigation, secondaryNavigation, siteConfig } from "../../lib/site";

export default function Footer() {
  const links = [...mainNavigation, ...secondaryNavigation, { href: "/contact", label: "تماس با ما" }];

  return (
    <footer className="footer">
      <div className="shell footer-main">
        <Link href="/" className="footer-brand" aria-label={siteConfig.name + "، صفحه اصلی"}>
          <b>R<span>.</span></b>
          <span>{siteConfig.name}<small>فناوری برای پیشرفت</small></span>
        </Link>
        <p>راهکارهای دیجیتال برای مسئله‌های واقعی.<br />طراحی، توسعه و بهبود با نگاهی کاربردی.</p>
        <nav aria-label="پیوندهای پاورقی">
          {links.map(({ href, label }) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>ساخته‌شده با تمرکز بر جزئیات.</span>
      </div>
    </footer>
  );
}
