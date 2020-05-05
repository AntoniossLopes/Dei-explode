"use strict";
/** @type {import("../typings/phaser") */

var selectedP1;
var selectedP2;

(function () {
    window.addEventListener("load", main);
}());

class Loader extends Phaser.Scene {
    constructor() {
        super({ key: 'Loader', activated: true });
    }
    preload() {
        this.load.spritesheet('player', "assets/player1.png", { frameWidth: 21, frameHeight: 27 });
        this.load.spritesheet('player2', "assets/player2.png", { frameWidth: 19, frameHeight: 28 });
        this.load.spritesheet('player3', "assets/player3.png", { frameWidth: 17, frameHeight: 31 });
        this.load.spritesheet('player4', "assets/player4.png", { frameWidth: 22, frameHeight: 26 });
        this.load.image('p1', "assets/p1.png", { frameWidth: 100, frameHeight: 100 });
        this.load.image('p2', "assets/p2.png", { frameWidth: 100, frameHeight: 100 });
        this.load.image("tiles1", "assets/Sprite001.png");
        this.load.image("tiles2", "assets/Sprite002.png");
        this.load.image("background", "assets/background.png");
        this.load.image("logo", "assets/logo.png");
        this.load.image("jogarBtn", "assets/jogar.png");
        this.load.image("leaderBtn", "assets/leaderboard.png");
        this.load.image("opcoesBtn", "assets/opcoes.png");
        this.load.image("ajudaBtn", "assets/ajuda.png");
        this.load.image("sairBtn", "assets/sair.png");
        this.load.image("arrowRight", "assets/arrowRight.png");
        this.load.image("arrowLeft", "assets/arrowLeft.png");
        this.load.image("charSelect", "assets/charSelect.png");
        this.load.image("mapSelect", "assets/mapSelect.png");
        this.load.image("selecionar", "assets/selecionar.png");
        this.load.tilemapTiledJSON("map1", "assets/mapa1.json");
        this.load.tilemapTiledJSON("map2", "assets/mapa2.json");
        this.load.tilemapTiledJSON("map3", "assets/mapa3.json");
        this.load.spritesheet("bomb", "assets/bomb_spritesheet.png", { frameWidth: 16, frameHeight: 16 });
        this.load.spritesheet("fire", "assets/explosion.png", { frameWidth: 16, frameHeight: 16 });
        this.load.image("wood", "assets/wood.png", { frameWidth: 32, frameHeight: 32 });
        this.load.image("high++", "assets/high++.png", { frameWidth: 32, frameHeight: 32 });
        this.load.image("ghost++", "assets/ghost++.png", { frameWidth: 32, frameHeight: 32 });
        this.load.image("speed++", "assets/speed++.png", { frameWidth: 32, frameHeight: 32 });
        this.load.image("bomb++", "assets/bomb++.png", { frameWidth: 32, frameHeight: 32 });
        this.load.image("drunk++", "assets/drunk++.png", { frameWidth: 32, frameHeight: 32 });
        this.load.image("power++", "assets/power++.png", { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet("lava", "assets/lava.png", { frameWidth: 32, frameHeight: 32 });
        this.load.image("brickDestructible", "assets/brickDestructible.png", { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet("water", "assets/water.png", { frameWidth: 32, frameHeight: 32 });
        this.load.image("leaves", "assets/leaves.png", { frameWidth: 32, frameHeight: 32 });
        this.load.image("level1", "assets/map1.png", { frameWidth: 179, frameHeight: 179 });
        this.load.image("level2", "assets/map2.png", { frameWidth: 179, frameHeight: 181 });
        this.load.image("level3", "assets/map3.png", { frameWidth: 170, frameHeight: 181 });
        this.load.image("volup", "assets/volup.png");
        this.load.image("voldown", "assets/voldown.png");
        this.load.image("credits", "assets/credits.png");
        this.load.image("creditsBtn", "assets/creditos.png");
        this.load.image("inicio", "assets/inicio.png");
        this.load.image("recomecar", "assets/recomecar.png");

    }
    create() {
        this.scene.start('MainMenu');
    }

}


class MainMenu extends Phaser.Scene {
    constructor() {
        super({ key: 'MainMenu', activated: true });
    }

    create() {
        this.add.image(240, 240, 'background');
        this.add.image(240, 40, 'logo');
        var jogarBtn = this.add.image(240, 110, "jogarBtn").setInteractive();
        var leaderBtn = this.add.image(240, 150, "leaderBtn").setInteractive();
        var opcoesBtn = this.add.image(240, 190, "opcoesBtn").setInteractive();
        var ajudaBtn = this.add.image(240, 230, "ajudaBtn").setInteractive();
        var sairBtn = this.add.image(240, 270, "sairBtn").setInteractive();
        var creditsBtn = this.add.image(400, 430, "creditsBtn").setInteractive();
        creditsBtn.on("pointerdown", () => {
            this.scene.start('Credits');
        })
        jogarBtn.on("pointerdown", () => {
            this.scene.start('SelectChar')
        }, this);
    }
}

class SelectChar extends Phaser.Scene {
    constructor() {
        super({ key: 'SelectChar', activated: true });
        this.player1 = Player;
        this.player2 = Player;
    }

    create() {
        this.add.image(240, 240, 'background');
        this.add.image(240, 40, 'charSelect');
        this.add.image(50, 120, 'p1');
        this.add.image(50, 220, 'p2');
        var arrowLeft1 = this.add.image(140, 120, 'arrowLeft').setInteractive();
        var arrowRight1 = this.add.image(380, 120, 'arrowRight').setInteractive();
        var arrowLeft2 = this.add.image(140, 220, 'arrowLeft').setInteractive();
        var arrowRight2 = this.add.image(380, 220, 'arrowRight').setInteractive();
        this.arrowRight1 = arrowRight1;
        this.arrowLeft1 = arrowLeft1;
        this.arrowRight2 = arrowRight2;
        this.arrowLeft2 = arrowLeft2;
        this.maxPlayers = 4;
        this.selector1 = 1;
        this.selector2 = 1;
        this.player1 = new Player({ scene: this, x: 260, y: 120, name: 'player' }, this.input.keyboard.createCursorKeys(), Phaser.Input.Keyboard.KeyCodes.ENTER, 2);
        this.player2 = new Player({ scene: this, x: 260, y: 120, name: 'player2' }, this.input.keyboard.createCursorKeys(), Phaser.Input.Keyboard.KeyCodes.ENTER, 2);
        this.player3 = new Player({ scene: this, x: 260, y: 120, name: 'player3' }, this.input.keyboard.createCursorKeys(), Phaser.Input.Keyboard.KeyCodes.ENTER, 2);
        this.player4 = new Player({ scene: this, x: 260, y: 120, name: 'player4' }, this.input.keyboard.createCursorKeys(), Phaser.Input.Keyboard.KeyCodes.ENTER, 2);
        this.player5 = new Player({ scene: this, x: 260, y: 220, name: 'player' }, this.input.keyboard.createCursorKeys(), Phaser.Input.Keyboard.KeyCodes.ENTER, 2);
        this.player6 = new Player({ scene: this, x: 260, y: 220, name: 'player2' }, this.input.keyboard.createCursorKeys(), Phaser.Input.Keyboard.KeyCodes.ENTER, 2);
        this.player7 = new Player({ scene: this, x: 260, y: 220, name: 'player3' }, this.input.keyboard.createCursorKeys(), Phaser.Input.Keyboard.KeyCodes.ENTER, 2);
        this.player8 = new Player({ scene: this, x: 260, y: 220, name: 'player4' }, this.input.keyboard.createCursorKeys(), Phaser.Input.Keyboard.KeyCodes.ENTER, 2);
        selectedP1 = this.player1.name;
        selectedP2 = this.player5.name;
        this.player1.scaleX = 3;
        this.player1.scaleY = 3;
        this.player2.scaleX = 3;
        this.player2.scaleY = 3;
        this.player3.scaleX = 3;
        this.player3.scaleY = 3;
        this.player4.scaleX = 3;
        this.player4.scaleY = 3;
        this.player5.scaleX = 3;
        this.player5.scaleY = 3;
        this.player6.scaleX = 3;
        this.player6.scaleY = 3;
        this.player7.scaleX = 3;
        this.player7.scaleY = 3;
        this.player8.scaleX = 3;
        this.player8.scaleY = 3;
        this.player2.alpha = 0;
        this.player3.alpha = 0;
        this.player4.alpha = 0;
        this.player6.alpha = 0;
        this.player7.alpha = 0;
        this.player8.alpha = 0;
        var selecionar = this.add.image(240, 360, 'selecionar').setInteractive();
        this.selecionar = selecionar;
        this.changeCharacter();

    }

    changeCharacter() {
        this.arrowRight1.on('pointerdown', () => {
            this.selector1++;
            if (this.selector1 == 1) {
                this.player1.alpha = 1;
                this.player2.alpha = 0;
                this.player3.alpha = 0;
                this.player4.alpha = 0;
                selectedP1 = this.player1.name;
            }
            else if (this.selector1 == 2) {
                this.player1.alpha = 0;
                this.player2.alpha = 1;
                this.player3.alpha = 0;
                this.player4.alpha = 0;
                selectedP1 = this.player2.name;
            }
            else if (this.selector1 == 3) {
                this.player1.alpha = 0;
                this.player2.alpha = 0;
                this.player3.alpha = 1;
                this.player4.alpha = 0;
                selectedP1 = this.player3.name;
            }
            else if (this.selector1 == this.maxPlayers) {
                this.player1.alpha = 0;
                this.player2.alpha = 0;
                this.player3.alpha = 0;
                this.player4.alpha = 1;
                selectedP1 = this.player4.name;
            }
            if (this.selector1 > 4)
                this.selector1 = 4;


        });

        this.arrowLeft1.on('pointerdown', () => {
            this.selector1--;
            if (this.selector1 == 1) {
                this.player1.alpha = 1;
                this.player2.alpha = 0;
                this.player3.alpha = 0;
                this.player4.alpha = 0;
                selectedP1 = this.player1.name;
            }
            else if (this.selector1 == 2) {
                this.player1.alpha = 0;
                this.player2.alpha = 1;
                this.player3.alpha = 0;
                this.player4.alpha = 0;
                selectedP1 = this.player2.name;

            }
            else if (this.selector1 == 3) {
                this.player1.alpha = 0;
                this.player2.alpha = 0;
                this.player3.alpha = 1;
                this.player4.alpha = 0;
                selectedP1 = this.player3.name;
            }
            else if (this.selector1 == this.maxPlayers) {
                this.player1.alpha = 0;
                this.player2.alpha = 0;
                this.player3.alpha = 0;
                this.player4.alpha = 1;
                selectedP1 = this.player4.name;
            }
            if (this.selector1 < 0)
                this.selector1 = 1;
        });

        this.arrowRight2.on('pointerdown', () => {
            this.selector2++;
            if (this.selector2 == 1) {
                this.player5.alpha = 1;
                this.player6.alpha = 0;
                this.player7.alpha = 0;
                this.player8.alpha = 0;
                selectedP2 = this.player5.name;
            }
            else if (this.selector2 == 2) {
                this.player5.alpha = 0;
                this.player6.alpha = 1;
                this.player7.alpha = 0;
                this.player8.alpha = 0;
                selectedP2 = this.player6.name;
            }
            else if (this.selector2 == 3) {
                this.player5.alpha = 0;
                this.player6.alpha = 0;
                this.player7.alpha = 1;
                this.player8.alpha = 0;
                selectedP2 = this.player7.name;
            }
            else if (this.selector2 == this.maxPlayers) {
                this.player5.alpha = 0;
                this.player6.alpha = 0;
                this.player7.alpha = 0;
                this.player8.alpha = 1;
                selectedP2 = this.player8.name;
            }
            if (this.selector2 > 4)
                this.selector2 = 4;

        });

        this.arrowLeft2.on('pointerdown', () => {
            this.selector2--;
            if (this.selector2 == 1) {
                this.player5.alpha = 1;
                this.player6.alpha = 0;
                this.player7.alpha = 0;
                this.player8.alpha = 0;
                selectedP2 = this.player5.name;
            }
            else if (this.selector2 == 2) {
                this.player5.alpha = 0;
                this.player6.alpha = 1;
                this.player7.alpha = 0;
                this.player8.alpha = 0;
                selectedP2 = this.player6.name;

            }
            else if (this.selector2 == 3) {
                this.player5.alpha = 0;
                this.player6.alpha = 0;
                this.player7.alpha = 1;
                this.player8.alpha = 0;
                selectedP2 = this.player7.name;
            }
            else if (this.selector2 == this.maxPlayers) {
                this.player5.alpha = 0;
                this.player6.alpha = 0;
                this.player7.alpha = 0;
                this.player8.alpha = 1;
                selectedP2 = this.player8.name;
            }
            if (this.selector2 < 0)
                this.selector2 = 1;
        });

        this.selecionar.on('pointerdown', () => {
            this.scene.start('selectLevel');
        })
    }


}

class Opcoes extends Phaser.Scene {
    constructor() {
        super({ key: "Opcoes", activated: true });
    }
    create() {
        let aux = 100;
        this.add.image(240, 240, "background");
        var volup = this.add.image(140, 80, "volup").setInteractive();
        var voldown = this.add.image(340, 80, "voldown").setInteractive();
        var volume = this.add.text(200, 80, "Volume: 100");
        this.volup = volup;
        this.voldown = voldown;
        this.volume = volume;
        volup.setScale(.3);
        voldown.setScale(.3);
        this.vol = aux;
    }
    update() {
        this.volup.on('pointerdown', () => {
            this.vol -= 10;
            this.volume.setText('Volume: ' + this.vol);
            Phaser.Game.volume
        })
        this.voldown.on('pointerdown', () => {
            this.vol += 10;
            this.volume.setText('Volume: ' + this.vol);
        })
    }
}

class endScreen extends Phaser.Scene {
    constructor() {
        super({ key: "endScreen", activated: true })
    }
    create() {
        this.add.image(240, 240, "background");
        var inicioBtn = this.add.image(360, 360, "inicio").setInteractive();
        var restartBtn = this.add.image(120, 360, "recomecar").setInteractive();
        this.inicio = inicioBtn;
        this.restart = restartBtn;
        this.inicio.on('pointerdown', () => {
            this.scene.start('MainMenu');
        })
        this.restart.on('pointerdown', () => {
            this.scene.start('SelectChar');
        })
    }
}

class Credits extends Phaser.Scene {
    constructor() {
        super({ key: "Credits", activated: true })
    }
    create() {
        this.add.image(240, 240, "background");
        var foto = this.add.image(240, 150, "credits");
        this.add.text(30, 400, "Jogo realizado por: António Lopes,\n Lucas Ferreira e Pedro Carvalho", { fill: '#000', fontSize: '18px', fontWeight: 'bold', stroke: '#000000', strokeThickness: 2 });
    }
}

class selectLevel extends Phaser.Scene {
    constructor() {
        super({ key: 'selectLevel', activated: true });
    }

    create() {
        this.add.image(240, 240, 'background');
        this.add.image(240, 40, 'mapSelect');
        this.map2 = this.add.image(240, 200, 'level2');
        this.map3 = this.add.image(240, 200, 'level3');
        this.map1 = this.add.image(240, 200, 'level1');
        this.map1.name = "Level1";
        this.map2.name = "Level2";
        this.map3.name = "Level3";
        this.selectedLevel = this.map1.name;
        var arrowLeft = this.add.image(100, 200, 'arrowLeft').setInteractive();
        var arrowRight = this.add.image(380, 200, 'arrowRight').setInteractive();
        this.arrowRight = arrowRight;
        this.arrowLeft = arrowLeft;
        this.maxMaps = 3;
        this.selector = 1;

        var selecionar = this.add.image(240, 360, 'selecionar').setInteractive();
        this.selecionar = selecionar;
        this.changeLevel();

    }

    changeLevel() {
        this.arrowRight.on('pointerdown', () => {
            this.selector++;
            if (this.selector == 1) {
                this.map1.alpha = 1;
                this.map2.alpha = 0;
                this.map3.alpha = 0;
                this.selectedLevel = this.map1.name;
            }
            else if (this.selector == 2) {
                this.map1.alpha = 0;
                this.map2.alpha = 1;
                this.map3.alpha = 0;
                this.selectedLevel = this.map2.name;
            }
            else if (this.selector == this.maxMaps) {
                this.map1.alpha = 0;
                this.map2.alpha = 0;
                this.map3.alpha = 1;
                this.selectedLevel = this.map3.name;
            }
            if (this.selector > 3)
                this.selector = 3;


        });

        this.arrowLeft.on('pointerdown', () => {
            this.selector--;
            if (this.selector == 1) {
                this.map1.alpha = 1;
                this.map2.alpha = 0;
                this.map3.alpha = 0;
                this.selectedLevel = this.map1.name;
            }
            else if (this.selector == 2) {
                this.map1.alpha = 0;
                this.map2.alpha = 1;
                this.map3.alpha = 0;
                this.selectedLevel = this.map2.name;

            }
            else if (this.selector == this.maxMaps) {
                this.map1.alpha = 0;
                this.map2.alpha = 0;
                this.map3.alpha = 1;
                this.selectedLevel = this.map3.name;
            }
            if (this.selector < 0)
                this.selector = 1;
        });


        this.selecionar.on('pointerdown', () => {
            this.scene.start(this.selectedLevel);
        })
    }


}
class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(args, keys, drop, number) {
        super(args.scene, args.x, args.y, args.name);
        this.keys = keys;
        this.spaceBar = args.scene.input.keyboard.addKey(drop);
        this.alive = true;
        this.bombs = 1;
        this.number = number;
        this.speed = 175;
        this.name = args.name;
        this.power = 3;
        this.left = this.keys.left;
        this.right = this.keys.right;
        this.up = this.keys.up;
        this.down = this.keys.down;
        args.scene.add.existing(this);
        args.scene.physics.world.enable(this);


    }

    keyHandler() {
        if (Phaser.Input.Keyboard.JustDown(this.spaceBar) && this.bombs > 0) {
            this.dropsBomb();
        }
        if (this.keys.left.isDown) {
            this.setVelocityX(-this.speed);
        } else if (this.keys.right.isDown) {
            this.setVelocityX(this.speed);
        } else if (this.keys.up.isDown) {
            this.setVelocityY(-this.speed);
        } else if (this.keys.down.isDown) {
            this.setVelocityY(this.speed);
        }

        if (this.keys.left.isDown) {
            this.anims.play("left" + this.number, true);
            this.body.setImmovable(false);
        } else if (this.keys.right.isDown) {
            this.anims.play("right" + this.number, true);
            this.body.setImmovable(false);
        } else if (this.keys.up.isDown) {
            this.anims.play("forward" + this.number, true);
            this.body.setImmovable(false);
        } else if (this.keys.down.isDown) {
            this.anims.play("down" + this.number, true);
            this.body.setImmovable(false);
        } else {
            this.anims.stop();
            this.body.setImmovable(true);
        }

    }

    update() {
        if (this.alive) {
            this.keyHandler();
        }
    }

    dead() {
        if (!this.alive) {
            return;
        }
        this.alive = false;
        this.disableBody(true, true);
        var audio = new Audio('assets/oof.wav');
        audio.play();

    }

    dropsBomb() {
        new Bomb({ scene: this.scene, x: this.x, y: this.y }, this.power, this)
        this.bombs--;
    }

    addBomb() {
        this.bombs++;
    }

    addSpeed() {
        this.speed += 50;
    }
    addPower() {
        this.power++;
    }
    changeKeys() {
        this.keys.left = this.down;
        this.keys.up = this.right;
        this.keys.down = this.up;
        this.keys.right = this.left;
    }
    getHigh() {
        if (this.speed > 75) {
            this.speed -= 40;
        }

        this.scene.tweens.add({
            targets: this,
            alpha: 0.2,
            duration: 5000,
            ease: 'Back.easeOut',
            repeat: 0,
            onComplete: () => {
                this.getSober()
            }
        });
    }

    getSober() {
        if (this.speed > 75) {
            this.speed += 40;
        }
        this.alpha = 1;
    }

    reverse() {
        this.keys.left = this.left;
        this.keys.up = this.up;
        this.keys.down = this.down;
        this.keys.right = this.right;
    }

    ghost() {
        this.scene.tweens.add({
            targets: this,
            alpha: 0,
            duration: 15000,
            ease: 'Back.easeOut',
            repeat: 0,
            onComplete: () => {
                this.alpha = 1;
            }
        });
    }

}

class Bomb extends Phaser.Physics.Arcade.Sprite {
    constructor(args, power, player) {
        super(args.scene, args.x, args.y, 'bomb');
        args.scene.add.existing(this);
        args.scene.physics.world.enable(this);
        args.scene.bombs.add(this);
        this.x = this.center(args.x);
        this.y = this.center(args.y);
        this.player = player;
        this.power = power;
        this.body.immovable = true;
        this.setOrigin(0.5);
        this.anims.play("drop", true);
        this.on("animationcomplete", this.explode, this);
    }

    explode() {
        new Explode({ scene: this.scene, x: this.x, y: this.y }, this.power, this.player)
        this.destroy();
    }
    center(x) {
        x = x - 16;
        x = x / 32;
        x = Math.round(x);
        return x * 32 + 16;
    }
}

class PlayerKiller extends Phaser.Physics.Arcade.Sprite {
    constructor(args) {
        super(args.scene, args.x, args.y, args.name);
        args.scene.add.existing(this);
        args.scene.physics.world.enable(this);
        args.scene.pkArr.add(this);
        this.name = args.name;
        this.x = this.center(args.x);
        this.y = this.center(args.y);
        this.body.immovable = true;
        this.setOrigin(0.5);
        this.anims.play((args.name + "Anim"), true);
    }
    center(x) {
        x = x - 16;
        x = x / 32;
        x = Math.round(x);
        return x * 32 + 16;
    }
}

class Destructible extends Phaser.Physics.Arcade.Sprite {
    constructor(args) {
        super(args.scene, args.x, args.y, args.name);
        args.scene.add.existing(this);
        args.scene.physics.world.enable(this);
        args.scene.destructibles.add(this);
        this.name = args.name;
        this.x = this.center(args.x);
        this.y = this.center(args.y);
        this.body.immovable = true;
        this.setOrigin(0.5);
    }
    center(x) {
        x = x - 16;
        x = x / 32;
        x = Math.round(x);
        return x * 32 + 16;
    }
}

class Explode extends Phaser.GameObjects.Group {
    constructor(args, power, player) {
        super(args.scene);
        this.scene = args.scene;
        this.x = args.x;
        this.y = args.y;
        var centro = new Phaser.Physics.Arcade.Sprite(
            args.scene,
            args.x,
            args.y,
            "fire"
        );
        this.add(centro);
        this.power = power;
        args.scene.physics.world.enable(centro);
        args.scene.add.existing(this);
        args.scene.explosion.add(centro);
        centro.body.immovable = true;
        this.player = player;

        this.explosion(1, 0, 1);
        this.explosion(-1, 0, 1);
        this.explosion(0, 1, 1);
        this.explosion(0, -1, 1);

        this.scene.tweens.add({
            targets: this.getChildren(),
            alpha: '-=2',
            duration: 300,
            onComplete: () => {
                this.kill(),
                    this.player.addBomb();
            }
        });

    }
    kill() {

        while (this.getChildren().length) {
            this.getChildren().map(e => e.destroy());
        }
        this.destroy();
    }
    explosion(gx, gy, spread) {
        var x = this.x + 32 * gx;
        var y = this.y + 32 * gy;
        if (this.scene.map.getTileAtWorldXY(x, y)) return;
        var dx = Math.sign(gx);
        var dy = Math.sign(gy);

        var sprite = new Phaser.Physics.Arcade.Sprite(this.scene, x, y, "fire");

        this.add(sprite);
        this.scene.add.existing(sprite);
        this.scene.explosion.add(sprite);
        this.scene.physics.world.enable(sprite);
        sprite.body.immovable = true;

        if (spread < (this.power - 1)) {
            if (this.scene.physics.overlap(this, this.scene.destructibles)) {
                return;
            }
            this.explosion(gx + dx, gy + dy, spread + 1);
        } else {
            sprite.setFrame(0);
            if (gx > 0) sprite.flipX = true;
            if (gy > 0) sprite.angle = 90;
        }
    }
}

class PowerUp extends Phaser.Physics.Arcade.Sprite {
    constructor(args) {
        super(args.scene, args.x, args.y, args.name);
        args.scene.add.existing(this);
        args.scene.physics.world.enable(this);
        args.scene.powerUps.add(this);
        this.x = this.center(args.x);
        this.y = this.center(args.y);
        this.body.immovable = true;
        this.setOrigin(0.5);
    }
    center(x) {
        x = x - 16;
        x = x / 32;
        x = Math.round(x);
        return x * 32 + 16;
    }
    define(type) {
        this.type = type;
    }
    statsUp(player) {
        switch (this.type) {
            case "speed++":
                player.addSpeed();
                break;

            case "bomb++":
                player.addBomb();
                break;

            case "power++":
                player.addPower();
                break;

            case "drunk++":
                player.changeKeys();
                setTimeout(() => player.reverse(), 5000);
                break;
            case "high++":
                player.getHigh();
                break;
            case "ghost++":
                player.ghost();
                break;
        }
    }
}

class Level1 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level1', activated: true });
        this.player = Player;
        this.player2 = Player;
        this.powerUps = Phaser.GameObjects.Group;
        this.bombs = Phaser.GameObjects.Group;
        this.explosion = Phaser.GameObjects.Group;
        this.destructibles = Phaser.GameObjects.Group;
    }

    create() {

        this.map = this.make.tilemap({ key: "map1" });
        var spawnPoint = this.map.findObject("Spawns", obj => obj.name === "Spawn1");
        var spawnPoint2 = this.map.findObject("Spawns", obj => obj.name === "Spawn2");
        var tileset = this.map.addTilesetImage("Sprite001", "tiles1");
        var ground = this.map.createStaticLayer("Walkable", tileset, 0, 0);
        var walls = this.map.createStaticLayer("Walls", tileset, 0, 0);
        this.powerUps = this.add.group();
        walls.setCollisionByProperty({ collides: true });
        this.physics.world.bounds.width = ground.width;
        this.physics.world.bounds.height = ground.height;
        this.physics.world.setBoundsCollision(true, true, true, true);
        this.player1controller = this.input.keyboard.addKeys(
            {
                up: Phaser.Input.Keyboard.KeyCodes.W,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                right: Phaser.Input.Keyboard.KeyCodes.D
            });
        this.player2controller = this.input.keyboard.createCursorKeys();
        this.player = new Player({ scene: this, x: spawnPoint.x, y: spawnPoint.y, name: selectedP1 }, this.player1controller, Phaser.Input.Keyboard.KeyCodes.SPACE, 1);
        this.player2 = new Player({ scene: this, x: spawnPoint2.x, y: spawnPoint2.y, name: selectedP2 }, this.player2controller, Phaser.Input.Keyboard.KeyCodes.ENTER, 2);
        this.bombs = this.add.group();
        this.explosion = this.add.group();
        this.destructibles = this.add.group();
        this.animationHandler();
        for (let i = 1; i < 49; i++) {
            var destructibleSpawnPoint = this.map.findObject("Destructible", obj => obj.name === "Destructible" + i);
            this.destructible = new Destructible({ scene: this, x: destructibleSpawnPoint.x, y: destructibleSpawnPoint.y, name: 'wood' });
            this.physics.add.collider(this.destructible, this.player);
            this.physics.add.collider(this.destructible, this.player2);
            this.physics.add.collider(this.explosion, this.destructible, this.destroyDestructible, null, this);
        }
        this.physics.add.collider(this.player, walls);
        this.physics.add.collider(this.bombs, walls);
        this.physics.add.collider(this.bombs, this.bombs);
        this.physics.add.collider(this.bombs, this.player);
        this.physics.add.collider(this.bombs, this.player2);
        this.physics.add.collider(this.player, this.player2);
        this.physics.add.collider(this.player2, walls);
        var killPlayer = this.physics.add.collider(this.explosion, this.player, (explosion, player) => {
            this.player.dead();
            this.restartGame();
            this.physics.world.removeCollider(killPlayer);
        });

        var KillPlayer2 = this.physics.add.collider(this.explosion, this.player2, (explosion, player) => {
            this.player2.dead();
            this.restartGame();
            this.physics.world.removeCollider(KillPlayer2);
        });

        var max = 12;
        var min = 3;
        var numberOfPowerUps = Math.floor(Math.random() * (max - min + 1) + min);
        var powerUps = this.getPowerUpNumbers(numberOfPowerUps, max);

        for (let i = 0; i < numberOfPowerUps; i++) {
            var powerUpSpawnPoint = this.map.findObject("PowerUp", obj => obj.name === "PowerUp" + powerUps[i]);
            var type = Math.floor(Math.random() * 6) + 1;
            switch (type) {
                case 1:
                    type = "speed++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;

                case 2:
                    type = "bomb++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;

                case 3:
                    type = "power++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;
                case 4:
                    type = "drunk++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;
                case 5:
                    type = "high++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;
                case 6:
                    type = "ghost++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;
            }
        }


    }

    update() {
        if (this.player.alive) {
            this.player.body.setVelocity(0);
            this.player2.body.setVelocity(0);
            this.player2.update();
            this.player.update();
        }
    }

    getPowerUpNumbers(number, max) {
        var powerUpNumber = [];
        var i = 0;
        do {
            let random = Math.floor(Math.random() * (max - 1 + 1) + 1);
            if (!powerUpNumber.includes(random)) {
                powerUpNumber.push(random);
                i++;
            }
        }
        while (i < number);
        return powerUpNumber;
    }

    animationHandler() {
        var anims = this.anims;
        anims.create({
            key: 'left1',
            frames: this.anims.generateFrameNumbers(this.player.name, { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'right1',
            frames: this.anims.generateFrameNumbers(this.player.name, { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'down1',
            frames: this.anims.generateFrameNumbers(this.player.name, { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'forward1',
            frames: this.anims.generateFrameNumbers(this.player.name, { start: 9, end: 11 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'left2',
            frames: this.anims.generateFrameNumbers(this.player2.name, { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'right2',
            frames: this.anims.generateFrameNumbers(this.player2.name, { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'down2',
            frames: this.anims.generateFrameNumbers(this.player2.name, { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'forward2',
            frames: this.anims.generateFrameNumbers(this.player2.name, { start: 9, end: 11 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'drop',
            frames: this.anims.generateFrameNumbers("bomb", { start: 0, end: 5 }),
            frameRate: 5,
            repeat: 0
        });

        anims.create({
            key: 'lavaAnim',
            frames: this.anims.generateFrameNumbers('lava', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
    }
    destroyDestructible(explosion, destructible) {
        destructible.disableBody(true, true);

    }

    destroyPowerUp(powerUp, player) {
        powerUp.statsUp(player);
        powerUp.disableBody(true, true);
    }

    restartGame() {
        this.scene.start('endScreen');
    }
}

class Level2 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level2', activated: true });
        this.player = Player;
        this.player2 = Player;
        this.powerUps = Phaser.GameObjects.Group;
        this.bombs = Phaser.GameObjects.Group;
        this.explosion = Phaser.GameObjects.Group;
        this.destructibles = Phaser.GameObjects.Group;
        this.pkArr = Phaser.GameObjects.Group;
    }
    create() {

        this.map = this.make.tilemap({ key: "map2" });
        var spawnPoint = this.map.findObject("Spawns", obj => obj.name === "Spawn1");
        var spawnPoint2 = this.map.findObject("Spawns", obj => obj.name === "Spawn2");
        var tileset = this.map.addTilesetImage("Sprite002", "tiles2");
        var ground = this.map.createStaticLayer("Walkable", tileset, 0, 0);
        var walls = this.map.createStaticLayer("Walls", tileset, 0, 0);
        this.powerUps = this.add.group();
        walls.setCollisionByProperty({ collides: true });
        this.physics.world.bounds.width = ground.width;
        this.physics.world.bounds.height = ground.height;
        this.physics.world.setBoundsCollision(true, true, true, true);
        this.player1controller = this.input.keyboard.addKeys(
            {
                up: Phaser.Input.Keyboard.KeyCodes.W,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                right: Phaser.Input.Keyboard.KeyCodes.D
            });
        this.player2controller = this.input.keyboard.createCursorKeys();
        this.player = new Player({ scene: this, x: spawnPoint.x, y: spawnPoint.y, name: selectedP1 }, this.player1controller, Phaser.Input.Keyboard.KeyCodes.SPACE, 1);
        this.player2 = new Player({ scene: this, x: spawnPoint2.x, y: spawnPoint2.y, name: selectedP2 }, this.player2controller, Phaser.Input.Keyboard.KeyCodes.ENTER, 2);
        this.bombs = this.add.group();
        this.explosion = this.add.group();
        this.destructibles = this.add.group();
        this.pkArr = this.add.group();
        this.animationHandler();
        for (let i = 1; i < 53; i++) {
            var destructibleSpawnPoint = this.map.findObject("Destructible", obj => obj.name === "Destructible" + i);
            this.destructible = new Destructible({ scene: this, x: destructibleSpawnPoint.x, y: destructibleSpawnPoint.y, name: 'brickDestructible' });
            this.physics.add.collider(this.destructible, this.player);
            this.physics.add.collider(this.destructible, this.player2);
            this.physics.add.collider(this.explosion, this.destructible, this.destroyDestructible, null, this);
        }
        for (let i = 1; i < 26; i++) {
            var lavaSpawnPoint = this.map.findObject("Lava", obj => obj.name === "Lava" + i);
            this.lava = new PlayerKiller({ scene: this, x: lavaSpawnPoint.x, y: lavaSpawnPoint.y, name: 'lava' });
            var killPlayerLava = this.physics.add.collider(this.lava, this.player, (lava, player) => {
                this.player.dead();
                this.restartGame();
                this.physics.world.removeCollider(killPlayerLava);
            });

            var killPlayer2Lava = this.physics.add.collider(this.lava, this.player2, (lava, player2) => {
                this.player2.dead();
                this.restartGame();
                this.physics.world.removeCollider(killPlayer2Lava);
            });
        }
        this.physics.add.collider(this.player, walls);
        this.physics.add.collider(this.bombs, walls);
        this.physics.add.collider(this.bombs, this.bombs);
        this.physics.add.collider(this.bombs, this.player);
        this.physics.add.collider(this.bombs, this.player2);
        this.physics.add.collider(this.player, this.player2);
        this.physics.add.collider(this.player2, walls);

        var max = 10;
        var min = 3;
        var numberOfPowerUps = Math.floor(Math.random() * (max - min + 1) + min);
        var powerUps = this.getPowerUpNumbers(numberOfPowerUps, max);
        for (let i = 0; i < numberOfPowerUps; i++) {
            var powerUpSpawnPoint = this.map.findObject("PowerUp", obj => obj.name === "PowerUp" + powerUps[i]);
            var type = Math.floor(Math.random() * 6) + 1;
            switch (type) {
                case 1:
                    type = "speed++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;

                case 2:
                    type = "bomb++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;

                case 3:
                    type = "power++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;
                case 4:
                    type = "drunk++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;
                case 5:
                    type = "high++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;
                case 5:
                    type = "ghost++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;


            }

        }
        var killPlayer = this.physics.add.collider(this.explosion, this.player, (explosion, player) => {
            this.player.dead();
            this.restartGame();
            this.physics.world.removeCollider(killPlayer);
        });

        var killPlayer2 = this.physics.add.collider(this.explosion, this.player2, (explosion, player2) => {
            this.player2.dead();
            this.restartGame();
            this.physics.world.removeCollider(killPlayer2);
        });

    }

    update() {
        if (this.player.alive) {
            this.player.body.setVelocity(0);
            this.player2.body.setVelocity(0);
            this.player2.update();
            this.player.update();
        }
    }

    getPowerUpNumbers(number, max) {
        var powerUpNumber = [];
        var i = 0;
        do {
            let random = Math.floor(Math.random() * (max - 1 + 1) + 1);
            if (!powerUpNumber.includes(random)) {
                powerUpNumber.push(random);
                i++;
            }
        }
        while (i < number);
        return powerUpNumber;
    }

    animationHandler() {
        var anims = this.anims;
        anims.create({
            key: 'left1',
            frames: this.anims.generateFrameNumbers(this.player.name, { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'right1',
            frames: this.anims.generateFrameNumbers(this.player.name, { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'down1',
            frames: this.anims.generateFrameNumbers(this.player.name, { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'forward1',
            frames: this.anims.generateFrameNumbers(this.player.name, { start: 9, end: 11 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'left2',
            frames: this.anims.generateFrameNumbers(this.player2.name, { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'right2',
            frames: this.anims.generateFrameNumbers(this.player2.name, { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'down2',
            frames: this.anims.generateFrameNumbers(this.player2.name, { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'forward2',
            frames: this.anims.generateFrameNumbers(this.player2.name, { start: 9, end: 11 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'drop',
            frames: this.anims.generateFrameNumbers("bomb", { start: 0, end: 5 }),
            frameRate: 5,
            repeat: 0
        });

        anims.create({
            key: 'lavaAnim',
            frames: this.anims.generateFrameNumbers('lava', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

    }
    destroyDestructible(explosion, Destructible) {
        Destructible.disableBody(true, true);

    }

    destroyPowerUp(powerUp, player) {
        powerUp.statsUp(player);
        powerUp.disableBody(true, true);
    }

    restartGame() {
        this.scene.start('endScreen');
    }
}

class Level3 extends Phaser.Scene {

    constructor() {
        super({ key: 'Level3', activated: true });
        this.player = Player;
        this.player2 = Player;
        this.powerUps = Phaser.GameObjects.Group;
        this.bombs = Phaser.GameObjects.Group;
        this.explosion = Phaser.GameObjects.Group;
        this.destructibles = Phaser.GameObjects.Group;
        this.pkArr = Phaser.GameObjects.Group;
    }
    create() {

        this.map = this.make.tilemap({ key: "map3" });
        var spawnPoint = this.map.findObject("Spawns", obj => obj.name === "Spawn1");
        var spawnPoint2 = this.map.findObject("Spawns", obj => obj.name === "Spawn2");
        var tileset = this.map.addTilesetImage("Sprite001", "tiles1");
        var ground = this.map.createStaticLayer("Walkable", tileset, 0, 0);
        var walls = this.map.createStaticLayer("Walls", tileset, 0, 0);
        this.powerUps = this.add.group();
        walls.setCollisionByProperty({ collides: true });
        this.physics.world.bounds.width = ground.width;
        this.physics.world.bounds.height = ground.height;
        this.physics.world.setBoundsCollision(true, true, true, true);
        this.player1controller = this.input.keyboard.addKeys(
            {
                up: Phaser.Input.Keyboard.KeyCodes.W,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                right: Phaser.Input.Keyboard.KeyCodes.D
            });
        this.player2controller = this.input.keyboard.createCursorKeys();
        this.player = new Player({ scene: this, x: spawnPoint.x, y: spawnPoint.y, name: selectedP1 }, this.player1controller, Phaser.Input.Keyboard.KeyCodes.SPACE, 1);
        this.player2 = new Player({ scene: this, x: spawnPoint2.x, y: spawnPoint2.y, name: selectedP2 }, this.player2controller, Phaser.Input.Keyboard.KeyCodes.ENTER, 2);
        this.bombs = this.add.group();
        this.explosion = this.add.group();
        this.destructibles = this.add.group();
        this.pkArr = this.add.group();
        this.animationHandler();

        for (let i = 1; i < 37; i++) {
            var destructibleSpawnPoint = this.map.findObject("Destructible", obj => obj.name === "Destructible" + i);
            this.destructible = new Destructible({ scene: this, x: destructibleSpawnPoint.x, y: destructibleSpawnPoint.y, name: 'leaves' });
            this.physics.add.collider(this.destructible, this.player);
            this.physics.add.collider(this.destructible, this.player2);
            this.physics.add.collider(this.explosion, this.destructible, this.changeWater, null, this);
        }

        this.physics.add.collider(this.player, walls);
        this.physics.add.collider(this.bombs, walls);
        this.physics.add.collider(this.bombs, this.bombs);
        this.physics.add.collider(this.bombs, this.player);
        this.physics.add.collider(this.bombs, this.player2);
        this.physics.add.collider(this.player, this.player2);
        this.physics.add.collider(this.player2, walls);

        var max = 10;
        var min = 3;
        var numberOfPowerUps = Math.floor(Math.random() * (max - min + 1) + min);
        var powerUps = this.getPowerUpNumbers(numberOfPowerUps, max);
        for (let i = 0; i < numberOfPowerUps; i++) {
            var powerUpSpawnPoint = this.map.findObject("PowerUp", obj => obj.name === "PowerUp" + powerUps[i]);
            var type = Math.floor(Math.random() * 6) + 1;
            switch (type) {
                case 1:
                    type = "speed++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;

                case 2:
                    type = "bomb++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;

                case 3:
                    type = "power++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;
                case 4:
                    type = "drunk++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;
                case 5:
                    type = "high++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;
                case 6:
                    type = "ghost++";
                    this.powerUp = new PowerUp({ scene: this, x: powerUpSpawnPoint.x, y: powerUpSpawnPoint.y, name: type });
                    this.powerUp.define(type);
                    this.physics.add.overlap(this.powerUp, this.player, this.destroyPowerUp, null, this);
                    this.physics.add.overlap(this.powerUp, this.player2, this.destroyPowerUp, null, this);
                    break;
            }

        }
        var killPlayer = this.physics.add.collider(this.explosion, this.player, (explosion, player) => {
            this.player.dead();
            this.restartGame();
            this.physics.world.removeCollider(killPlayer);
        });

        var killPlayer2 = this.physics.add.collider(this.explosion, this.player2, (explosion, player2) => {
            this.player2.dead();
            this.restartGame();
            this.physics.world.removeCollider(killPlayer2);
        });
    }

    update() {
        if (this.player.alive) {
            this.player.body.setVelocity(0);
            this.player2.body.setVelocity(0);
            this.player2.update();
            this.player.update();
        }
    }

    getPowerUpNumbers(number, max) {
        var powerUpNumber = [];
        var i = 0;
        do {
            let random = Math.floor(Math.random() * (max - 1 + 1) + 1);
            if (!powerUpNumber.includes(random)) {
                powerUpNumber.push(random);
                i++;
            }
        }
        while (i < number);
        return powerUpNumber;
    }

    animationHandler() {
        var anims = this.anims;
        anims.create({
            key: 'left1',
            frames: this.anims.generateFrameNumbers(this.player.name, { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'right1',
            frames: this.anims.generateFrameNumbers(this.player.name, { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'down1',
            frames: this.anims.generateFrameNumbers(this.player.name, { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'forward1',
            frames: this.anims.generateFrameNumbers(this.player.name, { start: 9, end: 11 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'left2',
            frames: this.anims.generateFrameNumbers(this.player2.name, { start: 3, end: 5 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'right2',
            frames: this.anims.generateFrameNumbers(this.player2.name, { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'down2',
            frames: this.anims.generateFrameNumbers(this.player2.name, { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'forward2',
            frames: this.anims.generateFrameNumbers(this.player2.name, { start: 9, end: 11 }),
            frameRate: 10,
            repeat: -1

        });

        anims.create({
            key: 'drop',
            frames: this.anims.generateFrameNumbers("bomb", { start: 0, end: 5 }),
            frameRate: 5,
            repeat: 0
        });

        anims.create({
            key: 'waterAnim',
            frames: this.anims.generateFrameNumbers('water', { start: 0, end: 14 }),
            frameRate: 10,
            repeat: -1
        });
    }
    destroyDestructible(explosion, Destructible) {
        Destructible.disableBody(true, true);

    }

    destroyPowerUp(powerUp, player) {
        powerUp.statsUp(player);
        powerUp.disableBody(true, true);
    }

    changeWater(explosion, grass) {
        var x = grass.x;
        var y = grass.y;
        this.water = new PlayerKiller({ scene: this, x: x, y: y, name: 'water' });
        var killPlayerWater = this.physics.add.collider(this.water, this.player, (water, player) => {
            this.player.dead();
            this.restartGame();
            this.physics.world.removeCollider(killPlayerWater);
        });

        var killPlayer2Water = this.physics.add.collider(this.water, this.player2, (water, player2) => {
            this.player2.dead();
            this.restartGame();
            this.physics.world.removeCollider(killPlayer2Water);
        });

        grass.disableBody(true, true);


    }

    restartGame() {
        this.scene.start('endScreen');
    }
}

class Game extends Phaser.Game {
    constructor(config) {
        super(config);
    }
}

function main() {
    var config = {
        type: Phaser.AUTO,
        width: 480,
        height: 480,
        parent: "game-container",
        pixelArt: true,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        },
        scene:
            [Loader, MainMenu, SelectChar, selectLevel, endScreen, Credits, Opcoes, Level1, Level2, Level3]
        ,
        zoom: 1.5,

    };

    new Game(config);
}


