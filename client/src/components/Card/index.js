import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { UPDATE_DECK, SHUFFLE_DECK, DISCARD, NEW_HAND, SELECTED_CARD } from "../../utils/actions";
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

  function selectedCard(index) {
    if (state.selectedCard) {
      dispatch({
        type: SELECTED_CARD,
        selectedCard: state.hand[index]
      })
    
    if ((state.selectedCard.length === 0)){
      // console.log('same card');
      document.getElementById(`${index}-player`).style.border = "solid 1px red";
    }


    // if ((state.selectedCard.length !== 0) && (state.selectedCard._id !== state.hand[index]._id)) {
    //   console.log('different card');
    //   document.getElementById(`${index}-player`).style.border = "solid 1px red";
    // }

    }

  
    
    console.log(index);
    // console.log(state);
    console.log(state.selectedCard)
    console.log(state.hand[index]);
  }

  const renderCards = state.hand.map((card, index) =>
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      // onDragEnd={(event, info) => console.log(info.point.x, info.point.y, event)}
    >
      <div className="card toggle-border" id={index + `-player`} key={index} style={{"width": "12rem"}} onClick={ () => selectedCard(index)}>
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
