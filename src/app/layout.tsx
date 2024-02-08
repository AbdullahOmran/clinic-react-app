import "./globals.scss";
import type { Metadata } from "next";
import { Providers } from "../redux/provider";

export const metadata: Metadata = {
  title: "Welcome to Medcy",
  description: "Healthcare Services Provider",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
