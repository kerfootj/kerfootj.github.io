import React, { useState, useEffect } from 'react';
import useWindowDimensions from './useWindowDimensions';

const Game = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div>
      width: {width} ~ height: {height}
    </div>
  );
}

export default Game;