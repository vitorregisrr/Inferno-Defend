 /* Plataformas */


 function platforms1Gen() {

    chao1.x = 260;
    chao1.y = 323;
    chao2.x = 30;
    chao2.y = 320;
    chao3.x = 450;
    chao3.y = 340;

     //move as plataformas para cima e para baixo, usando um contador que reveza entre up e down
     var loopPlatforms = game.time.events.loop(Phaser.Timer.SECOND * 1, movePlatforms1, this);
     var cont = 'up';

     function movePlatforms1() {
         if (cont == 'up') {
             chao1.body.velocity.y = -(game.rnd.integerInRange(50, 100));
             chao2.body.velocity.y = -(game.rnd.integerInRange(50, 100));
             chao3.body.velocity.y = -(game.rnd.integerInRange(50, 100));
             cont = 'down';
         } else if (cont == 'down') {
             chao1.body.velocity.y = game.rnd.integerInRange(50, 100);
             chao2.body.velocity.y = game.rnd.integerInRange(50, 100);
             chao3.body.velocity.y = game.rnd.integerInRange(50, 100);
             cont = 'up';
         }
     }

 }
 /* //PLATAFORMAS */