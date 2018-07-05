var mage;

function mageMove() {
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
        mage.frame = 4;
    }

    if ((cursors.up.isDown || upButton.isDown) && game.physics.arcade.collide(mage, plataformas)) {

        mage.body.velocity.y = -350;

    } else if (cursors.down.isDown || downButton.isDown) {

        mage.body.velocity.y = 450;
    }
}