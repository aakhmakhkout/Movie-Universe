import Navbar from "@/components/layout/Navbar";
import "../globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";

export default function Layout({ children }) {
  return (
    <section className="min-h-full flex w-full flex-col">
      <Navbar />

      <main className="w-full min-h-screen flex fle-col">
        <header>
          <Sidebar />
        </header>
        <section className="w-[92%]">{children}</section>
      </main>
    </section>
  );
}
