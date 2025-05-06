import loop from "../assets/videos/loop.mp4";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        src={loop}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4 bg-black bg-opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Youth Club</h1>
        <p className="text-xl">Join us in creating impact and fun!</p>
      </motion.div>
    </section>
  );
}
