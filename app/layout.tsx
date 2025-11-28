import "@/app/globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "My Portfolio",
  description: "Created with Next.js, Tailwind, shadcn and Liquid Animation"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
