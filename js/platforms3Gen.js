 /* Plataformas */
 var chao1, chao2, chao3, chao4, portal3;

 function platforms3Gen() {
     plataformas = game.add.group();
     plataformas.enableBody = true;

     chao1 = plataformas.create(230, game.world.height - 123, 'chao1');
     chao2 = plataformas.create(30, game.world.height - 120, 'chao2');
     chao3 = plataformas.create(410, game.world.height - 140, 'chao2');
     chao4 = plataformas.create(630, game.world.height - 130, 'chao1');
     chao1.body.immovable = true;
     chao2.body.immovable = true;
     chao3.body.immovable = true;
     chao4.body.immovable = true;

     chao1.body.setSize(90, 30, 30, 35);
     chao2.body.setSize(90, 30, 30, 35);
     chao3.body.setSize(90, 30, 30, 35);
     chao4.body.setSize(90, 30, 30, 35);

     portal3 = game.add.sprite(60, 300, 'portal');
     game.physics.arcade.enable(portal3);
     portal3.body.immovable = true;
     portal3.body.setSize(30, 30, 30, 35);
     portal3.body.gravity.y = 300; //gravidade
     portal3.body.collideWorldBounds = true; //habilita a colisão

 }
 /* //PLATAFORMAS */