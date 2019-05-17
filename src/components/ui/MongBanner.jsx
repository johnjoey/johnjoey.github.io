import React from 'react';

import Mong from './images/Mong';

const mongBanner = () => (
  <div className="mong-banner" style={{ maxWidth: '300px' }}>
    <div className="mong-banner__image">
      <Mong />
    </div>
    <div className="mong-banner__text">
      John Croker
    </div>
  </div>
);

export default mongBanner;
