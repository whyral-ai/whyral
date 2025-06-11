
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';

const footerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const hoverEffect = {
  scale: 1.15,
  transition: { duration: 0.2, ease: 'easeInOut' },
};

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className=" text-gray-400"
    >
      <div className=" bg-white/10 mt-12">
        <div className="grid mx-universal grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-10">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-brand mb-3">Whyral.ai</h2>
            <p className="leading-relaxed text-sm text-gray-400">
              Built for creators — to create smarter, grow faster, and engage deeper.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><motion.a href="#" whileHover={{ x: 5 }} className="hover:text-white">About Us</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 5 }} className="hover:text-white">Careers</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 5 }} className="hover:text-white">Guide</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 5 }} className="hover:text-white">Contact</motion.a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><motion.a href="#" whileHover={{ x: 5 }} className="hover:text-white">Blog</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 5 }} className="hover:text-white">Help Center</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 5 }} className="hover:text-white">Privacy Policy</motion.a></li>
              <li><motion.a href="#" whileHover={{ x: 5 }} className="hover:text-white">Terms of Service</motion.a></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex items-center space-x-5">
              <motion.a href="https://github.com/DineshPawar7" whileHover={hoverEffect} className="text-gray-400 hover:text-white">
                <FaGithub size={22} />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/dineshpawar07" whileHover={hoverEffect} className="text-gray-400 hover:text-white">
                <FaLinkedin size={22} />
              </motion.a>
              <motion.a href="https://www.youtube.com/@DineshPawar_.07" whileHover={hoverEffect} className="text-gray-400 hover:text-white">
                <FaYoutube size={22} />
              </motion.a>
              <motion.a href="https://www.instagram.com/dineshpawar07_/" whileHover={hoverEffect} className="text-gray-400 hover:text-white">
                <FaInstagram size={22} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-gray-700 py-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Whyral.ai. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
