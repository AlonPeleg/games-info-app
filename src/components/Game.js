import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ game }) => {
  const formatDate = (date) => {
    const dateArr = date.split("-");
    return `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
  };

  return (
    <StyledGame>
      <h3>{game.name}</h3>
      <img src={game.background_image} alt={game.name} />
      <p>Release Date: {formatDate(game.released)}</p>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
