
 function personagemGen(){
    mage = game.add.sprite(650,500, 'mage');

            
        /*MAGE FISICA */
        game.physics.arcade.enable(mage);
        mage.body.bounce.y = 0.2; //salto
        mage.body.gravity.y = 300; //gravidade
        mage.body.collideWorldBounds = true; //habilita a colisão

       /* ANIMACAO DOS PERSONAGENS */
      mage.animations.add('left', [0, 1, 2, 3, 4, 5, 6], 0, true);
      mage.animations.add('right', [7, 8, 9,], 34, true);
       
}
