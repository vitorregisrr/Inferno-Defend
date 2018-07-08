function dificultyIncrement(){
        
        game.physics.arcade.overlap(portal1, mage, setDificulty2, null, this);

        game.physics.arcade.overlap(portal2, mage, setDificulty3, null, this);

        game.physics.arcade.overlap(portal3, mage, setDificulty4, null, this);

        game.physics.arcade.overlap(portal4, mage, gameOver , null, this);

}

function setDificulty1(){
        monstro1Speed = 120;
        monstro1Interval = 3000;
        console.log('dificuldade 1')
}

function setDificulty2(){
        monstro1Speed = 150;
        monstro1Interval = 2500;
        console.log('dificuldade 2')
        game.state.start('gameState2');

}

function setDificulty3(){
        monstro1Speed = 170;
        monstro1Interval = 2000;
        console.log('dificuldade 3')
        game.state.start('gameState3');
}

function setDificulty4(){
        monstro1Speed = 190;
        monstro1Interval = 1800;
        console.log('dificuldade 4')
        game.state.start('gameState4');

}