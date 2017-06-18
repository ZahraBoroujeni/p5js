var xArray= new Array;
var yArray = new Array;
 
var num=20;
function setup() { 
  createCanvas(400, 400);
	
frameRate(10);
	
for (var i=0;i<num;i++)
	{
		var x = random(0, 400);
		append(xArray, x);
	}
	print(xArray.length);
	for(var n=0;n<num;n++)	
			yArray[n]=random(0,20);;
} 
 
function draw() { 
  background(10);
	var j=0;
	var y;
	y=0;
	
	while ((y<400)&&(j*num<xArray.length))
	{
		for (var i=0;i<num;i++)
		{
			stroke(255);
			line(xArray[xArray.length-1-(i+(num*j))],yArray[i],xArray[xArray.length-1-(i+(num*j))],yArray[i]+5);	
		}
		j+=1;
		for(var n=0;n<num;n++)
				yArray[n]+=41-0.2*(height/2-abs(height/2-yArray[n]));
		if (j*num<xArray.length)
    	y+=41-0.2*(height/2-abs(height/2-y));
	}
	if (y>400)
		xArray.splice(0,num);
	for (var m=0;m<num;m++)
	{
		append(xArray, random(0, 400));
		for(var nn=0;nn<num;nn++)	
			yArray[nn]=random(0,20);
	}
}
 
