var game = new Phaser.Game(800, 600, Phaser.AUTO);

game.state.add('gameState', gameState);
game.state.add('startState', startState);
game.state.add('gameoverState', gameoverState);


//define estado inicial

game.state.start('startState');