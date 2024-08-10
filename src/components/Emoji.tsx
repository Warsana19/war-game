import { Image, ImageProps } from "@chakra-ui/react";
import bull from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thump from "../assets/thumbs-up.webp";
import { px } from "framer-motion";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thump, alt: "recomennded", boxSize: "25px" },
    5: { src: bull, alt: "exceptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
