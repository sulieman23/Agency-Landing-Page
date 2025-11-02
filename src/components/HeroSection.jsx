import React from "react";
import bg from "../assets/bg1.jpg";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <div
      className="relative flex items-center justify-center min-h-[80vh] md:min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        <motion.h3
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
          className="text-white text-base md:text-xl"
        >
          Digital Marketing Agency____
        </motion.h3>

        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-3xl md:text-6xl font-bold text-white mt-3 leading-tight"
        >
          Grow Your Business with Digital <br />
          <span className="text-[#33CCCC]">Marketing Solution!</span>
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="text-sm md:text-lg text-gray-200 max-w-xl mx-auto mt-4"
        >
          Unlock the power of digital marketing to grow your business. Our expert
          strategies drive results and maximize your online potential.
        </motion.p>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
        >
          <button className="bg-[#33CCCC] text-white rounded-md px-6 py-2 font-semibold flex items-center justify-center gap-2">
            Get Started <ChevronRight />
          </button>
              
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            className="inline-block rounded-md px-6 py-2 bg-transparent text-white border-2 border-green-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] hover:bg-[#33CCCC] transition-colors duration-300"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
