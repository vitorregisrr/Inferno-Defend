
var monstros1,monstro1;
function enemiesGen(){

        monstros1 = game.add.group();
        monstros1.enableBody = true;

        monstro1 = monstros1.create(650,100, 'monstro1');
        var fly = monstro1.animations.add('fly');
        monstro1.animations.play('fly', 15, true);

       
}