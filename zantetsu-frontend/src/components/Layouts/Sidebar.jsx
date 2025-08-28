import { motion } from "motion/react";

export default function Sidebar() {
  return (
    <motion.div className="fixed top-0 left-0 z-20 bg-bgSoft/40 w-screen h-screen text-bgLight">
      <motion.div
        className="absolute left-0 w-full xs:w-70 h-full bg-bgSoft overflow-y-auto hide-scrollbar"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        Sidebar
      </motion.div>
    </motion.div>
  );
}
