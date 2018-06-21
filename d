[1mdiff --git a/js/gameLogics.js b/js/gameLogics.js[m
[1mindex 2f28411..6b639c4 100644[m
[1m--- a/js/gameLogics.js[m
[1m+++ b/js/gameLogics.js[m
[36m@@ -36,7 +36,6 @@[m [mfunction atualizarGame(){[m
     [m
     if (game.input.activePointer.isDown)[m
     {[m
[31m-        [m
         fire();[m
     }[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/js/startState.js b/js/startState.js[m
[1mindex eb65d57..65cd0be 100644[m
[1m--- a/js/startState.js[m
[1m+++ b/js/startState.js[m
[36m@@ -3,8 +3,6 @@[m [mvar startState = { create:criarStart}[m
 function criarStart()[m
 [m
 {[m
[31m-    [m
[31m-    [m
     var texto = game.add.text(350, 250, "JOGAR", {fill: 'white'});[m
     texto.inputEnabled = true;[m
     texto.events.onInputDown.add(vaiJogar, this);[m
