import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";





import { GiFruitBowl } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md"
import { TbBrandElectronicArts } from "react-icons/tb";
import { FaIdeal } from "react-icons/fa6";
import { MdLocalPharmacy } from "react-icons/md";
import { SiOrganicmaps } from "react-icons/si";
import { GiHealthPotion } from "react-icons/gi";






import logo from "../assets/logo.png";


export default function Navbar() {
     const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-green-700 text-white shadow-lg sticky top-0 md:top-0 z-50 w-full  ">
      <div className=" flex max-w-8xl items-center justify-between px-5 top-0 md:top-0 z-50  ">
        <div className="w-full ">
          
        <Link to="/" className="text-2xl font-bold">
         <img src={logo} alt="logo"  className="md:w-50 md:h-19 w-30 "/>
        </Link>


       
        </div>

        

        <div className=" flex-col md:flex md:flex-row
    absolute md:static
    top-full left-0 w-full md:w-auto
    bg-white text-black md:bg-transparent md:text-white
    p-5 md:p-0 gap-5 z-50 hidden">
          <NavLink to="/" className="hover:text-yellow-300">
            Home
          </NavLink>

          <NavLink to="/products" className="hover:text-yellow-300">
            Products
          </NavLink>

          <NavLink to="/cart" className="hover:text-yellow-300">
            Cart
          </NavLink>

          <NavLink to="/login" className="hover:text-yellow-300">
            Login
          </NavLink>
        </div>

  {/* Hamburger */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>
{/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 border-t border-gray-700 pt-4 md:hidden ">

          <Link
            to="/"
            onClick={closeMenu}
            className="text-white hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            to="/products"
            onClick={closeMenu}
            className="text-white hover:text-blue-400"
          >
            Products
          </Link>

          <Link
            to="/cart"
            onClick={closeMenu}
            className="text-white hover:text-blue-400"
          >
            Cart
          </Link>

          <Link
            to="/login"
            onClick={closeMenu}
            className="text-white hover:text-blue-400"
          >
            Login
          </Link>

        </div>
      )}

   
        <div className="flex gap-3 bg-white rounded-lg md:pl-5  w-full md:w- md:pb-2   ">
            <FaSearch className="text-4xl mt-2 cursor-pointer  text-black ml-2 " />

            <input type="text" className=" border border-black rounded-lg mt-1 h-10 text-black  w-full "   placeholder="Search 250+ product.. "  ></input>
         

<div className="flex  md:ml-  pt-3  ">

            
             <FaMicrophone  className="text-3xl cursor-pointer  text-black mr-2" />
             </div>
            
</div>
       



     <div className=" flex  overflow-x-auto snap-x snap-mandatory scroll-smooth  md:grid md:grid-cols-7 md:overflow-visible lg:grid-cols-7  md:pl-50 pl-10 md:pt-2 pt-2 pb-2  md:w-350 md:hidden">
     
     
      <div className="   grid w-full grid-cols-1 md:pl-3  pr-25   ">
     
             <div className="bg-emerald-700 rounded-full md:w-15  w-12 h- md:pl-4 pt-2 pl-2  md:ml-1 md:h-15 md:pt-4 ">
                 <GiFruitBowl  className="text-white md:text-2xl  text-3xl  " />
                  </div>
     
                  <div className="md:pl-3 w-70  md:pl- ">
                  <h3 className="font-medium text-lg">Fresh</h3>
                 
                  </div>
         </div>
     
     
     
     
     <div className="    grid w-full grid-cols-1  md:pl-3  pr-25   ">
     
             <div className="bg-emerald-700 rounded-full md:w-15 w-12   md:pl-4 pt-2 pl-2  md:ml-3 md:h-15 md:pt-4  ml-3">
                 <MdLocalGroceryStore className="text-white md:text-3xl  text-3xl  " />
                  </div>
     
                  <div className="md:pl-3 w-70     ">
                  <h3 className="font-medium text-lg">Grocery</h3>

                  </div>
         </div>
     
     


          <div className="    grid w-full grid-cols-1   md:pl-3  pr-30  ">
     
             <div className="bg-emerald-700 rounded-full md:w-15  w-12 md:pl-4  pt-2 pl-2 md:ml-6 md:h-15 md:pt-4 ml-5 ">
                 <TbBrandElectronicArts className="text-white md:text-2xl  text-3xl  " />
                  </div>
     
                  <div className="md:pl-3 w-70  ">
                  <h3 className="font-medium text-lg">Electronics</h3>
                  
                  </div>
         </div>
     


     
           <div className="    grid w-full grid-cols-1   md:pl-3  pr-25   ">
     
             <div className="bg-emerald-700 rounded-full md:w-15  w-12 md:pl-4 pt-2 pl-2 md:ml-2 md:h-15 md:pt-4 ">
                 <FaIdeal  className="text-white md:text-2xl  text-3xl  " />
                  </div>
     
                  <div className="md:pl-3 w-70    ">
                  <h3 className="font-medium text-lg">Deals</h3>
                 
                  </div>
         </div>




         <div className="   grid w-full grid-cols-1   md:pl-3  pr-25   ">
     
             <div className="bg-emerald-700 rounded-full md:w-15  w-12 md:pl-4  pt-2 pl-2 md:ml-5 md:h-15 md:pt-4 ml-5">
                 <MdLocalPharmacy className="text-white md:text-2xl  text-3xl  " />
                  </div>
     
                  <div className="md:pl-3 w-70    ">
                  <h3 className="font-medium text-lg">Pharmacy</h3>
                 
                  </div>
         </div>
     


     <div className="   grid w-full grid-cols-1  md:pl-3  pr-25   ">
     
             <div className="bg-emerald-700 rounded-full md:w-15  w-12 md:pl-4  pt-2 pl-2 md:ml-3 md:h-15 md:pt-4 ml-2">
                 <SiOrganicmaps className="text-white md:text-2xl  text-3xl  " />
                  </div>
     
                  <div className="md:pl-3 w-70   ">
                  <h3 className="font-medium text-lg">Organic</h3>
                 
                  </div>
         </div>
     



     <div className="   grid w-full grid-cols-1   md:pl-3     ">
     
             <div className="bg-emerald-700 rounded-full md:w-15  w-12 md:pl-4  pt-2 pl-2 md:ml-3 md:h-15 md:pt-4 ">
                 <GiHealthPotion className="text-white md:text-2xl  text-3xl  " />
                  </div>
     
                  <div className="md:pl-3 w-70    ">
                  <h3 className="font-medium text-lg">Health</h3>
                  
                  </div>
         </div>
     



     
     

</div>






      
    </nav>
  );
}