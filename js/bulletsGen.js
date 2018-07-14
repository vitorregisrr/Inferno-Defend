var fireRate = 400;
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
        sounds.knife.play();
        bullet.reset(mage.x + 5, mage.y + 12);
        bullet.rotation = Math.atan2(game.input.mousePointer.y - bullet.y, game.input.mousePointer.x - bullet.x);
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

    monstros1.forEachAlive(function (monstro1) {
        game.physics.arcade.collide(mage, monstro1, function () {
            monstro1.kill();
            mageShoted(1);
        }, null, this);
    });

    monstros1.forEachAlive(function (monstro1) {
        game.physics.arcade.collide(mage, bulletsBossGroup, function () {
            bulletBoss.kill();
            mageShoted(1);
        }, null, this);
    });

      //colisao entre bullets e plataformas
       bullets.forEachAlive(function (bullet) {
            game.physics.arcade.collide(bullet, boss, function () {
                bullet.kill();
                bossShoted();
            }, null, this);
        });
    

}

function bossAtack(){

    bulletsBossGroup = game.add.group();
    bulletsBossGroup.enableBody = true;

    bulletsBossGroup.createMultiple(50, 'bossBullet');
    bulletsBossGroup.setAll('checkWorldBounds', true);
    bulletsBossGroup.setAll('outOfBoundsKill', true);
    game.physics.enable(bulletsBossGroup, Phaser.Physics.ARCADE);


    loopBossAttack = game.time.events.loop(Phaser.Timer.SECOND * (game.rnd.integerInRange(2, 3)),bossFire, this);
    
    function bossFire() {
            bulletBoss = bulletsBossGroup.getFirstDead();
            bulletBoss.body.setSize(40,40,10, 10);
            bulletBoss.reset(boss.x + 230,boss.y + 100,'bossBullet');
            game.physics.arcade.moveToObject(bulletBoss, mage, (game.rnd.integerInRange(150, 250)));
            bulletAnim = bulletBoss.animations.add('fireEffect',[0,1,2,3,4,5,6,7,8,8,9,10]);
            bulletBoss.animations.play('fireEffect', 15, true);
            sounds.bossAtack.play();
    }
}
   