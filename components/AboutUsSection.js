"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  // Parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services = [
    {
      title: "About Student Affairs Office",
      description:
        "Providing comprehensive student support services that foster academic success, personal development, well-being, and an inclusive campus experience.",
      position: "left",
    },
    {
      title: "Vision & Mission",
      description:
        "To cultivate a vibrant student community by empowering individuals through leadership opportunities, holistic development programs, and meaningful campus engagement.",
      position: "left",
    },
    {
      title: "Key Responsibilities",
      description:
        "Managing student welfare programs, scholarships, grievance redressal, disciplinary matters, student records, and coordination of extracurricular activities.",
      position: "right",
    },
    {
      title: "Major Initiatives",
      description:
        "Organizing orientation programs, leadership workshops, wellness campaigns, cultural events, community outreach projects, and student development initiatives.",
      position: "right",
    },
  ];

  // const stats = [
  //   { icon: <Users className="w-6 h-6" />, value: 5000, label: "Active Students", suffix: "+" },
  //   { icon: <Home className="w-6 h-6" />, value: 10, label: "Hostel Blocks", suffix: "" },
  //   { icon: <Calendar className="w-6 h-6" />, value: 18, label: "Years Legacy", suffix: "+" },
  //   { icon: <TrendingUp className="w-6 h-6" />, value: 96, label: "Satisfaction Rate", suffix: "%" },
  // ];

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-white overflow-hidden relative transition-colors duration-300"
    >
      {/* Decorative background circles */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-indigo-500/5 dark:bg-[#3a5ba0]/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-amber-500/5 dark:bg-amber-500/3 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-indigo-600/20 dark:bg-[#3a5ba0]/20"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-amber-600/20 dark:bg-amber-500/15"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Header Block */}
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-indigo-600 dark:text-amber-500 font-bold mb-2 flex items-center gap-2 tracking-wider text-sm uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* <Zap className="w-4 h-4" />
            Discover Our Mission */}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tight">
            About the Office
          </h2>
          <motion.div
            className="w-24 h-1 bg-indigo-600 dark:bg-amber-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.p
          className="text-center max-w-3xl mx-auto mb-16 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-medium"
          variants={itemVariants}
        >
          The Student Affairs Office acts as the core platform bridging students with administration. We oversee extra-curricular activities, residential welfare, counseling networks, scholarship distributions, and wellness campaigns to foster a vibrant campus lifestyle.
        </motion.p>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-center">
          {/* Left Column Services */}
          <div className="space-y-12">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.15}
                />
              ))}
          </div>

          {/* Center Image Portrait */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-[280px]" variants={itemVariants}>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600"
                  alt="University Campus Life"
                  className="w-full h-80 object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 border-4 border-indigo-400/30 dark:border-[#3a5ba0]/40 rounded-2xl -m-3.5 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-indigo-600/10 dark:bg-[#3a5ba0]/10"
                style={{ y: y1 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-amber-500/10"
                style={{ y: y2 }}
              />
            </motion.div>
          </div>

          {/* Right Column Services */}
          <div className="space-y-12">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.15}
                />
              ))}
          </div>
        </div>

        {/* Stats Grid */}

        {/* CTA Block */}
        <motion.div
          className="mt-20 p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-100 border border-slate-200 dark:bg-slate-900 dark:border-slate-800"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black mb-1 text-slate-900 dark:text-white tracking-tight">Need assistance or have a grievance?</h3>
            <p className="text-slate-600 dark:text-slate-300 font-medium">Reach out directly to the respective department office coordinator.</p>
          </div>

          <motion.a
            href="/contact"
            className="bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-[#3a5ba0] dark:hover:bg-[#3a5ba0]/90 px-6 py-3.5 rounded-xl flex items-center gap-2 font-bold transition-colors shadow-md text-sm shrink-0 cursor-pointer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Contact SAO Office <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServiceItem({ title, description, variants, delay }) {
  return (
    <motion.div
      className="flex flex-col group text-left"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <h3 className="text-lg font-black tracking-tight text-slate-900 dark:text-white mb-2">
        {title}
      </h3>

      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
        {description}
      </p>
    </motion.div>
  );
}
function StatCounter({ icon, value, label, suffix, delay }) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 45,
    damping: 12,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <motion.div
      className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center text-center border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-colors duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-slate-900 border border-indigo-100/50 dark:border-slate-800 flex items-center justify-center mb-4 text-indigo-600 dark:text-amber-500">
        {icon}
      </div>

      <div ref={countRef} className="text-3xl font-black text-slate-900 dark:text-white flex items-center tracking-tight">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </div>

      <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mt-1.5">{label}</p>

      <div className="w-8 h-0.5 bg-indigo-600 dark:bg-amber-500 mt-3.5 rounded-full" />
    </motion.div>
  );
}
