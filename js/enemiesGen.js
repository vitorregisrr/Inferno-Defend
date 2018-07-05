var monstros1, monstro1, loopMonstro1, monstro1Speed, monstro1Interval;

function monstro1Gen() {

        monstros1 = game.add.group();
        monstros1.enableBody = true;

        loopMonstro1 = window.setInterval(monstro1LoopCreate, monstro1Interval);
}


function monstro1LoopCreate() {

        monstro1 = monstros1.create(game.rnd.integerInRange(0, 600), game.rnd.integerInRange(800, 0), 'monstro1');
        var fly = monstro1.animations.add('fly');
        monstro1.animations.play('fly', 15, true);
        monstro1.body.setSize(10, 10, 10, 10);

}