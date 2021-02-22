const paintWall = function(){
    console.log(`The wall has been painted red`);
}
paintWall()

const paintWall1 = function(color){
    console.log(`The wall has been painted ${color}`);
}
paintWall1('red');
paintWall1('green');
paintWall1();

const paintWall2 = function(side, color){
    console.log(`The ${side} wall has been painted ${color}`);
}
paintWall2('north','red');
paintWall2('green','south');
paintWall2();