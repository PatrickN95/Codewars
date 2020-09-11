
function Player(){}

Player.prototype.firstmove = function(cakes){
  if (cakes > 2 && cakes % 4 != 2)
    return true;
  return false;
}
Player.prototype.move = function(cakes, last){
  return cakes % 4 < 3 ? 3 : 1;
}