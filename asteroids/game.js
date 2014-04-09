(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function(ctx) {
    this.ctx = ctx;
    this.asteroids = [];
    this.ship = new Asteroids.Ship(Game.DIM_X, Game.DIM_Y);
  };

  Game.DIM_X = 800; Game.DIM_Y = 800; Game.FPS = 60;

  Game.prototype.addAsteroids = function(numOfAsteroids){
    for (var i = 0; i < numOfAsteroids; i++) {
      this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y));
    };
  };

  Game.prototype.draw = function(){
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    };
    this.ship.draw(this.ctx);
  };

  Game.prototype.move = function(){
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    };
    this.ship.move();
  };

  Game.prototype.step = function(){
    this.move();
    this.draw();
    this.checkCollisions();
  };

  Game.prototype.start = function(numberOfAsteroids){
    this.addAsteroids(numberOfAsteroids);
    this.bindKeyHandlers();
    var stepInterval = setInterval(this.step.bind(this), 1000 / this.FPS);
  };

  Game.prototype.checkCollisions = function(stepInterval) {
    for (var i = 0; i < this.asteroids.length; i++) {
      // console.log("this.asteroids[i].pos: " + this.asteroids[i].pos);
      // console.log("this.ship.pos: " + this.ship.pos);
      if (this.asteroids[i].isCollidedWith(this.ship)){
        // alert('Game over!');
        // this.stop(stepInterval);
      };
    };
  };

  Game.prototype.stop = function(stepInterval) {
    clearInterval(stepInterval);
  };



  Game.prototype.bindKeyHandlers = function() {
    key("a", function(){ this.ship.power([-1, 0]) });
    key("d", function(){ this.ship.power([1, 0]) });
    key("w", function(){ this.ship.power([0, -1]) });
    key("s", function(){ this.ship.power([0, 1]) });
  }

})(this);