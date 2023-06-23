import { IoMdFlag } from 'react-icons/io';
import { GiFireFlower } from 'react-icons/gi';
import { FiGift } from 'react-icons/fi';
import { RiHeartFill } from 'react-icons/ri';
import { AiOutlineFire } from 'react-icons/ai';
import { BsBellFill } from 'react-icons/bs';
import { TiStar } from 'react-icons/ti';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { MdLocalBar } from 'react-icons/md';
import { BsFillTreeFill } from "react-icons/bs";

const specialDates = [
  {
    name: 'Feliz Natal',
    month: 12,
    day: 25,
    icon: <BsFillTreeFill  />,
  },
  {
    name: 'É ano Novo',
    month: 1,
    day: 1,
    icon: <IoMdFlag />,
  },
  {
    name: 'Bora curtir o carnaval',
    month: 2,
    day: 16,
    icon: <GiFireFlower  />,
  },
  {
    name: 'Hoje é Páscoa',
    month: 4,
    day: 17,
    icon: <FiGift  />,
  },
  {
    name: 'Dia dos Namorados',
    month: 6,
    day: 12,
    icon: <RiHeartFill />,
  },
  {
    name: 'Festa Junina. Canjica?',
    month: 6,
    day: 24,
    icon: <AiOutlineFire  />,
  },
  {
    name: 'Dia da Independência!',
    month: 9,
    day: 7,
    icon: <BsBellFill />,
  },
  {
    name: 'Dia das Crianças.',
    month: 10,
    day: 12,
    icon: <TiStar />,
  },
  {
    name: 'Dia do Desenvolvedor.',
    month: 10,
    day: 25,
    icon: <HiOutlineLightBulb />,
  },
  {
    name: 'Réveillon',
    month: 12,
    day: 31,
    icon: <MdLocalBar />,
  },
];

export default specialDates;
