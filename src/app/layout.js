import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
export const metadata={title:{default:"راد مدرن | راهکارهای دیجیتال",template:"%s | راد مدرن"},description:"راد مدرن؛ طراحی وب‌سایت، توسعه نرم‌افزار و راهکارهای هوش مصنوعی برای حل مسائل واقعی کسب‌وکارها.",applicationName:"راد مدرن",robots:{index:true,follow:true}};
export const viewport={width:"device-width",initialScale:1,themeColor:"#100653"};
export default function RootLayout({children}){return <html lang="fa" dir="rtl"><body><a className="skip-link" href="#main">رفتن به محتوای اصلی</a><Header/>{children}<Footer/></body></html>;}
