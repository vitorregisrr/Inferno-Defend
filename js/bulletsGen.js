var fireRate = 800;
var nextFire = 0;
var bullets, bullet;

function bulletsGen() {

    bullets = game.add.group();
    bullets.enableBody = true;

    bullets.createMultiple(50, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
    game.physics.enable(bullets, Phaser.Physics.ARCADE);


}

function fire() {

    if (game.time.now > nextFire && bullets.countDead() > 0) {

        nextFire = game.time.now + fireRate;
        bullet = bullets.getFirstDead();
        fx.play('shot');
        bullet.reset(mage.x, mage.y - 8);
        game.physics.arcade.moveToPointer(bullet, 400);
    }

}


function bulletsCollide(){

      /*chama a funcao shot ao clicar */
    if (game.input.activePointer.isDown) {
        fire();
    }

    //morte do monstro1 ao encostar na bullet
    monstros1.forEachAlive(function (monstro1) {
        game.physics.arcade.overlap(bullets, monstro1, function () {
            monstro1.kill();
            score++;
            fx.play('squit');
            bullet.kill();
        }, null, this);
    });

      //colisao entre bullets e plataformas
      game.physics.arcade.overlap(bullets, plataformas, function () {
        bullet.kill()
    }, null, this);

}