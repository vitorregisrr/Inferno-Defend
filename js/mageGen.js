function personagemGen() {
    mage = game.add.sprite(0, 0, 'mage');
    mage.anchor.setTo(0.35);
    mage.maxHp = 10;
    mage.hp = mage.maxHp;
    mage.HpBarbg = game.add.sprite(30, 20, 'hpBarLONGbg');
    mage.HpBar = game.add.sprite(32, 65, 'hpBarLONG');
    mage.HpBar.anchor.setTo(0,1);
    mage.HpBar.scale.setTo(1, 1);

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

function mageShoted(dano) {
    mage.hp -= dano;
    if(mage.hp > 1 ){
        mage.animations.play('hited', 10, false);
        this.game.add.tween(mage.HpBar.scale).to({x: mage.hp/mage.maxHp , y: 1}, 600, Phaser.Easing.Linear.None, true);
        mage.HpBar.x += 1;
    }
    if (mage.hp < 0 ) {
        mage.animations.play('die', 5, false)
        game.time.events.add(1500,function(){gameOver()});
        mage.HpBar.kill();
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