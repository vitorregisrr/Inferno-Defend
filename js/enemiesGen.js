function enemiesGen(){

        var monstros1 = game.add.group();
        monstros1.enableBody = true;
        
            
        monstro1 = game.add.sprite(650,100, 'monstro1');

        monstro1.animations.add('left', [0, 1, 2, 3], 10, true);
        monstro1.animations.add('right', [5, 6, 7, 8], 10, true);
       
}
