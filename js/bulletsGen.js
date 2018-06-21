var fireRate = 300;
var nextFire = 0;

function bulletsGen(){

    bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(50, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
    game.physics.enable(bullets, Phaser.Physics.ARCADE);
    
    
}

function fire() {

    if (game.time.now > nextFire && bullets.countDead() > 0)
    {
    
        nextFire = game.time.now + fireRate;
        var bullet = bullets.getFirstDead();

        bullet.reset(mage.x - 8, mage.y - 8);

        game.physics.arcade.moveToPointer(bullet, 370);
    }

}