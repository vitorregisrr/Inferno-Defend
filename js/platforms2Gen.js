 /* Plataformas */

 function platforms2Gen() {

    chao1.x = 30; 
    chao1.y = 490;
    chao2.x = 200;
    chao2.y = 390;
    chao3.x = 390; 
    chao3.y = 0 - chao3.width;
    chao4.x = 540; 
    chao4.y = 0 - chao3.width;

    chao5.x = 230; 
    chao5.y = 200;
    chao6.x = 30; 
    chao6.y = 270;
    comedownPlatforms2();

     //move as plataformas para cima e para baixo, usando um contador que reveza entre up e down
     var loopPlatforms = game.time.events.loop(Phaser.Timer.SECOND * 1, movePlatforms2, this);
     var cont = 'up';

     function movePlatforms2() {
         if (cont == 'up') {
             chao2.body.velocity.y = -20;
             chao3.body.velocity.y = -20;
             chao4.body.velocity.y = -20;
             chao5.body.velocity.y = -20;
             chao6.body.velocity.y = -20;

             cont = 'down';
         } else if (cont == 'down') {
             chao2.body.velocity.y = 20;
             chao3.body.velocity.y = 20;
             chao4.body.velocity.y = 20;
             chao5.body.velocity.y = 20;
             chao6.body.velocity.y = 20;
             cont = 'up';
         }
     }


 }

 function comedownPlatforms2(){
    game.physics.arcade.moveToXY(chao3, chao3.x, 1100, 100 ,3000)
    game.physics.arcade.moveToXY(chao4, chao4.x, 800, 100 ,3000) 

    game.time.events.add(3000, function () {
        chao3.body.velocity.y = 0;
        chao4.body.velocity.y = 0;
     }, this);
}
 /* //PLATAFORMAS */