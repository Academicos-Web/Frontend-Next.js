import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>

        {children}

        <Footer />
      </body>
    </html>
  );
}