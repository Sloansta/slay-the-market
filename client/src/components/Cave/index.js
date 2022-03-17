import React from 'react';
import caveBackground from '../../assets/stages/cave.png'

function Cave () {
  let background = caveBackground;

  let bgStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: "url(" + { background } + ")"
  };

    return (
      <>
      <div style={ bgStyle }>

      </div>
      </>
    )
}

export default Cave;