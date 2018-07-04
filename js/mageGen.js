function personagemGen() {
    mage = game.add.sprite(650, 100, 'mage');


    /*MAGE FISICA */
    game.physics.arcade.enable(mage);
    mage.body.bounce.y = 0.2; //salto
    mage.body.gravity.y = 300; //gravidade
    mage.body.collideWorldBounds = true; //habilita a colisão

    mage.animations.add('left', [0, 1, 2, 3], 10, true);
    mage.animations.add('right', [5, 6, 7, 8], 10, true);

}