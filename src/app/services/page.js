import Link from "next/link";
import { services } from "../../data/services";

export const metadata = {
  title: "خدمات",
  description: "خدمات طراحی وب‌سایت، توسعه نرم‌افزار، هوش مصنوعی و بهینه‌سازی راد مدرن."
};

export default function ServicesPage() {
  return (
    <main id="main" className="info-page shell">
      <span className="eyebrow"><i />خدمات / SERVICES</span>
      <h1>راهکار متناسب با نیاز شما.</h1>
      <p className="info-lead">خدمات ما از طراحی محصول دیجیتال تا ساخت ابزارهای اختصاصی را پوشش می‌دهد. برای دیدن جزئیات هر خدمت، آن را انتخاب کنید.</p>
      <div className="info-grid">
        {services.map((service) => (
          <article key={service.slug} className="info-card">
            <span>{service.number}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link className="detail-link" href={`/services/${service.slug}`}>جزئیات خدمت <b>←</b></Link>
          </article>
        ))}
      </div>
    </main>
  );
}
