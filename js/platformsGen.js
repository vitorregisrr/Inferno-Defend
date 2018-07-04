 /* Plataformas */
 var chao1, chao2, chao3, chao4;

 function platformsGen() {
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


     //move as plataformas para cima e para baixo, usando um contador que reveza entre up e down
     var loopPlatforms = game.time.events.loop(Phaser.Timer.SECOND * 2, movePlatforms, this);
     var cont = 'up';

     function movePlatforms() {
         if (cont == 'up') {
             chao1.body.velocity.y = -(game.rnd.integerInRange(50, 80));
             chao2.body.velocity.y = -(game.rnd.integerInRange(50, 80));
             chao3.body.velocity.y = -(game.rnd.integerInRange(50, 80));
             chao4.body.velocity.y = -(game.rnd.integerInRange(50, 80));
             cont = 'down';
         } else if (cont == 'down') {
             chao1.body.velocity.y = game.rnd.integerInRange(50, 80);
             chao2.body.velocity.y = game.rnd.integerInRange(50, 80);
             chao3.body.velocity.y = game.rnd.integerInRange(50, 80);
             chao4.body.velocity.y = game.rnd.integerInRange(50, 80);
             cont = 'up';
         }
     }

 }
 /* //PLATAFORMAS */