import "./globals.css";
import Calculator from "./calculator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-pt">
      <body>
        <Calculator/>
      </body>
    </html>
  );
}