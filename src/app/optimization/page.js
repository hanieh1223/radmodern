import InfoPage from "../../components/content/InfoPage";

export const metadata = {
  title: "بهینه‌سازی",
  description: "بهینه‌سازی عملکرد و تجربه کاربری محصولات دیجیتال."
};

const optimizationItems = [
  {
    title: "عملکرد",
    description: "بررسی سرعت، بارگذاری و رفتار صفحات."
  },
  {
    title: "تجربه کاربری",
    description: "پیدا کردن نقاط اصطکاک در مسیر کاربر."
  },
  {
    title: "اولویت‌بندی",
    description: "تمرکز بر اصلاحاتی که بیشترین ارزش را ایجاد می‌کنند."
  }
];

export default function OptimizationPage() {
  return (
    <InfoPage
      eyebrow="بهینه‌سازی / OPTIMIZATION"
      title="محصول فعلی‌تان را بهتر کنیم."
      description="با بررسی ساختار، تجربه کاربری و عملکرد فنی می‌توان اولویت‌های بهبود را مشخص کرد؛ سپس تغییرها را مرحله‌به‌مرحله ارزیابی کرد."
      items={optimizationItems}
    />
  );
}
