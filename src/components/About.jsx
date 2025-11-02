import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AboutImg from "../assets/AboutImg.jpg";

const About = () => {
  const [counterOn, setCounterOn] = useState(false);

  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    onChange: (inView) => setCounterOn(inView),
  });

  return (
    <section id="about" className="bg-gray-950 py-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <img
            src={AboutImg}
            alt="About"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-5"
        >
          <h1 className="text-4xl font-bold text-[#33CCCC]">About Us</h1>
          <p className="text-gray-300">
            Welcome to Webelite Builders, where we blend creativity, strategy,
            and technology to help businesses excel in the digital landscape.
            Founded in 2024, we are a young and dynamic digital marketing agency
            based in Kolkata, dedicated to delivering results-driven solutions
            tailored to your unique business goals.
          </p>
          <p className="text-gray-300">
            We are passionate about creating stunning, high-performance websites
            that not only look great but also drive real business results.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block rounded-md px-6 py-3 text-white border border-[#33CCCC] shadow-[0_0_10px_#33CCCC] hover:bg-[#33CCCC] transition-colors duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Stats */}
      <div
        ref={ref}
        className="mt-16 flex flex-wrap justify-center gap-10 text-center"
      >
        {[
          { end: 15, label: "Completed Projects" },
          { end: 2, label: "Years Experience" },
          { end: 12, label: "Happy Clients" },
        ].map((stat, idx) => (
          <div key={idx}>
            <h3 className="text-4xl font-bold text-[#33CCCC]">
              {counterOn && <CountUp end={stat.end} duration={2} />}+
            </h3>
            <p className="text-gray-300 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
