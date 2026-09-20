import type { PlayingCard, Suit } from "../types/PlayingCards";
import "./Card.css";
import clubsIcon from "../assets/clubsIcon.png";
import diamondIcon from "../assets/diamondIcon.png";
import heartsIcon from "../assets/heartsIcon.png";
import spadesIcon from "../assets/spadesIcon.png";

type CardProps = {
  card: PlayingCard;
  isSelected?: boolean;
};

const suitIcons: Record<Suit, string> = {
  clubs: clubsIcon,
  diamonds: diamondIcon,
  hearts: heartsIcon,
  spades: spadesIcon,
};

function Card({ card, isSelected }: CardProps) {
  return (
    <div className="playing-card">
      <div className="rank-top-suit">
        <img src={suitIcons[card.suit]} alt={card.suit} />
      </div>
      <div className="rank-top-number">{card.value}</div>
      <div className="suit-center">
        <img src={suitIcons[card.suit]} alt={card.suit} />
      </div>
      <div className="rank-bottom-suit">
        <img src={suitIcons[card.suit]} alt={card.suit} />
      </div>
      <div className="rank-bottom-number">{card.value}</div>
    </div>
  );
}

export default Card;
