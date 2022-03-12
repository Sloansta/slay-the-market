import React from 'react';
import { motion } from 'framer-motion';
import { UPDATE_DECK, SHUFFLE_DECK, DISCARD } from '../utils/actions'
function Card () {
    
    return (
        <section>
            <motion.div drag='x'
            dragConstraints={{ left: -100, right: 100}}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>Cards here</motion.div>
        </section>
    )
}

export default Card;