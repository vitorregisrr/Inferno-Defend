
    //muda para dificuldade 2 15s de jogo
    loopMonstro1 = window.setInterval(setDificulty2, 15000);

    //muda para dificuldade 3 em 40s de jogo
    loopMonstro1 = window.setInterval(setDificulty3, 40000);

    //muda para dificuldade 4 em 1min de game
    loopMonstro1 = window.setInterval(setDificulty4, 60000);



    function setDificulty2(){
        monstro1Speed = 150;
        monstro1Interval = 2000;
    }

    function setDificulty3(){
        monstro1Speed = 200;
        monstro1Interval = 1500;
    }

    function setDificulty4(){
        monstro1Speed = 270;
        monstro1Interval = 800;
    }