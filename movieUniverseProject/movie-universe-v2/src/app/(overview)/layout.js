import Navbar from "@/components/layout/Navbar";
import "../globals.css"
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";


export default function Layout({ children }) {
  return (
      
        <div className="w-full bg-white/20">
          {children}
        </div>
  );
}
