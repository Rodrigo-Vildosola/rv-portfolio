import DesktopNavbar from "@/components/base/desktop-navbar";
import MobileNavbar from "@/components/base/mobile-navbar"

const Navbar = () => {

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex justify-between items-center p-6 rounded-xl w-[calc(100%-2rem)] max-w-7xl mx-auto mt-4 shadow-lg z-50">
      <h1 className="text-2xl font-bold">Rodrigo Vildosola</h1>

      <div className="block md:hidden ">
        <MobileNavbar />
      </div>
      <div className={`hidden md:flex items-center space-x-10 `}>
        <DesktopNavbar />
      </div> 
    </nav>
  );
};

export default Navbar;
