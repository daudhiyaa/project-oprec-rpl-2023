interface Chess {
  players: Array<string>;
}

export const QUERY_KEY = "https://api.chess.com/pub/titled/CM";

export const fetchChess = async () => {
  const response = await fetch(`${QUERY_KEY}`);
  const data = await response.json();
  return data as Chess;
};
