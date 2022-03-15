import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { UPDATE_DECK, SHUFFLE_DECK, DISCARD, NEW_HAND } from "../../utils/actions";
import { useGameContext } from '../../utils/GlobalState';

function Card() {
  const [state, dispatch] = useGameContext();

  // push 5 randomly into hand
  useEffect(() => {
    if (state) {
      let newHand = [];
      for(let i = 0; i < 5; i++) {
        newHand.push(state.cards[i])
      }
      dispatch({
        type: NEW_HAND,
        hand: newHand
      })
    }
  }, [state.playerTurn]);

  const renderCards = state.hand.map((card, index) =>
    <motion.div
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="card" key={index} style={{"width": "12rem"}}>
        {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
        <div className="card-body">
          <h6 className="card-name">{card.name}</h6>
        </div>
          <ul className="list-group">
            <li className="list-group-item">{card.class}</li>
            <li className="list-group-item">{card.value}</li>
          </ul>
      </div>
    </motion.div>
  );

  return (
    <section>
      <div className="card-deck">
        {renderCards}
      </div>
    </section>
  );
}

export default Card;
