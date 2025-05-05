import { Toaster } from "@/components/ui/sonner";
import NavBar from "../../components/navbar";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <NavBar />
      {children}
      <Toaster position="bottom-right" />
      <Footer />
    </>
  );
}
