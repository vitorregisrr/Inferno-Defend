var monstros1, monstro1, loopMonstro1, monstro1Speed, monstro1Interval;
//gera as mosquinhas
function monstro1Gen() {

        monstros1 = game.add.group();
        monstros1.enableBody = true;
        loopMonstro1 = game.time.events.loop(monstro1Interval, monstro1LoopCreate, this);

        //lógica do dano por segundo
        game.time.events.loop(Phaser.Timer.SECOND * 1, function () {
                monstros1.forEachAlive(function (monstro1) {
                        if (monstro1.colision) {
                                monstro1.colision = false;
                                console.log('deu dano');
                                mageShoted(1);
                        }
                })
        });

}
//fica criando as mosquinhas
function monstro1LoopCreate() {

        monstro1 = monstros1.create(game.rnd.integerInRange(0, 600), -30, 'monstro1');
        monstro1.colision = false;
        monstro1.round = 1;
        var fly = monstro1.animations.add('fly');
        monstro1.animations.play('fly', 15, true);
        monstro1.body.setSize(30, 40, 10, 6);

}
//faz as mosquinhas seguirem o personagem
function monstro1Moviment() {

        //teste de colisao para a função de dano do monstro1
        monstros1.forEachAlive(function (monstro1) {
                //colisao entre asmago e monstros1
                game.physics.arcade.collide(monstro1, mage, function () {
                        monstro1.colision = true;
                }, null, this);
        });

        monstros1.forEachAlive(function (monstro1) {
                game.physics.arcade.moveToObject(monstro1, mage, monstro1Speed);

        });
}



//gera o boss para o cenario 4
var boss, flyBoss, bulletBoss, bulletsBossGroup, loopBossAttack, bulletAnim, bulletAnimKill, bossHp, bossHpBar, bossHpBarText;

function bossGen() {
        boss = game.add.sprite(0 - 300, 0 - 500, 'boss');
        boss.hp = 50;
        boss.maxHp = 50;
        boss.HpBarbg = game.add.sprite(620, 30, 'hpBarLGbg');
        boss.HpBar = game.add.sprite(620, 150, 'hpBarLG');
        boss.HpBar.anchor.setTo(0,1);
        boss.HpBar.scale.setTo(1, 1);
        /*BOSS FISICA */
        game.physics.arcade.enable(boss);
        boss.body.immovable = true;
        boss.body.collideWorldBounds = false; //habilita a colisão

        var flyBoss = boss.animations.add('bossFly');
        boss.animations.play('bossFly', 15, true);
        boss.body.setSize(boss.height - 190, boss.width - 160, 180, 20);

        //entrada do boss no cenário
        game.time.events.add(900, function () {
                game.physics.arcade.moveToXY(boss, 30, 120, 100, 4000);
                game.time.events.add(4000, function () {
                        boss.body.velocity.y = 0;
                        boss.body.velocity.x = 0;
                        boss.animations.stop();
                        boss.animations.play('bossFly', 10, true);
                }, this);
        }, this)

}

//função que é chamada quando o boss leva algum ataque
function bossHited(dano) {
        boss.hp-= dano;
        this.game.add.tween(boss.HpBar.scale).to({x: boss.hp/boss.maxHp, y: 1}, 600, Phaser.Easing.Linear.None, true);
        boss.HpBar.x += 1;
        if (boss.hp == 0) {
                game.time.events.remove(loopBossAttack);
                sounds.bossScreamPain.play();
                //saida do boss do cenário
                boss.animations.stop();
                boss.animations.play('bossFly', 13, true);
                game.physics.arcade.moveToXY(boss, 0 - 200, 0 - 300, 300, 3000);
                boss.body.collideWorldBounds = false;
                setTimeout(function () {
                        boss.kill();
                        sounds.bossScream.volume = 0;
                        sounds.bossFlying.volume = 0;
                }, 6000);
                comedownPlatforms4();
        }

}



//criação das gargolas do cenário 3
var gargolas, gargola1, gargola2, gargola3, gargola1HpBar, gargola2HpBar, gargola3HpBar, gargola1HpBarText, gargola2HpBarText, gargola3HpBarText;
var gargolasHp = {}
var gargolasMortas = 0;

