(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function() {
    this.RADIUS = 5;
    this.COLOR = 'red';
    this.pos = [
    Asteroids.Game.DIM_X / 2 - this.RADIUS,
    Asteroids.Game.DIM_Y / 2 - this.RADIUS
    ]

    Asteroids.MovingObject.call(this, this.pos, [0,0], this.RADIUS, this.COLOR);
  }

  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

})(this);