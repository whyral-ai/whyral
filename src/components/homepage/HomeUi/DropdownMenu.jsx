import { motion } from 'framer-motion';

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export default function DropdownMenu() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={dropdownVariants}
      className="absolute top-full mt-2 w-48 bg-white/10 backdrop-blur-md rounded-md shadow-lg border border-white/10"
    >
      <ul className="p-2 space-y-2 text-sm">
        <li><a href="#" className="block px-3 py-2 hover:bg-white/10 rounded">Blog</a></li>
        <li><a href="#" className="block px-3 py-2 hover:bg-white/10 rounded">Tutorials</a></li>
        <li><a href="#" className="block px-3 py-2 hover:bg-white/10 rounded">Docs</a></li>
      </ul>
    </motion.div>
  );
}
