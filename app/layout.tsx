import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "TOScentron-bot",
  description: "BOT",
  icons: {
    icon: "/favicon.ico", // relative to public
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-white">
        <main className="flex justify-center pt-10">
          {children}
        </main>
      </body>
    </html>
  );
}
