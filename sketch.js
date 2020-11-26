var ball;
var database,position;


function setup(){

database = firebase.database()


    createCanvas(500,500);
    ball = createSprite(200,200,10,10);
    ball.shapeColor = "red";

    var ballposition = database.ref("ball/position")
    ballposition.on("value",readPosition)


}

function draw(){
    background("white");

if(position !== undefined){

    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}



function readPosition(data){

position = data.val()
ball.x = position.x
ball.y = position.y


}

function writePosition(x,y)
{

database.ref("ball/position").set({
    "x":position.x+10,
    "y":position.y+10
})





}