function gargolas2Gen() {
        gargolas = game.add.group();
        gargolasMortas = 0;

        gargolas.colision = false;

        //lógica do dano  ao encostar por segundo
        game.time.events.loop(Phaser.Timer.SECOND * 1, function () {
                if (gargolas.colision) {
                        gargolas.colision = false;
                        mageShoted(1);
                }
        });


        /*GARGOLAS FISICA */
        game.physics.arcade.enable(gargolas);
        gargolas.enableBody = true;

        gargolas.setAll('body.immovable', true);
        //criar as gargolas
        gargola1 = gargolas.create(1200, 600, 'gargola');
        gargola1.hp = 5;
        gargola1.maxHp = 5;
        gargola1.body.setSize(80, 60, -10, 20);
        gargola1.body.immovable = true;

        gargola2 = gargolas.create(1200, 400, 'gargola');
        gargola2.hp = 5;
        gargola2.maxHp = 5;
        gargola2.body.setSize(80, 60, -10, 20);
        gargola2.body.immovable = true;

        gargola3 = gargolas.create(1200, 300, 'gargola');
        gargola3.hp = 5;
        gargola3.maxHp = 5;
        gargola3.body.setSize(80, 60, -10, 20);
        gargola3.body.immovable = true;

        //gira as argolas
        gargola1.anchor.setTo(.5, .5);
        gargola1.scale.x *= -1;

        gargola2.anchor.setTo(.5, .5);
        gargola2.scale.x *= -1;

        gargola3.anchor.setTo(.5, .5);
        gargola3.scale.x *= -1;

        //barras de hp
        gargola1.HpBarbg = game.add.sprite(620, 30, 'hpBarSMbg');
        gargola1.HpBar = game.add.sprite(620, 30, 'hpBarSM');
        gargola1.HpBar.anchor.setTo(0,1);
        gargola1.HpBar.scale.setTo(1, 1);

        gargola2.HpBarbg = game.add.sprite(620, 30, 'hpBarSMbg');
        gargola2.HpBar = game.add.sprite(620, 90, 'hpBarSM');
        gargola2.HpBar.anchor.setTo(0,1);
        gargola2.HpBar.scale.setTo(1, 1);

        gargola3.HpBarbg = game.add.sprite(620, 30, 'hpBarSMbg');
        gargola3.HpBar = game.add.sprite(620, 150, 'hpBarSM');
        gargola3.HpBar.anchor.setTo(0,1);
        gargola3.HpBar.scale.setTo(1, 1);


        //animacoes
        var flyGargola1 = gargola1.animations.add('gargola1Fly');
        gargola1.animations.play('gargola1Fly', 15, true);

        var flygargola2 = gargola2.animations.add('gargola2Fly');
        gargola2.animations.play('gargola2Fly', 15, true);

        var flygargola3 = gargola3.animations.add('gargola3Fly');
        gargola3.animations.play('gargola3Fly', 15, true);

        game.time.events.add(900, function () {
                game.physics.arcade.moveToXY(gargola1, 600, 100, 100, 4000);
                game.time.events.add(4000, function () {
                        gargola1.body.velocity.y = 0;
                        gargola1.body.velocity.x = 0;
                        gargola1.animations.stop();
                        gargola1.animations.play('gargola1Fly', 13, true);
                }, this);
        }, this)

        game.time.events.add(900, function () {
                game.physics.arcade.moveToXY(gargola2, 540, 230, 100, 4000);
                game.time.events.add(4000, function () {
                        gargola2.body.velocity.y = 0;
                        gargola2.body.velocity.x = 0;
                        gargola2.animations.stop();
                        gargola2.animations.play('gargola2Fly', 13, true);
                }, this);
        }, this)

        game.time.events.add(900, function () {
                game.physics.arcade.moveToXY(gargola3, 600, 350, 100, 4000);
                game.time.events.add(4000, function () {
                        gargola3.body.velocity.y = 0;
                        gargola3.body.velocity.x = 0;
                        gargola3.animations.stop();
                        gargola3.animations.play('gargola3Fly', 13, true);
                }, this);
        }, this)

}

