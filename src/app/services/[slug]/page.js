import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "../../../data/services";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "خدمت پیدا نشد" };
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` }
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main id="main" className="info-page shell">
      <Link className="back-link" href="/services">← بازگشت به خدمات</Link>
      <span className="eyebrow"><i />{service.tag} / SERVICE</span>
      <h1>{service.title}</h1>
      <p className="info-lead">{service.description}</p>
      <div className="info-grid">
        {service.details.map((detail, index) => (
          <article className="info-card" key={detail.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{detail.title}</h2>
            <p>{detail.description}</p>
          </article>
        ))}
      </div>
      <section className="info-cta">
        <div><h2>می‌خواهید درباره این خدمت صحبت کنیم؟</h2><p>نیاز پروژه‌تان را مطرح کنید تا مسیر مناسب را بررسی کنیم.</p></div>
        <Link className="btn primary" href="/contact">تماس با ما <b>←</b></Link>
      </section>
    </main>
  );
}
