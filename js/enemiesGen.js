
var monstros1,monstro1,loopMonstro1,monstro1Speed;

function monstro1Gen(){

        monstros1 = game.add.group();
        monstros1.enableBody = true;

        for(x=0 ; x<10 ; x++){
        monstro1 = monstros1.create( game.rnd.integerInRange(0, 400) , game.rnd.integerInRange(400,0 ) , 'monstro1');
        var fly = monstro1.animations.add('fly');
        monstro1.animations.play('fly', 15, true);
        monstro1.body.setSize(10, 10, 10, 10);
        }       

}


function monstro1LoopCreate(){

        monstro1 = monstros1.create( game.rnd.integerInRange(100, 500) , game.rnd.integerInRange(100, 800) , 'monstro1');
        var fly = monstro1.animations.add('fly');
        monstro1.animations.play('fly', 15, true);

}