function personagemGen() {
    mage = game.add.sprite(650, 400, 'mage');


    /*MAGE FISICA */
    game.physics.arcade.enable(mage);
    mage.body.bounce.y = 0.2; //salto
    mage.body.gravity.y = 300; //gravidade
    mage.body.collideWorldBounds = true; //habilita a colisão

    mage.animations.add('left', [0, 1, 2, 3], 10, true);
    mage.animations.add('right', [5, 6, 7, 8], 10, true);

}

function mageDead(){
    
    //mata o mago se encostar no monstro1
    game.physics.arcade.overlap(mage, monstros1, gameOver, null, this);

    //mata o mago se cair
    if (mage.body.blocked.down) {
        gameOver();
    }
}