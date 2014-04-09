(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Game = Asteroids.Game = function(ctx) {
    this.ctx = ctx;

    this.DIM_X = 800;
    this.DIM_Y = 800;
    this.asteroids = [Asteroids.Asteroid.randomAsteroid(this.DIM_X, this.DIM_Y)];
    this.FPS = 60;
  };

  Game.prototype.addAsteroids = function(numOfAsteroids){
    for (var i = 0; i < numOfAsteroids; i++) {
      this.asteroids.push(Asteroids.Asteroid.randomAsteroid());
    };
  };

  Game.prototype.draw = function(){
    this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].draw(this.ctx);
    };
  };

  Game.prototype.move = function(){
    for (var i = 0; i < this.asteroids.length; i++) {
      this.asteroids[i].move();
    };
  };

  Game.prototype.step = function(){
    this.move();
    this.draw();
  };

  Game.prototype.start = function(){
    var stepInterval = setInterval(this.step.bind(this), 1000 / this.FPS);
  };

})(this);