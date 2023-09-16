// * Modules * //
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

// * Exports * //
import "tailwindcss/tailwind.css";

// * System * //

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RockFinance",
  description: "Projeto de controle financeiro.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="icon" href="favicon.ico" sizes="30" type="image/ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
