import './global.css';

export const metadata = {
  title: 'TouseTech',
  description: 'TouseTech.com — Innovative technology solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
