var colors="d496a7-9d695a-78e0dc-8eedf7-2f2504-594e36-7e846b-a5ae9e-d0ddd7-d496a7--dbf9f4-e6fdff-d9d7dd-b07bac-5f7367-564787-dbcbd8-f2fdff-9ad4d6-101935-c1aba6-533b4d-f564a9-faa4bd-fae3c6-bbdbb4-fcf0cc-4392f1-ece8ef-e3ebff-e7f0ff-dc493a".split("-").map(a=>"#"+a)

function setup() {
	createCanvas(2200, 730);
	// createCanvas(1500, 800);
	background(100);
	changeLightColor()

}


function draw() {
	
	translate(width/2,height/2);
	rectMode(CENTER);
	
	background("#f2e9e4")
	fill(255)
	rect(-150,0,400,600,20)
	fill(colors[25])
	//head
	rect(-150,-140,120,100,20);
	//eyes
	fill(0)
	rect(-150,-145,80,25,5)
	if(frameCount%100==0){
		fill(200)
		rect(-170,-145,20,5,5)
		rect(-130,-145,20,5,5)
	}else{
		fill(200)
		rect(-170,-145,20,20,5)
		rect(-130,-145,20,20,5)
	}
// 	fill(0)
// 	rect(-30,-140,30,20)
// 	rect(30,-140,30,20)
// 	push()
// 	drawingContext.shadowColor=lightColor;
// 	drawingContext.shadowBlur=30;
// 	fill(lightColor)
	
// 	rect(-30,-140,25,15)
// 	rect(30,-140,25,15)
// 	pop()
// 	rect(0,-150,120,2)
	// circle(-30,-200,25)
	// circle(30,-200,25)
	// fill(255)
	// circle(-30,-200,15)
	// circle(30,-200,15)
	//眉毛

	// push()
	// 		fill(colors[16])
	// 	rotate(0.3+sin(frameCount/30)/10)
	// 	rect(-330,-180,40,8);
	// pop()
	// push()
	// 		fill(colors[17])
	// 	rotate(-0.25+sin(frameCount/50)/10)
	// 	rect(-270,-180,40,8);
	// pop()
	//mouth
	// fill(colors[3])
	// rect(0,-150,50,20)
	//ears
	fill(colors[18])
	rect(-215,-140,10,25,5)
	rect(-85,-140,10,25,5)
	fill(255)
	rect(-225,-140,8,15,5)
	rect(-75,-140,8,15,5)
	//neck
	fill(colors[5])
	rect(-150,-85,15,10)
	
	fill(colors[6])
	
	rect(-150,-75,15,10)
	
	
	
	//body
	fill(colors[7])
	rect(-150,-5,120,130,20)
	fill(colors[8])
	rect(-180,-50,10,40,5)
	rect(-120,-50,10,40,5)
	rect(-150,5,120,110,0,0,20,20)
	rect(-150,25,80,50,0,0,20,20)
		//leg
	fill(colors[16])
	rect(-175,70,10,20)
	rect(-125,70,10,20)
	fill(colors[25])
	rect(-175,150,30,140,5)
	rect(-125,150,30,140,5)
	fill(colors[18])
	rect(-175,225,20,10)
	rect(-125,225,20,10)
	fill(colors[19])
	rect(-175,245,40,30,5)
	rect(-125,245,40,30,5)
	//equipment
	fill("#bc6c25")
	rect(-150,70,250,10)
	rect(-25,70,10,60,10)
	rect(-5,50,30,10)
	rect(-5,90,30,10)
	rect(10,70,15,60,10)
	fill("#d9d9d9")
	rect(-305,70,60,50,5)
	//shoulder
	
	fill(colors[8])
	rect(-220,-50,20,10)
	rect(-80,-50,20,10)
	fill(colors[9])
	circle(-240,-50,25)
	circle(-60,-50,25)
	fill(colors[10])
	circle(-240,-50,10)
	circle(-60,-50,10)
	fill(colors[11])
	rect(-240,-30,10,20)
	rect(-60,-30,10,20)
	fill(colors[12])
	rect(-240,15,20,80,5)
	rect(-60,15,20,80,5)
	fill(colors[13])
	rect(-240,60,10,10)
	rect(-60,60,10,10)
	fill(colors[14])
	rect(-230,70,10,10)
	rect(-250,70,10,10)
	fill(colors[15])
	rect(-230,80,10,20)
	rect(-250,80,10,20)
	fill(colors[14])
	rect(-70,70,10,10)
	rect(-50,70,10,10)
	fill(colors[15])
	rect(-70,80,10,20)
	rect(-50,80,10,20)

	
	//mouth
	stroke(0)
	strokeWeight(5);
	fill(100)
	rect(-150,-110,60,25,0,0,10,10)
	fill("red")
	arc(-150,-100,30,20,PI,0,OPEN)
	fill(255)
	rect(-160,-115,10,10)
	push()
	noStroke()
	circle(-145,-103,5)
	pop()
	// arc(0, -115, 60, 40, 0, PI, CHORD)
	// curve(-80,-150,-30,-120,-30,-90,-80,-60)
	// stroke(0)
	// strokeWeight(5);
	// curve(-80,-130,-20,-100,30,-100,80,-130)
	//equipment
	fill(150)
	rect(-125,-205,30,30,15,15,0,0)
	rect(-175,-205,30,30,15,15,0,0)
	push()
	fill(255)
	noStroke()
	rect(-125,-200,15,15,15,15,0,0)
	rect(-175,-200,15,15,15,15,0,0)
	pop()
	// arc(20,-190,30,40, PI,0, CHORD)
	//heart
	
	fill(lightColor)
	circle(-150,-20,20)
	
	
	
	//text
	fill(lightColor)
	textSize(20)
	let text1='Different Colors';
	text(text1,0,-150)
	push()
	strokeWeight(2)
	fill(0)
	line(-5,-155,0,-150)
	line(-5,-155,-60,-5)
	line(-5,-155,-120,90)
	line(-5,-155,-100,-60)
	line(-5,-155,-120,250)
	pop()
	
	fill(lightColor)
	textSize(20)
	let text2='Different Emoticon';
	text(text2,-350,-250)
	push()
	strokeWeight(2)
	fill(0)
	line(-250,-230,-180,-120)
	pop()
	
	fill(lightColor)
	textSize(20)
	let text3='Different Clothes';
	text(text3,0,0)
	push()
	strokeWeight(2)
	fill(0)
	line(-10,-5,0,-5)
	pop()
	
	fill(lightColor)
	textSize(20)
	let text4='Different Equipments';
	text(text4,-450,-50)
	push()
	strokeWeight(2)
	fill(0)
	line(-350,-40,-300,30)
	line(-350,-90,-200,-190)
	pop()
	
	fill(lightColor)
	textSize(20)
	let text5='Different Effect';
	text(text5,-30,-220)
	
	push()
	strokeWeight(2)
	fill(0)
	line(-40,-225,0,-180)
	line(-40,-225,0,-160)
	line(-40,-225,-135,-30)
	pop()
	
	
	
	
	if(frameCount%20==0){
		changeLightColor()
	}
}


function mousePressed(){
	changeLightColor()
}
function changeLightColor(){
	lightColor=color(random([
		"#7FFFD4",
		"#7FFF00",
		"#008B8B",
		"#9932CC",
		"#FFB6C1",
		"#000080",
		"#8B4513"
	]))
}
