
var mageHp;
function personagemGen() {
    mage = game.add.sprite(0, 0, 'mage');
    mageHp = 5;
    /*MAGE FISICA */
    game.physics.arcade.enable(mage);
    mage.body.bounce.y = 0.2; //salto
    mage.body.gravity.y = 300; //gravidade
    mage.body.collideWorldBounds = true; //habilita a colisão
    mage.body.setSize(23,44,4,4)

    mage.animations.add('left', [13, 14, 15, 16, 17, 18], 14, true);
    mage.animations.add('right', [19, 20, 21, 22, 23, 24], 15, true);

}

function mageDead(){
    //mata o mago se encostar na lava
    game.physics.arcade.overlap(mage, lavaGroup, gameOver, null, this);

    //mata o mago se cair
    if (mage.body.blocked.down) {
        gameOver();
    }
}

function mageShoted(dano){
    mageHp -= dano;
    if(mageHp == 0){
        gameOver();
    }
    sounds.atacked.play();
}

function setMage1(){
    mage.x = 30;
    mage.y = 290;
    
}

function setMage2(){
    mage.x = 80;
    mage.y = 430;
}

function setMage3(){
    mage.x = 630;
    mage.y = 410;
    
}

function setMage4(){
    mage.x = 90;
    mage.y = 400;
}