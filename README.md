# RadModern

وب‌سایت فارسی راد مدرن با Next.js App Router و React.

## اجرا
```bash
npm ci
npm run dev
```

## بررسی
```bash
npm run lint
npm run build
```

## ساختار
- `src/app/layout.js`: قالب، متادیتا و جهت راست‌به‌چپ
- `src/app/page.js`: صفحه اصلی و محتوای اصلی
- `src/app/globals.css`: توکن‌های طراحی، استایل‌ها و واکنش‌گرایی
- `src/components/layout/`: هدر و فوتر

رنگ‌ها و استایل‌ها در یک فایل مرکزی نگهداری می‌شوند. لینک صفحات داخلی فعلاً مسیرهای پیشنهادی هستند و باید همراه صفحات مربوطه ساخته شوند.
