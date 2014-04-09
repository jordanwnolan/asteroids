(function(root){
  var Asteroids = root.Asteroids = (root.Asteroids || {});


  var Asteroid = Asteroids.Asteroid = function(pos, vel){

    this.RADIUS = 2;
    this.COLOR = "white";

    Asteroids.MovingObject.call(this, pos, vel, this.RADIUS, this.COLOR);

  };

  Asteroid.randomAsteroid = function(dimX, dimY){

    var randomX = Math.random() * dimX;
    var randomY = Math.random() * dimY;

    var randomVec = function(){
      var randomX = (((Math.random() * 4) + 1) / 100) * dimX;
      var randomY = (((Math.random() * 4) + 1) / 100) * dimY;

      return [randomX, randomY];
    };

    return new Asteroid([randomX, randomY], randomVec());
  };

  Asteroid.inherits(Asteroids.MovingObject);

})(this);