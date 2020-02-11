

var values = [] ,   flag = 0 ,sliderValue  , sorter , sorter2 , index =0 ;
DFS = [0,1,3,4,2,5,6] ;
var colorYellow = '#FFC300' , colorGreen ='#0BBA00' , colorBlue = '#0093FF' , colorRed = '#EA0000' , textColor = '#515151';
var chars = ['A', 'B', 'C' , 'D', 'E' , 'F' , 'G' ];

class Nodes
{
    
  constructor(x , y, width ,  height, fillValue , text )
  {
    this.x = x; 
    this.y =y ; 
    this.width = width ; 
    this.height = height ; 
    this.fillValue = fillValue  ;
    this.text = text ; 
  }
  
  show()
  {
    
    
    fill(this.fillValue );
    ellipse(this.x , this.y , this.width , this.height )  ;
    fill(255);
    textAlign(CENTER, CENTER) ;
    textSize(40);
    text(this.text , this.x , this.y) ;
  }
}



function startAndStop() // to start, pause or resume the algorithm
{ 
    let btn = document.getElementById('startToggle') ;
    
    if(flag===1)
    {
        btn.innerHTML= 'Start' ;
        btn.classList.remove('btn-danger');
        btn.classList.add('btn-success');
        flag = 0 ; 
    }
    else if(flag===0)
    {
        
        btn.innerHTML= 'Pause'  ;
        btn.classList.remove('btn-success');
        btn.classList.add('btn-danger');
        flag = 1; 
    }
    else //When the flag is 2 that means the algorithms is finished and the user pressed the refresh button 
    {
        document.location.reload();
    }
        
}

function setup() 
{ 
  var myCanvas = createCanvas(windowWidth - 17, 500);
  myCanvas.parent("cont");
  background(51);
  let x = (windowWidth -17 )/2 , y = 100 , margin = 200 ;
    var k =0 ;
    for(i=1;i<=4;i*=2)
    {
        for(j=0;j<i;j++)
        {
            if(i==4)
            {
                x+=50;
                margin = 50;
            }
            values.push(new Nodes(x,y, 70,70,colorYellow, chars[k] ));
            k++;
            x+=margin;
        }
        x-= (i+0.5)*margin;
        margin/=i;
        y+=100;
    }
}
function edges(lineIndex)
{
    for(i=0;i<3;i++)
    {
        line(values[i].x, values[i].y,values[lineIndex].x,values[lineIndex].y) ;
        lineIndex++;
        line(values[i].x, values[i].y,values[lineIndex].x,values[lineIndex].y) ;
        lineIndex++;
    }
}
function draw()
{
    sliderValue = int(document.getElementById('slider').value);
    frameRate(sliderValue);
    background(51) ;
    stroke(255);
    edges(1)
    noStroke();
    if(flag===1)
    {
        values[DFS[min(index,6)]].fillValue= colorGreen ;
        index++;
        if(index==7)
        {
            document.getElementById('startToggle').innerHTML = 'Refresh' ;
            flag = 2 ; 
        }
    }
    for(i=0;i<values.length;i++)
    {
        values[i].show();
    }
    
}

