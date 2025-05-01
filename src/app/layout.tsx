import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="es">
        <head>
          <title>Track My Money</title>
          <meta
            name="description"
            content="Gestiona tus finanzas efectivamente con Track My Money."
          />
        </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
