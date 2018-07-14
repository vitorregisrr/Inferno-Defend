var fx;
var sounds = {};

function createAudios() {
	fx = game.add.audio('sfx');
	fx.allowMultiple = true;

	fx.addMarker('alien death', 1, 1.0);
	fx.addMarker('boss hit', 3, 0.5);
	fx.addMarker('escape', 4, 3.2);
	fx.addMarker('meow', 8, 0.5);
	fx.addMarker('numkey', 9, 0.1);
	fx.addMarker('ping', 10, 1.0);
	fx.addMarker('death', 12, 4.2);
	fx.addMarker('shot', 17, 1.0);
	fx.addMarker('squit', 19, 0.3);

	sounds.lava = game.add.audio('lava');
	sounds.bossAtack = game.add.audio('bossAtack');
	sounds.bossScream = game.add.audio('bossScream');
	sounds.bossFlying= game.add.audio('bossFlying');
	sounds.atacked = game.add.audio('atacked');
	sounds.knife = game.add.audio('knife');
	sounds.enterPortal = game.add.audio('enterPortal');
	sounds.bossScreamPain = game.add.audio('bossScreamPain');

	sounds.bossFlying.volume = 0.1;
	sounds.lava.volume = 0.1;
	sounds.bossAtack.volume = 0.1;
	sounds.bossScream.volume = 0.2;
	sounds.bossScreamPain.volume = 0.6;

}
