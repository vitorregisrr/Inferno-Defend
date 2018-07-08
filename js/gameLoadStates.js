var game = new Phaser.Game(800, 600, Phaser.AUTO);

game.state.add('gameState1', gameState1);
game.state.add('gameState2', gameState2);
game.state.add('gameState3', gameState3);
game.state.add('gameState4', gameState4);

game.state.add('startState', startState);
game.state.add('gameoverState', gameoverState);


//define estado inicial

game.state.start('startState');