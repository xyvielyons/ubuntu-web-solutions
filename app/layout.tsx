import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";
import Providers from "./providers";
import { DarkModeProvider } from '@/context/DarkModeContext';
const roboto = Roboto({
  subsets: ['latin'], // Choose the character subsets you need
  weight: ['400','500','100','900','300', '700'], // Include specific font weights (e.g., normal, bold)
  variable: '--font-roboto', // Add a custom CSS variable for the font
});

export const metadata: Metadata = {
  title: "UbuntuWebSolutions",
  description: "Ubuntu Web Solutions is your trusted partner for premium website development, innovative software solutions, and hardware integration. Specializing in custom-built, responsive websites tailored to your unique needs, we deliver seamless user experiences with cutting-edge technologies. Our expertise in Ubuntu-based platforms ensures top-tier performance, enhanced security, and scalable solutions for businesses of all sizes. Elevate your digital presence with Ubuntu Web Solutions—where creativity meets functionality for results-driven success. Contact us today to transform your ideas into impactful web and software solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased dark:bg-black`}
      >
        <DarkModeProvider>
        <Providers>
          {children}
        </Providers>
        </DarkModeProvider>
        
      </body>
    </html>
  );
}
