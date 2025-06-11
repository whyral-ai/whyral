import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonialsData";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, type: "spring" }
  })
};

export default function Testimonials() {
  return (
    <section className="text-white">
      <div className="mx-universal text-center">
        <motion.h2 
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p 
          className="text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Real stories from real customers. We value their feedback.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/10 rounded-xl shadow-lg p-6 relative hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-slate-500"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-200 italic text-left">"{item.feedback}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
