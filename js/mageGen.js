
var mageHp,magHpBar;
function personagemGen() {
    mage = game.add.sprite(0, 0, 'mage');
    /*MAGE FISICA */
    game.physics.arcade.enable(mage);
    mage.body.bounce.y = 0.2; //salto
    mage.body.gravity.y = 300; //gravidade
    mage.body.collideWorldBounds = true; //habilita a colisão
    mage.body.setSize(23,44,4,4)

    mage.animations.add('left', [13, 14, 15, 16, 17, 18], 14, true);
    mage.animations.add('right', [19, 20, 21, 22, 23, 24], 15, true);

}

function mageHpBarChange(){
    if(mageHp == 1){
        mageHpBar.animations.frame = 4;
    }

    if(mageHp == 2){
        mageHpBar.animations.frame = 3;
    }

    if(mageHp == 3){
        mageHpBar.animations.frame = 2;
    }

    if(mageHp == 4){
        mageHpBar.animations.frame = 1;
    }

    if(mageHp == 5){
        mageHpBar.animations.frame = 0;
    }
}

function mageShoted(dano){
    mageHp -= dano;
    if(mageHp == 0){
        gameOver();
    }
    sounds.atacked.play();
}

function setMage1(){
    mage.x = 30;
    mage.y = 290;
    
}

function setMage2(){
    mage.x = 80;
    mage.y = 430;
}

function setMage3(){
    mage.x = 630;
    mage.y = 410;
    
}

function setMage4(){
    mage.x = 90;
    mage.y = 400;
}