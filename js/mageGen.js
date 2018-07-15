var mageHp, magHpBar, marceline;

function personagemGen() {
    mage = game.add.sprite(0, 0, 'mage');
    mage.anchor.setTo(0.35);

    /*MAGE FISICA */
    game.physics.arcade.enable(mage);
    mage.body.gravity.y = 300; //gravidade
    if (game.physics.arcade.collide(mage, plataformas)) {
        mage.body.gravity.y = 900; //gravidade
    } else {
        mage.body.gravity.y = 300; //gravidade
    }

    mage.body.collideWorldBounds = true; //habilita a colisão
    mage.body.setSize(50, 70, 0, 10)

    mage.animations.add('up', [15, 16, 17, 18], 13);
    mage.animations.add('atack', [20, 21,22,23,24], 13);
    mage.animations.add('hited', [25, 26, 27, 28, 29], 13);
    mage.animations.add('die', [30, 31, 32, 33, 34], 13);
    mage.animations.add('stop', [0, 1, 2, 3, 4], 8);
    mage.animations.add('walk', [5, 6, 7, 8, 9], 13);
    mage.animations.add('down', [10, 11, 12, 13, 14], 13);

}

function mageHpBarChange() {
    if (mageHp == 1) {
        mageHpBar.animations.frame = 4;
    }

    if (mageHp == 2) {
        mageHpBar.animations.frame = 3;
    }

    if (mageHp == 3) {
        mageHpBar.animations.frame = 2;
    }

    if (mageHp == 4) {
        mageHpBar.animations.frame = 1;
    }

    if (mageHp == 5) {
        mageHpBar.animations.frame = 0;
    }
}

function mageShoted(dano) {
    mageHp -= dano;
    if (mageHp == 0) {
        gameOver();
    }
    sounds.atacked.play();
}

function setMage1() {
    mage.x = 30;
    mage.y = 240;

}

function setMage2() {
    mage.x = 80;
    mage.y = 320;
}

function setMage3() {
    mage.x = 630;
    mage.y = 320;

}

function setMage4() {
    mage.x = 90;
    mage.y = 320;
}