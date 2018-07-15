var fireRate = 600;
var nextFire = 0;
var bulletsKnife, bulletKnife;
var monstros1Colision;

function bulletsGen() {

    bulletsKnife = game.add.group();
    bulletsKnife.enableBody = true;

    bulletsKnife.createMultiple(50, 'blueBullet');
    bulletsKnife.setAll('checkWorldBounds', true);
    bulletsKnife.setAll('outOfBoundsKill', true);
    game.physics.enable(bulletsKnife, Phaser.Physics.ARCADE);


}

function fire() {
    if(mageHp > 0){
        if (game.time.now > nextFire && bulletsKnife.countDead() > 0) {
            mage.animations.play('atack', 10);
            nextFire = game.time.now + fireRate;
            bulletKnife = bulletsKnife.getFirstDead();
            var animBullet = bulletKnife.animations.add('animLava', [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30]);
            animBullet.play(13, true);
            sounds.magicAttack.play();
            bulletKnife.reset(mage.x + 5, mage.y + 12);
            bulletKnife.rotation = Math.atan2(game.input.mousePointer.y - bulletKnife.y, game.input.mousePointer.x - bulletKnife.x);
            game.physics.arcade.moveToPointer(bulletKnife, 400);
        }
    }
}


function bulletsCollide() {

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

    //colisao entre as gargolas e o mago
    game.physics.arcade.collide(gargolas, mage, function () {
        gargolas.colision = true;
        console.log(gargolas.colision)
    }, null, this);

    //colisao entre mago e as bolas de fogo do boss
    game.physics.arcade.collide(mage, bulletsBossGroup, function () {
        var bulletBossTouched = bulletBoss.animations.add('touched', [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]);
        bulletBoss.animations.stop();
        bulletBoss.animations.play('touched', 40, true);
        bulletBoss.kill();
        mageShoted(1);
    }, null, this);

    //colisao entre bullets e bosss
    bulletsKnife.forEachAlive(function (bulletKnife) {
        game.physics.arcade.collide(bulletKnife, boss, function () {
            bulletKnife.kill();
            bossHited(1);
        }, null, this);
    });


    //colisao entre bullets e bosss
    bulletsKnife.forEachAlive(function (bulletKnife) {
        game.physics.arcade.collide(bulletKnife, gargola1, function () {
            bulletKnife.kill();
            gargolasHited(1, 1)
        }, null, this);
    });

    bulletsKnife.forEachAlive(function (bulletKnife) {
        game.physics.arcade.collide(bulletKnife, gargola2, function () {
            bulletKnife.kill();
            gargolasHited(2, 1)
        }, null, this);
    });

    bulletsKnife.forEachAlive(function (bulletKnife) {
        game.physics.arcade.collide(bulletKnife, gargola3, function () {
            bulletKnife.kill();
            gargolasHited(3, 1)
        }, null, this);
    });




}

//ataque do dragão
function bossAtack() {

    bulletsBossGroup = game.add.group();
    bulletsBossGroup.enableBody = true;

    bulletsBossGroup.createMultiple(50, 'bossBullet');
    bulletsBossGroup.setAll('checkWorldBounds', true);
    bulletsBossGroup.setAll('outOfBoundsKill', true);
    game.physics.enable(bulletsBossGroup, Phaser.Physics.ARCADE);


    loopBossAttack = game.time.events.loop(Phaser.Timer.SECOND * (game.rnd.integerInRange(2, 3)), bossFire, this);

    function bossFire() {
        bulletBoss = bulletsBossGroup.getFirstDead();
        bulletBoss.body.setSize(40, 40, 10, 10);
        bulletBoss.reset(boss.x + 230, boss.y + 100, 'bossBullet');
        game.physics.arcade.moveToObject(bulletBoss, mage, (game.rnd.integerInRange(150, 250)));
        bulletAnim = bulletBoss.animations.add('fireEffect', [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10]);
        bulletBoss.animations.play('fireEffect', 15, true);
        sounds.bossAtack.play();
    }
}

var loopGargola1Attackl, oopGargola12ttack, loopGargola3Attack
//ataque das gargolas
function gargolaAttack() {

    game.time.events.loop(Phaser.Timer.SECOND * 8, gargolaChase, this, 1);
    game.time.events.loop(Phaser.Timer.SECOND * 5, gargolaChase, this, 2);
    game.time.events.loop(Phaser.Timer.SECOND * 10, gargolaChase, this, 3);

    function gargolaChase(n) {
        switch (n) {
            case 1:
                game.physics.arcade.moveToXY(gargola1, mage.x, mage.y, 100 ,1700); 
            
                game.time.events.add(1700, function () {
                    gargola1.body.velocity.x = 0;
                    gargola1.body.velocity.y = 0;
                 }, this);

                 game.time.events.add(1700, function () {
                    game.physics.arcade.moveToXY(gargola1, 600, 150 , 100 ,2000); 
            
                    game.time.events.add(2000, function () {
                        gargola1.body.velocity.x = 0;
                        gargola1.body.velocity.y = 0;
                     }, this);
                }, this)


                break;

            case 2:

                game.physics.arcade.moveToXY(gargola2, mage.x, mage.y, 100 ,1700); 
                
                game.time.events.add(1700, function () {
                    gargola2.body.velocity.x = 0;
                    gargola2.body.velocity.y = 0;
                }, this);

                game.time.events.add(1700, function () {
                    game.physics.arcade.moveToXY(gargola2, 500, 250 , 100 ,2000); 
            
                    game.time.events.add(2000, function () {
                        gargola2.body.velocity.x = 0;
                        gargola2.body.velocity.y = 0;
                    }, this);
                }, this)
                
                break;

            case 3: 

                game.physics.arcade.moveToXY(gargola3, mage.x, mage.y, 100 ,1300); 
                
                game.time.events.add(1300, function () {
                    gargola3.body.velocity.x = 0;
                    gargola3.body.velocity.y = 0;
                }, this);

                game.time.events.add(1300, function () {
                    game.physics.arcade.moveToXY(gargola3, 600, 450 , 100 ,2000); 
            
                    game.time.events.add(2000, function () {
                        gargola3.body.velocity.x = 0;
                        gargola3.body.velocity.y = 0;
                    }, this);
                }, this)

                break;
        }


    }

}