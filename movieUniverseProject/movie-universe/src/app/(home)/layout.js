import Navbar from "@/components/layout/Navbar";
import "../globals.css"
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";



export default function Layout({ children }) {
  return (
      
      <section className="min-h-full flex w-full">
        <section className="w-[8%]">
          <Sidebar />
        </section>

        <main className="w-full overflow-x-hidden h-screen">
        <header className="w-full h-[10%]">
          <Navbar />
        </header>
          <section className="ml-1 h-[85%]">
          {children}
          </section>
        </main>
        </section>
  );
}
