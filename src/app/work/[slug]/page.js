import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "پروژه پیدا نشد" };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` }
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main id="main" className="info-page shell">
      <Link className="back-link" href="/work">← بازگشت به نمونه‌کارها</Link>
      <span className="eyebrow"><i />{project.category || "PROJECT"}</span>
      <h1>{project.title}</h1>
      <p className="info-lead">{project.summary}</p>
      <div className="info-grid">
        {[
          { title: "مسئله", description: project.challenge },
          { title: "راهکار", description: project.solution },
          { title: "نتیجه", description: project.outcome }
        ].filter((item) => item.description).map((item) => (
          <article className="info-card" key={item.title}><h2>{item.title}</h2><p>{item.description}</p></article>
        ))}
      </div>
    </main>
  );
}
