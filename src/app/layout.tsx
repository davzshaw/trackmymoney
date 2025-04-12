import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Track My Money</title>
        <meta name="description" content="Manage your finances effectively with Track My Money." />
      </head>
      <body>{children}</body>
    </html>
  );
}
