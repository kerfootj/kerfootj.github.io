import React from 'react';
import useWindowDimensions from './useWindowDimensions';

const Game: React.FC = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div>
      width: {width} ~ height: {height}
    </div>
  );
};

export default Game;
