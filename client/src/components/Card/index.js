import React from "react";
import { motion } from "framer-motion";
import { UPDATE_DECK, SHUFFLE_DECK, DISCARD } from "../../utils/actions";
import { useGameContext } from '../../utils/GlobalState';

function Card() {
  const [state, dispatch] = useGameContext();
  console.log(state);
  return (
    <section>
      <motion.div
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="card" style={{"width": "18rem"}}>
          {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
          <div className="card-body">
            <h5 className="card-name">Card Name</h5>
          </div>
          <ul className="list-group">
            <li className="list-group-item">Card Class</li>
            <li className="list-group-item">Card Value</li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="card" style={{"width": "18rem"}}>
          {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
          <div className="card-body">
            <h5 className="card-name">Card Name</h5>
          </div>
          <ul className="list-group">
            <li className="list-group-item">Card Class</li>
            <li className="list-group-item">Card Value</li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="card" style={{"width": "18rem"}}>
          {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
          <div className="card-body">
            <h5 className="card-name">Card Name</h5>
          </div>
          <ul className="list-group">
            <li className="list-group-item">Card Class</li>
            <li className="list-group-item">Card Value</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default Card;
