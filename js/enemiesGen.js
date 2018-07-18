var monstros1, monstro1, loopMonstro1, monstro1Speed, monstro1Interval;
var inimigos;
//gera as mosquinhas
function monstro1Gen() {

        inimigos = game.add.group();
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
        inimigos.add(gargolas);
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

var fireElementals = new Object();

fireElementals.presets = function(){
        this.group = game.add.group();
        game.physics.arcade.enable(this.group);
        this.group.enableBody = true;
        this.bodys = new Array();
        this.deads = 0;
}

fireElementals.possets = function(){
        this.group.callAll('animations.add', 'animations', 'fly', [0 , 1, 2, 3, 4], 9, true);
        this.group.callAll('animations.add', 'animations', 'dead', [30,31,32,33,34], 10, true);
        this.group.callAll('animations.add', 'animations', 'attack', [20, 21, 23, 24,25], 9, true);
        this.group.callAll('animations.add', 'animations', 'hited', [26,27,29,29,30], 9, true);
        this.group.callAll('play', null, 'fly'); 
        this.group.setAll('body.immovable', true);
}

fireElementals.gen = function(x, y, maxHp, attackInterval, demage, direction){
        this.bodys.push(this.group.create(x,y, 'fireElemental'));
        e= this.bodys[this.bodys.length -1];
        e.demage = demage;
        e.maxHp = maxHp;
        e.hp = maxHp;
        e.dead = false;

        e.HpBarbg = game.add.sprite(x - e.width/3, y - e.height/3 - 15, 'hpBarSMbg');
        e.HpBar = game.add.sprite(x - e.width/3 ,y - e.height/3, 'hpBarSM');

        e.bulletsGroup = game.add.group();
        e.bulletsGroup.enableBody = true;
    
        e.bulletsGroup.createMultiple(50, 'elementalBullet');
        e.bulletsGroup.setAll('checkWorldBounds', true);
        e.bulletsGroup.setAll('outOfBoundsKill', true);
        game.physics.enable( e.bulletsGroup, Phaser.Physics.ARCADE);

        e.anchor.setTo(.5, .5);
        if(direction == 'right'){
                e.scale.x *= 1;
                e.body.setSize(70, 90, 0, 5);

        }else if(direction == 'left'){
                e.scale.x *= -1;
                e.body.setSize(70, 90, 0, 5);
        }

        //e.Hpbarbg = e.addChild(game.make.sprite(x + 20, y, 'hpBarSMbg'));
        //e.Hpbar = e.addChild(game.make.sprite(x + 20 ,y + 15, 'hpBarSM'));

        e.HpBar.anchor.setTo(0,1);
        e.HpBar.scale.setTo(1, 1);

        e.attackLoop = game.time.events.loop(Phaser.Timer.SECOND * attackInterval, fireElementals.attack, this, e);
}

fireElementals.hited = function(demage,e){

        if(e.hp > 0){
                e.hp -= demage;
                game.add.tween(e.HpBar.scale).to({x: e.hp/e.maxHp, y: 1}, 600, Phaser.Easing.Linear.None, true);
                e.HpBar.x += 0.4;
                console.log(e.hp)
        }

        if(e.hp <= 0 && !e.dead ){
                e.dead = true;
                fireElementals.deads++;
                game.time.events.remove(e.attackLoop);
                e.animations.play('dead',10,false);
                game.time.events.add(700,function(){
                        e.kill();
                        e.HpBar.kill();
                        e.HpBarbg.kill();
                });
        }
}

fireElementals.attack = function(e){
        
        e.bullet = e.bulletsGroup.getFirstDead();
        e.bullet.rotation = Math.atan2(mage.y - e.bullet.y, mage.x + - e.bullet.x);
        e.bullet.body.setSize(20, 20, 3, 3);
        e.bullet.reset(e.x + -40, e.y + 5, 'bossBullet');
        game.physics.arcade.moveToObject(e.bullet, mage, (game.rnd.integerInRange(150, 250)));
        bulletAnim = e.bullet.animations.add('fireEffect', [0, 1, 2, 3, 4]);
        e.animations.play('attack',9,false);
        game.time.events.add(400, function(){e.animations.play('fly',10,true)}, this);
        
        e.bullet.animations.play('fireEffect', 20, true);
}
