var monstros1, monstro1, loopMonstro1, monstro1Speed, monstro1Interval;
//gera as mosquinhas
function monstro1Gen() {

        monstros1 = game.add.group();
        monstros1.enableBody = true;
        loopMonstro1 = game.time.events.loop(monstro1Interval, monstro1LoopCreate, this);
}
//fica criando as mosquinhas
function monstro1LoopCreate() {

        monstro1 = monstros1.create(game.rnd.integerInRange(0, 600), -30, 'monstro1');
        var fly = monstro1.animations.add('fly');
        monstro1.animations.play('fly', 15, true);
        monstro1.body.setSize(30, 40, 10, 6);

}
//faz as mosquinhas seguirem o personagem
function monstro1Moviment() {

        monstros1.forEachAlive(function (monstro1) {
                game.physics.arcade.moveToObject(monstro1, mage, monstro1Speed);

        });
}



//gera o boss para o cenario 4
var boss, flyBoss, bulletBoss, bulletsBossGroup, loopBossAttack, bulletAnim, bulletAnimKill, bossHp, bossHpBar, bossHpBarText;

function bossGen() {
        boss = game.add.sprite(0 - 300, 0 - 500, 'boss');
        bossHp = 50;
        /*BOSS FISICA */
        game.physics.arcade.enable(boss);
        boss.body.immovable = true;
        boss.body.collideWorldBounds = false; //habilita a colisão

        var flyBoss = boss.animations.add('bossFly');
        boss.animations.play('bossFly', 15, true);
        boss.body.setSize(boss.height - 190, boss.width - 160, 180, 20);

        game.time.events.add(900, function () {
                game.physics.arcade.moveToXY(boss, 30, 30, 100, 4000);
                game.time.events.add(4000, function () {
                        boss.body.velocity.y = 0;
                        boss.body.velocity.x = 0;
                        boss.animations.stop();
                        boss.animations.play('bossFly', 10, true);
                }, this);
        }, this)



        //entrada do boss no cenário

}

//função que é chamada quando o boss leva algum ataque
function bossHited(dano) {
        bossHp -= dano;
        if (bossHp == 0) {
                game.time.events.remove(loopBossAttack);
                sounds.bossScreamPain.play();
                bossHpBar.frame = 1;
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
var gargolas, gargola1, gargola2, gargola3 ,gargola1HpBar, gargola2HpBar, gargola3HpBar, gargola1HpBarText, gargola2HpBarText, gargola3HpBarText;
var gargolasMortas = 0;
var gargolasHp = {}

function gargolas2Gen() {
        gargolas = game.add.group();
        gargolasHp = {
                gargola1: 1,
                gargola2: 1,
                gargola3:1 ,
        }
        /*GARGOLAS FISICA */
        game.physics.arcade.enable(gargolas);
        gargolas.enableBody = true;

        gargolas.setAll('body.immovable', true);
        //criar as gargolas
        gargola1 = gargolas.create(1200, 600, 'gargola');
        gargola1.body.setSize(80, 60, -10, 20);
        gargola1.body.immovable = true;

        gargola2 = gargolas.create(1200, 400, 'gargola');
        gargola2.body.setSize(80, 60, -10, 20);
        gargola2.body.immovable = true;

        gargola3 = gargolas.create(1200, 300, 'gargola');
        gargola3.body.setSize(80, 60, -10, 20);
        gargola3.body.immovable = true;

        //gira as argolas
        gargola1.anchor.setTo(.5, .5);
        gargola1.scale.x *= -1;

        gargola2.anchor.setTo(.5, .5);
        gargola2.scale.x *= -1;

        gargola3.anchor.setTo(.5, .5);
        gargola3.scale.x *= -1;

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
                        gargola1.animations.play('gargola1Fly', 10, true);
                }, this);
        }, this)

        game.time.events.add(900, function () {
                game.physics.arcade.moveToXY(gargola2, 540, 230, 100, 4000);
                game.time.events.add(4000, function () {
                        gargola2.body.velocity.y = 0;
                        gargola2.body.velocity.x = 0;
                        gargola2.animations.stop();
                        gargola2.animations.play('gargola2Fly', 10, true);
                }, this);
        }, this)

        game.time.events.add(900, function () {
                game.physics.arcade.moveToXY(gargola3, 600, 350, 100, 4000);
                game.time.events.add(4000, function () {
                        gargola3.body.velocity.y = 0;
                        gargola3.body.velocity.x = 0;
                        gargola3.animations.stop();
                        gargola3.animations.play('gargola3Fly', 10, true);
                }, this);
        }, this)

}

function gargolasHited(gargola, dano) {

        switch (gargola) {
                case 1:
                        gargolasHp.gargola1 -= dano;
                        if (gargolasHp.gargola1 == 0) {
                                gargola1.kill();
                                gargola1HpBar.frame = 1;
                                gargolasMortas ++;
                        }
                        break;

                case 2:
                        gargolasHp.gargola2 -= dano;
                        if (gargolasHp.gargola2 == 0) {
                                gargola2.kill();
                                gargola2HpBar.frame = 1;
                                gargolasMortas ++;
                        }
                        break;

                case 3:

                        gargolasHp.gargola3 -= dano;
                        if (gargolasHp.gargola3 == 0) {
                                gargola3.kill();
                                gargola3HpBar.frame = 1;
                                gargolasMortas ++;
                        }
                        break;
        }
}