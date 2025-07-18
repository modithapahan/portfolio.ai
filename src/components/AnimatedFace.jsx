import React from "react";
import { motion } from "framer-motion";

function AnimatedFace() {
  return (
    <motion.img
      src="/face.png"
      alt="Animated face"
      initial={{ y: 0 }}
      animate={{ y: [0, -4, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      style={{
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        display: "block",
        margin: "0 auto",
      }}
    />
  );
}

export default AnimatedFace;
