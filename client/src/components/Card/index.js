import React from "react";
import { motion } from "framer-motion";
import { UPDATE_DECK, SHUFFLE_DECK, DISCARD } from "../../utils/actions";
import { dummyPlayer } from '../../utils/dummy';
function Card() {
    const { deck } = dummyPlayer;

    console.log(deck[0].name);
  return (
    <section>
        {deck.forEach((card) => (
            <div>
            <motion.div
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
            <h1>{card.name}</h1>
            </motion.div>
            </div>
        ))}
    </section>
  );
}

export default Card;
