import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  game: GameQuery;
}

const GameHeading = ({ game }: Props) => {
  const heading = `${game.platform?.name || ""} ${
    game.genre?.name || ""
  } Games`;
  return (
    <Heading marginBottom={5} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
