 /* Plataformas */
 function platforms4Gen() {
      
     chao1.x = 230;
     chao1.y = 420;
     chao2.x = 30; 
     chao2.y = 440;
     chao11.y = 320;
     chao11.x = 430;
     chao5.y = 0 - chao1.width;
     chao6.x = 450;
     chao6.y =  0 - chao1.width;
     chao7.x = 450;
     chao7.y =  0 - chao1.width
     
      
     var loopPlatforms = game.time.events.loop(Phaser.Timer.SECOND * 1, movePlatforms3, this);
     var cont = 'up';
     function movePlatforms3() {
        if (cont == 'up') {
            chao1.body.velocity.y = -20;
            chao2.body.velocity.y = -25;
            chao3.body.velocity.y = -18;
            chao4.body.velocity.y = -19;
            chao11.body.velocity.y = -30;
            cont = 'down';
        } else if (cont == 'down') {
            chao1.body.velocity.y = 20;
            chao2.body.velocity.y = 25;
            chao3.body.velocity.y = 18;
            chao4.body.velocity.y = 19;
            chao11.body.velocity.y = 30;
            cont = 'up';
        }
    }


}

function comedownPlatforms4(){
    game.physics.arcade.moveToXY(chao5, chao5.x, 200, 100 ,3000); 
    game.physics.arcade.moveToXY(chao6, chao6.x, 100, 200 ,3000);
    game.physics.arcade.moveToXY(chao7, chao7.x, 280, 50 ,3000); 

    game.time.events.add(3000, function () {
        chao5.body.velocity.y = 0;
        chao6.body.velocity.y = 0;
        chao7.body.velocity.y = 0;
     }, this);
}
 /* //PLATAFORMAS */