/*declaring functions & canvas id */
var cvs=document.getElementById("canvas");    //declaring "cvs" variable to select canvas id
var ctx=cvs.getContext("2d");   //getcontext is used to add properties related to drawing and we link to canvas variable


// load images
var bird= new Image();  // creating an object image for all images
var bg= new Image();
var fg= new Image();
var pipeNorth= new Image();
var pipeSouth= new Image();

// getting source of images
bird.src="images/bird.png";
bg.src="images/bg.png";
fg.src="images/fg.png";
pipeNorth.src="images/pipeNorth.png";
pipeSouth.src="images/pipeSouth.png";

// declaring varilables
var gap=85;
var constant=pipeNorth.height+gap;   //constant=pipeheight +gap

//declaring bird x and y position
var bX=10;
var bY=150;
var gravity= 1;   // declaring bird gravity

// creating action when button is pressed
document.addEventListener("keydown",moveUp);
function moveUp(){
    bY -=24;  //decrement y position by 20
}
//To set a lot of pipes
var pipe = [];     //arrays r used cause they r storage containers and can hold lot of other elements too

pipe[0] = {
    x : cvs.width,
    y : 0
};

//drawing the images
function draw(){

    ctx.drawImage(bg,0,0);  //background

   for(var i=0; i< pipe.length; i++){   //use for loop to draw pipes & to be repeated

    /*ctx.drawImage(pipeNorth,100,0);  //pipenorth
    ctx.drawImage(pipeSouth,100,0+constant);   //pipesouth*/

    ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y); //changing "x" position to i to every pipe & aslo "y"
    ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);  //changing "x" position to i to every pipe & aslo "y"

    pipe[i].x--;  // to move all the pipes towars left side or in "x" position

    if(pipe[i].x==130){    // adding multiple no.of pipes
        pipe.push({
            x:cvs.width,   // all pipes have same width
            y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height /*math.random gives numbers b/w 0&1
                                                                            math.floor returns an integer
                                                                            loop condiotin=> if returns "0" then loop is paused
                                                                            if returns"1" then v get pipeNorth.height
                                                                            if we subtract with pipeNorth.height
                                                                            then we get numbrs b/w 0&1 and this way the loop works */
        });
    }
       
   }

    ctx.drawImage(fg,0,cvs.height - fg.height);  //to set the fg to ground orelse fg will be in top position 
    ctx.drawImage(bird,bX,bY);
    bY += gravity;  //increment gravity in y position
    requestAnimationFrame(draw);   // call back function to run the images continuously


}
draw();

//skipped the game over rules 