function gargolasHited(gargola, dano) {

        switch (gargola) {
                case 1:
                        gargola1.hp -= dano;
                        this.game.add.tween(gargola1.HpBar.scale).to({x: gargola1.hp/gargola1.maxHp, y: 1}, 600, Phaser.Easing.Linear.None, true);
                        gargola1.HpBar.x += 1;
                        if (gargola1.hp == 0) {
                                gargola1.HpBar.frame = 1;
                                setTimeout(function () {
                                        game.time.events.remove(gargola1.ChaseLoop);
                                        gargola1.kill();
                                        gargolasMortas++;
                                        gargola1.HpBar.kill();
                                        gargola1.HpBarbg.kill();
                                }, 000);
                        }
                        break;

                case 2:
                        gargola2.hp -= dano;
                        this.game.add.tween(gargola2.HpBar.scale).to({x: gargola2.hp/gargola2.maxHp, y: 1}, 600, Phaser.Easing.Linear.None, true);
                        gargola2.HpBar.x += 1;
                        if (gargola2.hp == 0) {
                                setTimeout(function () {
                                        game.time.events.remove(gargola2.ChaseLoop);
                                        gargola2.kill();
                                        gargolasMortas++;
                                        gargola2.HpBar.kill();
                                        gargola2.HpBarbg.kill();
                                }, 00);
                        }
                        break;

                case 3:

                        gargola3.hp -= dano;
                        this.game.add.tween(gargola3.HpBar.scale).to({x: gargola3.hp/gargola3.maxHp, y: 1}, 600, Phaser.Easing.Linear.None, true);
                        gargola3.HpBar.x += 1;
                        if (gargola3.hp == 0) {
                                gargola3.HpBar.frame = 1;
                                game.time.events.remove(gargola3.ChaseLoop);
                                setTimeout(function () {
                                        gargola3.kill();
                                        gargolasMortas++;
                                        gargola3.HpBar.kill();
                                        gargola3.HpBarbg.kill();
                                }, 000);

                        }
                        break;
        }

}

//ataque das gargolas
function gargolaAttack() {

        gargola1.ChaseLoop = game.time.events.loop(Phaser.Timer.SECOND * 8, gargolaChase, this, 1);
        gargola2.ChaseLoop = game.time.events.loop(Phaser.Timer.SECOND * 5, gargolaChase, this, 2);
        gargola3.ChaseLoop = game.time.events.loop(Phaser.Timer.SECOND * 10, gargolaChase, this, 3);

        function gargolaChase(n) {

                switch (n) {
                        case 1:
                                if (gargola1.hp > 0) {
                                        sounds.monsterChase.play();
                                        game.physics.arcade.moveToXY(gargola1, mage.x, mage.y, 100, 1700);

                                        game.time.events.add(1700, function () {
                                                gargola1.body.velocity.x = 0;
                                                gargola1.body.velocity.y = 0;
                                        }, this);

                                        game.time.events.add(1700, function () {
                                                game.physics.arcade.moveToXY(gargola1, 600, 150, 100, 2000);

                                                game.time.events.add(2000, function () {
                                                        gargola1.body.velocity.x = 0;
                                                        gargola1.body.velocity.y = 0;
                                                }, this);
                                        }, this)
                                }

                                break;

                        case 2:
                                if (gargola2.hp > 0) {
                                        sounds.monsterChase.play();
                                        game.physics.arcade.moveToXY(gargola2, mage.x, mage.y, 100, 1700);

                                        game.time.events.add(1700, function () {
                                                gargola2.body.velocity.x = 0;
                                                gargola2.body.velocity.y = 0;
                                        }, this);

                                        game.time.events.add(1700, function () {
                                                game.physics.arcade.moveToXY(gargola2, 500, 250, 100, 2000);

                                                game.time.events.add(2000, function () {
                                                        gargola2.body.velocity.x = 0;
                                                        gargola2.body.velocity.y = 0;
                                                }, this);
                                        }, this)
                                }
                                break;

                        case 3:
                                if (gargola3.hp > 0) {
                                        sounds.monsterChase.play();
                                        game.physics.arcade.moveToXY(gargola3, mage.x, mage.y, 100, 1300);

                                        game.time.events.add(1300, function () {
                                                gargola3.body.velocity.x = 0;
                                                gargola3.body.velocity.y = 0;
                                        }, this);

                                        game.time.events.add(1300, function () {
                                                game.physics.arcade.moveToXY(gargola3, 600, 450, 100, 2000);

                                                game.time.events.add(2000, function () {
                                                        gargola3.body.velocity.x = 0;
                                                        gargola3.body.velocity.y = 0;
                                                }, this);
                                        }, this)

                                        break;
                                }


                }
        }
}