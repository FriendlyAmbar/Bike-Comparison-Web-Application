var x='f';
function image(){
var y = document.getElementById('pic');
if(x=='f')
{
y.src ='royal-enfield.png';
x='a';
}else if(x=='a')
{
y.src ='harley1.png';
x='b';
}
else if(x=='b')
{
	y.src ='street7502.png';
	x='c';
}
else if(x=='c')
{
	y.src ='street7502.png';
	x='d';
}
else if(x=='d')
{
	y.src ='iron8836.png';
	x='e';
}
else if(x=='e')
{
	y.src ='fatbob.png';
	x='g';
}
else if(x=='g')
{
	y.src ='hyosung1.png';
	x='h';
}
else if(x=='h')
{
	y.src ='indianscout2.png';
	x='i';
}
else if(x=='i')
{
		y.src ='chief1.png';
		x='j';
}
else
{
	y.src='scout.png';
	x='f';
}
}
setInterval('image()',40000);

