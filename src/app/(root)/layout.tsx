import "../globals.css";

export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark h-full">
      <body className="min-h-full bg-bg text-fg">{children}</body>
    </html>
  );
}
