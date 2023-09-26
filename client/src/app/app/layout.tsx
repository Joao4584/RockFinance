"use client"
// * Modules * //
import { Inter } from 'next/font/google';
import Head from 'next/head';
import type { Metadata } from 'next';


// * Exports * //
import { AuthProvider } from '@/context/authContext';
import DashboardLayout from '@/layout/dashboard';
import '@/assets/globals.css';


// * Components * //
const inter = Inter({ subsets: ['greek'] });

export const metadata: Metadata = {
  title: "RockFinance - Painel",
  description: "Dashboard",
};

export default function RootLayout({ children }: childrenProps) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="images/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <AuthProvider>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </AuthProvider>
      </body>
    </html>
  )
}
