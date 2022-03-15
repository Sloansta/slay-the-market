import React from 'react';
import caveBackground from '../../assets/stages/cave.png'

function Cave () {
    return (
      <div className="background-image" style={{ backgroundImage: `url(${caveBackground})`}} />
    )
}

export default Cave;