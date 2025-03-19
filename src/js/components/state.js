export const STATE = {
  gameId: null,
  gameMode: null,
  board: [],
  currentPlayer: 'X',
  currentPlayers: { x: 'гравець 1', 0: 'Гравець 2' },
  winner: null,
  gameOver: false,
  user: {
    uid: '',
    statistics: {
      bot: { wins: 0, losses: 0, draws: 0, total: 0 },
      local: { wins: 0, losses: 0, draws: 0, total: 0 },
      online: { wins: 0, losses: 0, draws: 0, total: 0 },
    },
  },
  isMyTurn: false,
  status: ('playing', 'waiting'),
};

// Використовується

// const STATE = {
// user: {
// uid: '',
// }
// }
