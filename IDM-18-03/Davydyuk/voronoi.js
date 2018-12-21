var metrics = 1; //1-Евклидова, 2-Манхэттенская, 3-Минковского
 var numPoints = 0;
 var X=new Array(), Y=new Array(), C=new Array(); 
 var canvas=document.getElementById("diagramCanvas");
 var context=canvas.getContext("2d");

 function randomNumber (max) { //Случайное число [0;max-1]
  return Math.floor(Math.random()*max)
 }

 function randomColor() { //Случайный цвет с интенсивностью компонент не ниже 33hex
  return "#"+
   ("00"+(51+randomNumber(205)).toString(16)).slice(-2)+
   ("00"+(51+randomNumber(205)).toString(16)).slice(-2)+
   ("00"+(51+randomNumber(205)).toString(16)).slice(-2)
 }

 function Metric (x, y) { //Выбор метрики
  if (metrics==1) { return Math.sqrt(x*x + y*y); }
  if (metrics==2) { return Math.abs(x) + Math.abs(y); }
  if (metrics==3) { return(Math.pow(Math.pow(Math.abs(x),3) + Math.pow(Math.abs(y),3),0.33333)); }
 }

 function Diagram() { //Диаграмма
  var width=canvas.width, 
      height=canvas.height;
  var dist1=dist0=j=0, 
      width1=width-2, 
      height1=height-2;
  context.fillStyle="white"; 
  context.fillRect(0,0,width,height);
  for (var y=0; y<height1; y++) {
   for (var x=0; x<width1; x++) {
    dist0=Metric (height1,1); 
    j = -1;
    for (var i=0; i<numPoints; i++) {
     dist1 = Metric (X[i]-x, Y[i]-y);
     if (dist1 < dist0) { dist0=dist1; j=i; }
    }
    context.fillStyle=C[j]; 
    context.fillRect(x,y,1,1);
   }
  }
  context.fillStyle="black";
  for (var i=0; i<numPoints; i++) {
   context.fillRect (X[i], Y[i], 3, 3);
  }
 }

 canvas.onclick = function (event) { //Обработчик кликов
  var x = event.clientX - canvas.offsetLeft,
      y = event.clientY - canvas.offsetTop;
  for (var i=0; i<X.length; i++) {
   if (Math.sqrt(Math.pow(X[i]-x,2)+Math.pow(Y[i]-y,2))<5) {
    context.fillStyle="red";
    context.fillRect (X[i]-2, Y[i]-2, 7, 7);
    context.fillStyle="black";
    context.fillRect (X[i], Y[i], 3, 3);
    return; //Подчеркнём, что "слишком близко" и не добавляем
   }
  }
  X[numPoints] = x;
  Y[numPoints] = y;
  C[numPoints] = randomColor();
  numPoints++;
  Diagram();
 }
