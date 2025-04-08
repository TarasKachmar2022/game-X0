const scoreEl = document.querySelector('.score');

export function victory(playerName, player, STATE) {
  console.log(`${playerName}`);

  if (player === 'firstPlayer') {
    // STATE.user.local.scorePlayerFirst += 1;
    STATE.user.local.players.find(player => {
      if (player.playerName === playerName) {
        player.statistics.wins += 1;
        player.statistics.total += 1;
      }
    });
    console.log(STATE);
  } else if (player === 'secondPlayer') {
    // STATE.user.local.scorePlayerSecond += 1;
  }
  // scoreEl.innerHTML = '';
}

export function draw(STATE) {
  console.log('draw');

  // STATE.user.local.scoreDraw += 1;
  // scoreEl.innerHTML = '';
}

export function loss() {}
