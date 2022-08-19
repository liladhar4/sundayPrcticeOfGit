Solution:
let length = 24;
let breadth = 8;
let thickness = 0.6;
let brick_volume = 24*12*8;
let mortar_percent = 15;
let wall_volume = length * breadth * thickness;
let no_bricks = Math.ceil(((100 - mortar_percent) / 100 ) * wall_volume * (
    100*100*100 )/ brick_volume) ;
    console.log("Number of bricks needed to construct the wall is: ",no_bricks);