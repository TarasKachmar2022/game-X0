export const STATE = {
  gameId: null,
  gameMode: null,
  board: { player1: [], player2: [] },
  currentPlayerName: '',
  currentSymbol: '',
  winner: null,
  gameOver: true,
  user: {
    uid: '',
    bot: {
      level: null,
      statistics: {
        easy: { wins: 0, draws: 0, losses: 0, total: 0 },
        medium: { wins: 0, draws: 0, losses: 0, total: 0 },
        hard: { wins: 0, draws: 0, losses: 0, total: 0 },
      },
    },
    local: {
      players: [
        {
          playerId: '',
          playerName: '',
          statistics: { wins: 0, draws: 0, losses: 0, total: 0 },
        },
      ],
    },
    online: { statistics: { wins: 0, draws: 0, losses: 0, total: 0 } },
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
