import type { Suit, Value, PlayingCard } from "../types/PlayingCards";

const suits: Suit[] = ["clubs", "diamonds", "hearts", "spades"];
const values: Value[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export function generateDeck(): PlayingCard[] {
  const combinations = suits.flatMap((suit) =>
    values.map((value) => ({ suit, value })),
  );

  return combinations;
}

/* Jeg har hentet typene fra PlayingCards og satt opp funksjonen for å kombinere Suits og Values.
Funksjonen går igjennom hver farge og for hver verdi lager den et kort. Totalt 13 av hver farge.
Med .flatMap får jeg en samlet alle kombinasjonene til én liste, istedenfor lister i lister.
 */
