var level1 = {
    preload: function () {
        game.stage.backgroundColor = 'ffff99';

        //game.load.image('tree', 'img/plant.png');
        game.load.image('background', 'img/level.png');
        // game.load.image('tree1', 'img/cactus.png');
        game.load.image('left', 'img/arrowLeft.png');
        game.load.image('right', 'img/arrowRight.png');
        game.load.image('up', 'img/arrowUp.png');
        game.load.image('down', 'img/arrowDown.png');
        game.load.spritesheet('sprite', 'img/GUy.png', 10, 10);
        game.load.image('plat', 'img/box3.png');
        //game.load.image('coin', 'img/hud_coins.png');
        game.load.image('cloud', 'img/boxCoin.png');
        game.load.image('pp', 'img/plantPurple.png');
        game.load.image('heart1', 'img/hud_heartFull.png');
        game.load.image('heart2', 'img/hud_heartFull.png');
        game.load.image('heart3', 'img/hud_heartFull.png');



    },
    text: null,
    left: null,
    right: null,
    up: null,
    down: null,
    sprite: null,
    moveLeft: null,
    moveRight: null,
    moveUp: null,
    groupPlat: null,
    groupPP: null,
    groupHearts: null,
    groupClouds: null,
    groupTree: null,
    coins: 0,
    hp: 0,
    deaths: 0,
    heart1: null,
    heart2: null,
    heart3: null,
    hitWord: null,
    groupTree1: null,
    masTree: [200, 657, 1024, 1695, 2048, 3304, 3800],
    masTree1: [70, 407, 790, 1230, 1450, 2304, 2600, 3000],
    // mas: [400, 900, 1300, 1900, 2300, 2700, 3200, 3700],
    //mas2: [440, 380, 370, 350, 410, 400, 410, 390],
    mas: [0,0,700,700],
    mas2: [0,720,0,720],
        maspp: [600,550,10,1050],
        maspp2: [0,700,300,300],
    masc: [0, 0,1100,1100],
    masc2: [50, 450,50,450],
    //masText: ["Правильный ответ", "Неправильный ответ", "Правильный ответ", "Правильный ответ", "Правильный ответ", "Неправильный ответ", "Правильный ответ", "Правильный ответ"],
    //groupWords: null,

    create: function () {
        this.background = game.add.sprite(0, 0, "background");
        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.world.setBounds(0, 0, 1150, 800);
        this.groupWords = game.add.group();
        this.groupWords.enableBody = true;
        this.groupTree = game.add.group();
        this.groupTree1 = game.add.group();

        this.groupPlat = game.add.group();
        this.groupClouds = game.add.group();
        this.groupPlat.enableBody = true;
        this.groupClouds.enableBody = true;
        this.groupPP = game.add.group();
        this.groupPP.enableBody = true;
        this.groupHearts = game.add.group();
        this.groupHearts.enableBody = true;
        //this.heart1 = game.add.sprite(0, 0, 'heart1',);
        // this.heart2 = game.add.sprite(50, 0, 'heart2',);
        //this.heart3 = game.add.sprite(100, 0, 'heart3',);

        var style = {
            font: "bold 32px Arial",
            fill: "#fff",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };


        // text = game.add.text(0, 0, "Какой правильный ответ?", style);
        //text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

        /*for (var i = 0; i < this.mas.length; i++) {
            var rand = game.rnd.realInRange(2, 3);
            var rand2 = game.rnd.realInRange(0, 1);

            var style2 = {
                font: "bold 32px Arial",
                fill: "#fff",
                boundsAlignH: "center",
                boundsAlignV: "middle"
            };
        }
        /*for (var i = 0; i < this.masText.length; i++) {
            var q = game.add.text(level1.mas[i], level1.mas2[i] - 100, level1.masText[i], style2);
            this.groupWords.add(q);
            q.body.immovable = true;
        }*/

        for (var i = 0; i < level1.mas.length; i++) {
            var a = this.groupPlat.create(level1.mas[i], level1.mas2[i], 'plat');
            a.body.immovable = true;
            a.scale.setTo(1.5, 1);
            //a.visible=false;
            a.alpha=0;
        }
        
                for (var i = 0; i < 4; i++) {
                    var a = this.groupClouds.create(level1.masc[i],level1.masc2[i], 'cloud');
                    a.body.immovable = true;
                    a.scale.setTo(1, 4);
                    a.alpha=0;
                }
        for (var i = 0; i < 3; i++) {
            var a = this.groupHearts.create(0 + i * 10, 0, 'heart1');
            a.body.immovable = true;
            a.scale.setTo(1, 1);
        }
        
                for (var i = 0; i < 4; i++) {
                    var a = this.groupPP.create(level1.maspp[i],level1.maspp2[i], 'pp');
                    a.body.immovable = true;
                    a.scale.setTo(1, 1);
                }
                /*for (var i = 0; i < 6; i++) {
                    var a = this.groupCoins.create(level1.mas[i], level1.mas2[i]-100, 'plat');
                    a.body.immovable = true;
                    a.scale.setTo(1, 1);
                    }*/
        /* for (var i = 0; i < 6; i++) {
             var b = this.groupTree.create(level1.masTree[i], 530, 'tree');

             // b.scale.setTo(rand2, rand2);
             var c = this.groupTree1.create(level1.masTree1[i], 470, 'tree1');

             c.scale.setTo(1.8, 2);
         }*/


        this.left = game.add.sprite(0, 500, "left");
        this.up = game.add.sprite(700, 500, "up");
        this.down = game.add.sprite(600, 500, "down");
        this.right = game.add.sprite(100, 500, "right");
        this.sprite = game.add.sprite(0, 0, "sprite");
        this.sprite.scale.setTo(4, 8);

        game.physics.arcade.enable(this.sprite);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.enableBody = true;
        this.sprite.body.gravity.y = 0;

        this.left.inputEnabled = true;
        this.right.inputEnabled = true;
        this.up.inputEnabled = true;
        this.down.inputEnabled = true;

        this.left.events.onInputDown.add(this.moveLeft)
        this.left.events.onInputUp.add(this.moveStop)
        this.down.events.onInputDown.add(this.moveDown)
        this.down.events.onInputUp.add(this.moveStop)

        this.right.events.onInputDown.add(this.moveRight)
        this.right.events.onInputUp.add(this.moveStop)

        this.up.events.onInputDown.add(this.moveUp)
        this.up.events.onInputUp.add(this.moveStop)
        //this.sprite.animations.add('left', [0, 1, 2], 10, true);
        //this.sprite.animations.add('right', [4, 5, 6], 10, true);


        game.camera.follow(this.sprite);

        this.up.fixedToCamera = true;
        this.down.fixedToCamera = true;
        this.groupHearts.fixedToCamera = true;
        this.right.fixedToCamera = true;
        this.left.fixedToCamera = true;

    },
    moveLeft: function () {
        level1.sprite.body.velocity.x = -300;
        //level1.sprite.animations.play('left');
    },

    moveRight: function () {
        level1.sprite.body.velocity.x = 300;
        // level1.sprite.animations.play('right');
    },

    moveUp: function () {
        level1.sprite.body.velocity.y = -300;
        game.camera.y -= 4;
    },
    moveDown: function () {
        level1.sprite.body.velocity.y = 300;
        game.camera.y -= 4;
    },

    moveStop: function () {
        level1.sprite.body.velocity.setTo(0);
        level1.sprite.animations.stop();
        //level1.sprite.frame = 3;
    },
    update: function () {
        game.physics.arcade.collide(this.sprite, this.groupPlat);
        game.physics.arcade.collide(this.sprite, this.groupWords, this.check);
        game.physics.arcade.collide(this.sprite, this.groupClouds, this.checkk);
        game.physics.arcade.collide(this.sprite, this.groupPP, this.checkkk);
        if (level1.coins == 5) {
            alert("win");
        }
        if (level1.deaths >= 3) {
            alert("no win");
        }

    },

    check: function (a, b) {
        console.log(a, b);
        if (b.text == "Правильный ответ" && b.position.y < a.position.y) {
            console.log("1");
            b.kill();

        }
    },

    checkkk: function (a, b) {
        //console.log(a, b);
        console.log("2");
        level1.hp++;
        level1.groupHearts.children[level1.deaths].kill();
        level1.deaths++;
        b.kill();
        level1.hp++;
    }

};
