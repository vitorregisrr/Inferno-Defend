var lava,lavaGroup, portal;
var plataformas, chao1, chao2, chao3, chao4, chao5, chao6, chao7, chao8, chao9, chao10;
var animLava;

function platformsCreate(){
    plataformas = game.add.group();
    plataformas.enableBody = true;

    chao1 = plataformas.create(0, -323, 'chao1');
    chao2 = plataformas.create(0 - chao1.width,0 - chao1.height, 'chao1');
    chao3 = plataformas.create(0 - chao1.width,0 - chao1.height, 'chao2');
    chao4 = plataformas.create(0 - chao1.width,0 - chao1.height, 'chao2');
    chao5 = plataformas.create(0 - chao4.width,0 - chao4.height, 'chao1');
    chao6 = plataformas.create(0 - chao5.width,0 - chao5.height, 'chao2');
    chao7 = plataformas.create(0 - chao5.width,0 - chao5.height, 'chao2');
    chao8 = plataformas.create(0 - chao5.width,0 - chao5.height, 'chao1');
    chao9 = plataformas.create(0 - chao5.width,0 - chao5.height, 'chao1');
    chao10 = plataformas.create(0 - chao5.width,0 - chao5.height, 'chao2');

    
    chao1.body.setSize(120, 10, 8, 35);
    chao2.body.setSize(120, 10, 8, 35);
    chao3.body.setSize(120, 10, 8, 35);
    chao4.body.setSize(120, 10, 8, 35);
    chao5.body.setSize(120, 10, 8, 35);
    chao6.body.setSize(120, 10, 8, 35);
    chao7.body.setSize(120, 10, 8, 35);
    chao8.body.setSize(120, 10, 8, 35);
    chao9.body.setSize(120, 10, 8, 35);
    chao10.body.setSize(120, 10, 8, 35);

    chao1.body.immovable = true;
    chao2.body.immovable = true;
    chao3.body.immovable = true;
    chao4.body.immovable = true;
    chao5.body.immovable = true;
    chao6.body.immovable = true;
    chao7.body.immovable = true;
    chao8.body.immovable = true;
    chao9.body.immovable = true;
    chao10.body.immovable = true;


}

function portalGen(x,y){
    portal = game.add.sprite(x, y, 'portal');
    /*portal FISICA */
    game.physics.arcade.enable(portal);
    portal.body.collideWorldBounds = true; //habilita a colisão
    portal.body.setSize(30,50, 13, 30);
    
     //portal animacao
     animPortal = portal.animations.add('circle');
     animPortal.play(9, true);

 }

 function lavaCreate(){
       
    lavaGroup= game.add.group();
    lavaGroup.enableBody = true;

    lava = lavaGroup.create(0, 530, 'lava');
     animLava = lava.animations.add('animLava');
     animLava.play(10, true);


    lava = lavaGroup.create(296, 530, 'lava');
     animLava = lava.animations.add('animLava');
     animLava.play(10, true);

    lava = lavaGroup.create(592, 530, 'lava');
     animLava = lava.animations.add('animLava');
     animLava.play(10, true);

 }