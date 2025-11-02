import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#/" },
  { name: "About", href: "#About" },
  { name: "Testimonials", href: "#Testimonials" },
  { name: "Services", href: "#Services" },
  { name: "Contact US", href: "#Contact" },
];

const menuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { 
      type: "tween", 
      duration: 0.4, 
      staggerChildren: 0.1,
      when: "beforeChildren"
    },
  },
  exit: { 
    x: "100%", 
    transition: { 
      type: "tween", 
      duration: 0.3 
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

function Navbar() {
  const [open, setOpen] = useState(false);

  const NabHandler = () => {
    setOpen(!open);
    document.body.style.overflow = open ? "unset" : "hidden";
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="max-w-7xl mx-auto py-3 px-5 flex justify-between items-center"
      >
        <div className="font-bold text-[#33CCCC] text-3xl">Webelite</div>

        <ul className="lg:flex gap-6 items-center font-medium text-white hidden">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="hover:text-[#33CCCC] transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#33CCCC] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="bg-[#33CCCC] text-white py-2 px-4 cursor-pointer rounded-md border border-[#33CCCC] transition-all duration-300 hover:bg-transparent hover:text-[#33CCCC] hover:shadow-[0_0_15px_#33CCCC] hover:scale-[1.03] hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33CCCC]/60">
            Get Started
          </button>
        </ul>

        <Menu 
          onClick={NabHandler} 
          className="lg:hidden text-white cursor-pointer"
          size={28}
        />
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 bg-gray-950 w-[300px] h-screen z-50 border-l border-[#33CCCC] flex flex-col items-center pt-36"
          >
            <motion.ul className="space-y-10 text-gray-300 text-2xl font-semibold">
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <a 
                    href={link.href}
                    className="hover:text-[#33CCCC] transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#33CCCC] after:transition-all after:duration-300 hover:after:w-full"
                    onClick={NabHandler}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={itemVariants}>
                <button className="bg-[#33CCCC] text-white py-2 px-4 cursor-pointer rounded-md border border-[#33CCCC] transition-all duration-300 hover:bg-transparent hover:text-[#33CCCC] hover:shadow-[0_0_15px_#33CCCC] hover:scale-[1.03] hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#33CCCC]/60">
                  Get Started
                </button>
              </motion.li>
            </motion.ul>

            <X
              onClick={NabHandler}
              className="absolute top-10 right-10 cursor-pointer border border-[#33CCCC] text-white p-1 rounded-md"
              size={28}
            />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
