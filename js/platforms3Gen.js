 /* Plataformas */
 function platforms3Gen() {
    chao1.x = 70;
    chao1.y = 230;
    chao2.x = 230;
    chao2.y = 320;
    chao3.x = 410;
    chao3.y = 390;
    chao4.x = 630;
    chao4.y = 430;
    chao5.x = 230;
    chao5.y = 130;
    chao6.x = 430;
    chao6.y = 170;
    /*portal FISICA */
     //move as plataformas para cima e para baixo, usando um contador que reveza entre up e down
     var loopPlatforms = game.time.events.loop(Phaser.Timer.SECOND * 1, movePlatforms3, this);
     var cont = 'up';

     function movePlatforms3() {
         if (cont == 'up') {
             chao1.body.velocity.y = -20;
             chao2.body.velocity.y = -20;
             chao3.body.velocity.y = -20;
             chao4.body.velocity.y = -20;
             chao5.body.velocity.y = -20;
             chao6.body.velocity.y = -20;
             cont = 'down';
         } else if (cont == 'down') {
             chao1.body.velocity.y = 20;
             chao2.body.velocity.y = 20;
             chao3.body.velocity.y = 20;
             chao4.body.velocity.y = 20;
             chao5.body.velocity.y = 20;
             chao6.body.velocity.y = 20;
             cont = 'up';
         }
     }

 }
 /* //PLATAFORMAS */