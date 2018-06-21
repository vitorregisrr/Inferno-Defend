 /* Plataformas */
 function platformsGen(){
    plataformas = game.add.group();
    plataformas.enableBody = true;

    chao1 = plataformas.create(230,game.world.height - 123, 'chao1');
    chao2 = plataformas.create(30,game.world.height - 140, 'chao2');
    chao3 = plataformas.create(410,game.world.height - 160, 'chao2');
    chao4 = plataformas.create(590,game.world.height - 180, 'chao3');
    chao1.body.immovable = true;
    chao2.body.immovable = true;
    chao3.body.immovable = true;
    chao4.body.immovable = true;
}
 /* //PLATAFORMAS */