var fireRate = 400;
var nextFire = 0;
var bullets,bullet;
function bulletsGen(){

    bullets = game.add.group();
    bullets.enableBody = true;

    bullets.createMultiple(50, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
    game.physics.enable(bullets, Phaser.Physics.ARCADE);
    
    
}

function fire() {

    if (game.time.now > nextFire && bullets.countDead() > 0)
    {

        nextFire = game.time.now + fireRate;
        bullet = bullets.getFirstDead();
        fx.play('shot');
        bullet.reset(mage.x, mage.y - 8);
        game.physics.arcade.moveToPointer(bullet, 370);
    }

}