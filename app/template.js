"use client";
import { animate, AnimatePresence, motion } from "framer-motion";
import RouteScreen from "./_components/RouteScreen";
import { usePathname } from "next/navigation";
export default function Template({ children }) {
  const pathname = usePathname();
  //   <motion.div
  //   className=" "
  //   initial={{ opacity: 0, x: 100 }}
  //   animate={{ opacity: 1, x: 0 }}
  //   transition={{ ease: "easeInOut", duration: 0.5 }}
  // >
  //   {children}
  // </motion.div>
  return (
    <AnimatePresence mode="wait">
      {/* <RouteScreen /> */}
      <motion.div key={pathname}>{children}</motion.div>;
    </AnimatePresence>
  );
}
