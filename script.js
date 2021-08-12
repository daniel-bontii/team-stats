const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11,
      }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27,
      }
    ],
    get players(){
      return this._players;
    },
    get games() {
      return this._games;
    },
  
    set players(addedPlayers){
      this._players = addedPlayers;
    },
    set games(addedGames) {
      this._games = addedGames;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age,
      };
      this.players.push(player);
    },
    addGame(opponentName, teamPoints, opponentPoints) {
      let game = {
        opponentName: opponentName,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76); 
  
  console.log(team.players)
  
  team.addGame('Barca', 15, 25);
  team.addGame('Madrid', 32, 10);
  team.addGame('Chelsea', 45, 45); 
  
  console.log(team.games)
  
  
  
  
  
  