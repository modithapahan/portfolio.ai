import React from "react";
import { motion } from "framer-motion";

import BackgroundEffect from "./BackgroundEffect";
import AnimatedFace from "./AnimatedFace";
import NavMenu from "./NavMenu";
import Header from "./Header";

function Home() {
  return (
    <>
      {/* Background Theme */}
      <BackgroundEffect />

      {/* Custom Header */}
      <Header />

      <motion.div
        className="intro-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="cursor typewriter-animation">Hey there, I'm Moditha👋</p>
        <h1 className="main-title">AI Portfolio</h1>
      </motion.div>

      {/* Avatar */}
      <AnimatedFace />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Bottom Navigation */}
        <NavMenu />
      </motion.div>
    </>
  );
}

export default Home;