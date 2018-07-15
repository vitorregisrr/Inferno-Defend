function setDificulty1(){
        monstro1Speed = 150;
        monstro1Interval = 1000;
}

function setDificulty2(){
        monstro1Speed = 140;
        monstro1Interval = 3000;
        sounds.enterPortal.play();
        game.state.start('gameState2');
}

function setDificulty3(){
        monstro1Speed = 160;
        monstro1Interval = 2300;
        sounds.enterPortal.play();
        game.state.start('gameState3');
}

function setDificulty4(){
        monstro1Speed = 160;
        monstro1Interval = 2700;
        sounds.enterPortal.play();
        game.state.start('gameState4');
}

function portalGen(x,y){
        portal = game.add.sprite(x, y, 'portal');
        /*portal FISICA */
        game.physics.arcade.enable(portal);
        portal.body.collideWorldBounds = true; //habilita a colisão
        portal.body.setSize(30,50, 13, 30);
        
         //portal animacao
         animPortal = portal.animations.add('circle');
         animPortal.play(9, true);
    
     }