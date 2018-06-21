
 function personagemGen(){
    mage = game.add.sprite(650,500, 'mage');
            
        /*MAGE FISICA */
        game.physics.arcade.enable(mage);
        mage.body.bounce.y = 0.2; //salto
        mage.body.gravity.y = 300; //gravidade
        mage.body.collideWorldBounds = true; //habilita a colisão
}
