import "./styles.css";
import { motion, Variants } from "framer-motion";
import hero from "../../images/hero.jpeg";
import { Image, Img, Text } from "@chakra-ui/react";
import { SubHero } from "../atoms/Subhero";
import subhero from "../../images/hero.jpeg";
import rice from "../../images/rice.jpeg";
import alchohole from "../../images/alchoholeImage.jpeg";
import inside from "../../images/access.jpeg";
import intestine from "../../images/FoodHero.jpeg";
import hormone from "../../images/hormone.jpg";
import hatsu from "../../images/hatsu.jpg";
import honetsuki from "../../images/Honetsuki.jpg";

interface Props {
  img: string;
  hueA: number;
  hueB: number;
  text: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ img, hueA, hueB, text }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <Image src={img} />
        <Text
          fontSize="5xl"
          color={"black"}
          bg={"white"}
          p={3}
          borderRadius={10}
        >
          {text}
        </Text>
      </motion.div>
    </motion.div>
  );
}

const food: [string, number, number, string][] = [
  [hero, 340, 10, "カルビ"],
  [hormone, 340, 10, "ホルモン"],
  [honetsuki, 340, 10, "骨付カルビ"],
  [hatsu, 340, 10, "ハツ"],
  [intestine, 340, 10, "新鮮な肉"],
  [inside, 340, 10, "店内"],
  [alchohole, 340, 10, "お酒"],
  [rice, 340, 10, "ビビンバ"],
];

export const Photos2 = () => {
  return (
    <>
      <SubHero image={subhero} text="- 写真 -" />
      {food.map(([img, hueA, hueB, text]) => (
        <Card img={img} hueA={hueA} hueB={hueB} key={img} text={text} />
      ))}
    </>
  );
};
