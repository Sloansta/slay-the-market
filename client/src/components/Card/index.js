import React from "react";
import { motion } from "framer-motion";
import { UPDATE_DECK, SHUFFLE_DECK, DISCARD } from "../../utils/actions";
function Card() {
    const cards = [{
        name: 'card1',
        val: 5
    },
    {
        name: 'card2',
        val: 12
    },
    {
        name: 'card3',
        val: 8
    }]
  return (
    <section>
        {cards.forEach((card) => (
            <div>
            <motion.div
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
            {card.name} cards
            </motion.div>
            </div>
        ))}
    </section>
  );
}

export default Card;
