var mage;

function addControls(){
    /*controles WASD */
    upButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
    downButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
    leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
}

function mageMove() {

    game.physics.arcade.overlap(mage, lavaGroup, gameOver, null, this);

    /* Movimentacao mage */
    mage.body.velocity.x = 0;
    if (cursors.left.isDown || leftButton.isDown) {

        mage.body.velocity.x = -150;
        mage.animations.play('left');

    } else if (cursors.right.isDown || rightButton.isDown) {

        mage.body.velocity.x = 150;
        mage.animations.play('right');

    } else {

        mage.animations.stop();
        mage.frame = 0;
    }

    if ((cursors.up.isDown || upButton.isDown) && game.physics.arcade.collide(mage, plataformas)) {

        mage.body.velocity.y = -230;

    } else if (cursors.down.isDown || downButton.isDown) {

        mage.body.velocity.y = 450;
    }
}