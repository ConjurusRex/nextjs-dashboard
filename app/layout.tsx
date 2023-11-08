import './ui/global.css'
import { inter } from '@/app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-700 ${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
