 /* Plataformas */
 function platformsGen(){
    plataformas = game.add.group();
    plataformas.enableBody = true;

    chao = plataformas.create(230,game.world.height - 123, 'chao1');
    chao = plataformas.create(30,game.world.height - 140, 'chao2');
    chao = plataformas.create(410,game.world.height - 160, 'chao2');
    chao = plataformas.create(590,game.world.height - 180, 'chao3');
    chao.body.immovable = true;
}
 /* //PLATAFORMAS */