import React from "react";
import { motion } from "framer-motion";
import { UPDATE_DECK, SHUFFLE_DECK, DISCARD } from "../../utils/actions";
function Card() {
  return (
    <section>
            <div>
            <motion.div
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
            <h1></h1>
            </motion.div>
            </div>
    </section>
  );
}

export default Card;
