import React from "react";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <motion.div
    initial={{ scale: 0}}
    animate={{ rotate: 360, scale: 2, transition: { duration: 0.5 } }}
    whileHover={{ scale: 2.2 }}
    >
      <h1>Car of the day</h1>
    </motion.div>
  );
};

export default Welcome;