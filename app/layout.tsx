import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ángel David Avirama | Software Developer",
  description:
    "Portafolio de Ángel David Avirama, estudiante de Ingeniería de Sistemas interesado en desarrollo Full Stack y ciencia de datos."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
