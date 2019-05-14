var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "game-container",
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
const game = new Phaser.Game(config);


function preload ()
{
    this.load.spritesheet('player',"assets\Sprite-0001.png");
    this.load.image("tiles","assets\Sprite002.png");
    this.load.tilemapTiledJSON("map","assets\mapa1.json");
}

function create ()
{
    const map = this.make.tilemap({key: "map"});

    const tileset = map.addTilesetImage("Sprite002","tiles");

    const Base = map.createStaticLayer("Base",tileset,0,0);
    const Normal = map.createStaticLayer("Normal",tileset,0,0);

    Normal.setCollisionByProperty({ collides : true});
    const spawnPoint = map.finObject("Spawn", obj => obj.name === "Spawn1");
    player = this.physics.add.sprite(spawnPoint.x,spawnPoint.y,"player");

    this.physics.add.collider(player, worldLayer);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumber("player",{start:3, end: 5}),
        frameRate:10,
        repeat: -1

    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumber("player",{start:6, end: 8}),
        frameRate:10,
        repeat: -1

    });

    this.anims.create({
        key: 'forward',
        frames: this.anims.generateFrameNumber("player",{start:0, end: 2}),
        frameRate:10,
        repeat: -1

    });

    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumber("player",{start:9, end: 11}),
        frameRate:10,
        repeat: -1

    });


}

function update ()
{
    const speed= 175;
    const prevVelocity = player.body.velocity.clone();

    player.body.setVelocity(0);

    //horizontal
    if (cursors.left.isDown) {
        player.body.setVelocityX(-speed);
      } else if (cursors.right.isDown) {
        player.body.setVelocityX(speed);
      }
    
      // Vertical movement
      if (cursors.up.isDown) {
        player.body.setVelocityY(-speed);
      } else if (cursors.down.isDown) {
        player.body.setVelocityY(speed);
      }

      player.body.velocity.normalize().scale(speed);

      if (cursors.left.isDown) {
        player.anims.play("left", true);
      } else if (cursors.right.isDown) {
        player.anims.play("right", true);
      } else if (cursors.up.isDown) {
        player.anims.play("forward", true);
      } else if (cursors.down.isDown) {
        player.anims.play("down", true);
      } else {
        player.anims.stop();
}
}