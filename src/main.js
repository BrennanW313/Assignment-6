class Scene1 extends Phaser.Scene {
  constructor() {
    super(Scene1.name);
  }
  preload ()
  {
      this.load.image('dumplings', 'assets/dumplings.jpg');
      this.load.image('EelBowl', 'assets/Eel Rice Bowl.jpg');
      this.load.image('curry', 'assets/katsu curry.jpg');
      this.load.image('ramen', 'assets/ramen.jpg');
      this.load.image('steak', 'assets/steak skewers.jpg');
  }
  create() {
    this.add.image(400, 300, 'dumplings');

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start(Scene2.name);
    });

    
  }
}

class Scene2 extends Phaser.Scene {
  constructor() {
    super(Scene2.name);
  }

  create() {
    this.add.image(400, 300, 'EelBowl');

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start(Scene3.name);
    });

    
  }
}

class Scene3 extends Phaser.Scene {
  constructor() {
    super(Scene3.name);
  }

  create() {
    this.add.image(400, 300, 'curry');

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start(Scene4.name);
    });

    
  }
}

class Scene4 extends Phaser.Scene {
  constructor() {
    super(Scene4.name);
  }

  create() {
    this.add.image(400, 300, 'ramen');

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start(Scene5.name);
    });

    
  }
}

class Scene5 extends Phaser.Scene {
  constructor() {
    super(Scene5.name);
  }

  create() {
    this.add.image(400, 300, 'steak');

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start(Scene1.name);
    });

    
  }
}

const gameConfig = {
  type: Phaser.CANVAS,
  pixelArt: true,
  scale: {
    parent: 'game-container',
    width: 800,
    height: 600,
  },
  backgroundColor: '#5c5b5b',
  scene: [Scene1, Scene2, Scene3, Scene4, Scene5],
};

const game = new Phaser.Game(gameConfig);
