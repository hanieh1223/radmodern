import Link from "next/link";
import { projects } from "../../data/projects";

export const metadata = {
  title: "نمونه‌کارها",
  description: "پروژه‌ها و نمونه‌کارهای راد مدرن؛ با شرح مسئله، راهکار و نتایج تأییدشده."
};

export default function WorkPage() {
  return (
    <main id="main" className="info-page shell">
      <span className="eyebrow"><i />نمونه‌کارها / SELECTED WORK</span>
      <h1>هر پروژه، پاسخی به یک نیاز.</h1>
      <p className="info-lead">در این بخش پروژه‌ها همراه با مسئله‌ی اولیه، راهکار اجراشده و نتایج قابل اتکا معرفی می‌شوند.</p>
      {projects.length ? (
        <div className="info-grid">
          {projects.map((project) => (
            <article className="info-card" key={project.slug}>
              <span>{project.category || "PROJECT"}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <Link className="detail-link" href={`/work/${project.slug}`}>مشاهده پروژه <b>←</b></Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>نمونه‌کارها در حال آماده‌سازی هستند.</h2>
          <p>پس از تکمیل اطلاعات واقعی پروژه‌ها، هر مورد از همین بخش به‌صورت خودکار نمایش داده خواهد شد.</p>
        </div>
      )}
    </main>
  );
}
