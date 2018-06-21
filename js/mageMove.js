var mage;
 function mageMove(){
    /* Movimentacao mage */
    mage.body.velocity.x = 0;
    if (cursors.left.isDown){
        mage.body.velocity.x = -150;
        mage.animations.play('left');
    }
    else if (cursors.right.isDown){
        mage.body.velocity.x = 150;
        mage.animations.play('right');
    }else{
        mage.animations.stop();
        mage.frame = 4;
    }

    if (cursors.up.isDown /*&& mage.body.touching.down*/){
        mage.body.velocity.y = -350;
    } else if (cursors.down.isDown){
        mage.body.velocity.y = 250;
    }
}