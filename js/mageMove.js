var mage;
var e = 1;
function addControls() {
    /*controles WASD */
    upButton = game.input.keyboard.addKey(Phaser.Keyboard.W);
    downButton = game.input.keyboard.addKey(Phaser.Keyboard.S);
    leftButton = game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightButton = game.input.keyboard.addKey(Phaser.Keyboard.D);
}

function mageMove() {
    game.physics.arcade.overlap(mage, lavaGroup,  gameOver, null,  this);

    /* Movimentacao mage */
    mage.body.velocity.x = 0;
    if(mage.hp > 0 ){
    if (cursors.left.isDown || leftButton.isDown) {
        mage.scale.setTo(-1, 1);
        mage.body.velocity.x = -150;
        if (game.physics.arcade.collide(mage, plataformas)) {
            mage.animations.play('walk', 10, false);
        }

    } else if (cursors.right.isDown || rightButton.isDown) {
        mage.scale.setTo(1, 1);
        mage.body.velocity.x = 150;
        if (game.physics.arcade.collide(mage, plataformas)) {
            mage.animations.play('walk', 10, false);
        }

    } else {

    }

    if ((cursors.up.isDown || upButton.isDown) && game.physics.arcade.collide(mage, plataformas)) {

        mage.body.velocity.y = -280;
        mage.animations.play('up', 10, false)

    } else if (cursors.down.isDown || downButton.isDown) {

        mage.body.velocity.y = 450;
    }

    if (!game.physics.arcade.collide(mage, plataformas)) {
        setTimeout(400, function () {
            mage.frame = 18;
        })

    } else {
    }
    
    if(game.physics.arcade.collide(mage, plataformas)){
        mage.body.gravity.y = 1500; //gravidade
    }else{
        mage.body.gravity.y = 300; //gravidade
    }
    }
}