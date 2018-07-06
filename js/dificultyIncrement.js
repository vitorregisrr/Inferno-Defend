function dificultyIncrement(){

    if(!gameOverStatus){
        monstro1Speed = 90;
        monstro1Interval = 3000; //seta a dificuldade inicial 

        console.log('increment loaded');
        //muda para dificuldade 2 15s de jogo
        window.setTimeout(setDificulty2, 15000);

        //muda para dificuldade 3 em 40s de jogo
        window.setTimeout(setDificulty3, 20000);

        //muda para dificuldade 4 em 1min de game
        window.setTimeout(setDificulty4, 130000);
    }
}

function setDificulty2(){
        monstro1Speed = 150;
        monstro1Interval = 2000;
        fireRate = 700;
        console.log('dificuldade 2')

}

function setDificulty3(){
        monstro1Speed = 200;
        monstro1Interval = 1500;
        fireRate = 600;
        console.log('dificuldade 2')
}

function setDificulty4(){
        monstro1Speed = 230;
        monstro1Interval = 1300;
        fireRate = 500;
        console.log('dificuldade 2')

}