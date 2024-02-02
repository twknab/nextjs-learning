import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// This is Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* FONTS: This is how we add our custom fonts to body */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
