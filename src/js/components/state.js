export const STATE = {
  gameId: null,
  gameMode: null,
  board: { player1: [], player2: [] },
  currentPlayer: 'X',
  currentPlayers: { x: 'гравець 1', 0: 'Гравець 2' },
  winner: null,
  gameOver: true,
  user: {
    uid: '',
    bot: {
      level: null,
      players: [
        {
          playerId: '',
          playerName: '',
          statistics: {
            easy: { wins: 0, draws: 0, losses: 0, total: 0 },
            medium: { wins: 0, draws: 0, losses: 0, total: 0 },
            hard: { wins: 0, draws: 0, losses: 0, total: 0 },
          },
        },
      ],
    },
    local: [
      {
        playerId: '',
        playerName: '',
        statistics: { wins: 0, draws: 0, losses: 0, total: 0 },
      },
    ],
    online: { statistics: { wins: 0, losses: 0, draws: 0, total: 0 } },
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
