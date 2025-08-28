import { useState } from "react";
import { faqs } from "../../utils/data";
import { AnimatePresence, motion } from "motion/react";
import { icons } from "../../assets/assets";

export default function FAQs() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <motion.section layout className="px-6 py-16 bg-bgSoft text-bgLight">
      <h2 className="text-4xl font-subheading font-bold text-center mb-10">
        FAQs
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="bg-bgMuted p-4 rounded-xl cursor-pointer"
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            layout
            transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{faq.q}</h3>
              <span className="text-highlight">
                {openFaq === i ? <icons.FaMinus /> : <icons.FaPlus />}
              </span>
            </div>
            <AnimatePresence>
              {openFaq === i && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="mt-2 text-gray-300">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
