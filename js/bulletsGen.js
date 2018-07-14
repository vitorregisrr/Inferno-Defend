var fireRate = 400;
var nextFire = 0;
var bulletsKnife, bulletKnife;
function bulletsGen() {

    bulletsKnife = game.add.group();
    bulletsKnife.enableBody = true;

    bulletsKnife.createMultiple(50, 'bullet');
    bulletsKnife.setAll('checkWorldBounds', true);
    bulletsKnife.setAll('outOfBoundsKill', true);
    game.physics.enable(bulletsKnife, Phaser.Physics.ARCADE);


}

function fire() {

    if (game.time.now > nextFire && bulletsKnife.countDead() > 0) {
        nextFire = game.time.now + fireRate;
        bulletKnife = bulletsKnife.getFirstDead();
        sounds.knife.play();
        bulletKnife.reset(mage.x + 5, mage.y + 12);
        bulletKnife.rotation = Math.atan2(game.input.mousePointer.y - bulletKnife.y, game.input.mousePointer.x - bulletKnife.x);
        game.physics.arcade.moveToPointer(bulletKnife, 400);
    }

}


function bulletsCollide(){

      /*chama a funcao shot ao clicar */
    if (game.input.activePointer.isDown) {
        fire();
    }

    //morte do monstro1 ao encostar na bullet
    monstros1.forEachAlive(function (monstro1) {
        game.physics.arcade.overlap(bulletsKnife, monstro1, function () {
            monstro1.kill();
            score++;
            fx.play('squit');
            bulletKnife.kill();
        }, null, this);
    });

    monstros1.forEachAlive(function (monstro1) {
        game.physics.arcade.collide(mage, monstro1, function () {
            monstro1.kill();
            mageShoted(1);
        }, null, this);
    });

    game.physics.arcade.collide(mage, bulletsBossGroup, function () {
        var bulletBossTouched = bulletBoss.animations.add('touched',[16,17,18,19,20,21,22,23,24,25,26,27,28,29]);
        bulletBoss.animations.stop();
        bulletBoss.animations.play('touched', 40, true);
        bulletBoss.kill();


        mageShoted(1);
    }, null, this);

      //colisao entre bullets e plataformas
       bulletsKnife.forEachAlive(function (bulletKnife) {
            game.physics.arcade.collide(bulletKnife, boss, function () {
                bulletKnife.kill();
                bossShoted(1);
            }, null, this);
        });
    

}

var bulletBossTouchedAnim;

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
   