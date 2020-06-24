import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWindowDimensions from './useWindowDimensions';
import './Game.css';
import Grid from './grid';

const BOARD_WIDTH = 40;
const BOARD_HEIGHT = 12;

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    width: '96%',
  },
}));

const Game: React.FC = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();

  const [food, setFood] = useState(0);

  return (
    <div className={classes.container}>
      <div className={classes.board}>
        <svg viewBox={`0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}`}>
          <Grid
            snakes={[
              {
                body: [
                  { x: 1, y: 1 },
                  { x: 2, y: 1 },
                  { x: 2, y: 2 },
                ],
                color: '#a1a1a1',
              },
            ]}
            food={[{ x: 4, y: 4 }]}
            columns={12}
            rows={12}
            maxWidth={BOARD_WIDTH}
            maxHeight={BOARD_HEIGHT}
            x={0}
            y={0}
          />
        </svg>
      </div>
    </div>
  );
};

export default Game;
