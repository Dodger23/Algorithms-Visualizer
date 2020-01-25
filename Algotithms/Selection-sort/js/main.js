


var values = []  , sorter ,   flag = 0 ,sliderValue ;

var colorYellow = '#FFC300' , colorGreen ='#0BBA00' , colorBlue = '#0093FF' , colorRed = '#EA0000' ;

class bar
{
    
  constructor(x , y, width ,  height, fillValue)
  {
      var x; 
    this.x = x; 
    this.y =y ; 
    this.width = width ; 
    this.height = height ; 
    this.fillValue = fillValue  ; 
  }
  show()
  {
    fill(this.fillValue );
    stroke(162, 162, 162, 1);
    rect(this.x , this.y , this.width , this.height ,0 , 0 , 20 , 20 )  ;
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
  var padding = 290 , size = 50 , margin =5 ;
  for(let i=1;i<50;i++)
  {
    let e = new bar( i* ( (windowWidth - padding) / size + margin), height , ( (windowWidth - padding)  / size) , -int(random(1, height)) ,colorYellow )  
    values.push(e) ;
  }
    sorter =  selectionSort(values) ;
}

function draw()
{
    sliderValue = int(document.getElementById('slider').value);
    frameRate(sliderValue);
    background(51) ;
    
    for (let i = 0; i < values.length; i++)
        values[i].show() ;

    if(flag===1)
    {
        if (sorter.next().done)
        {
            frameRate(sliderValue) ;
             background(51); 
            for (let i = 0; i < values.length; i++) 
            {
                values[i].fillValue = colorGreen;
                values[i].show();
            }
            document.getElementById('startToggle').innerHTML = 'Refresh' ;
            flag = 2 ; 
            noLoop();
        }
    }
}



function* selectionSort(values)
{
    var old ; 
    var len = values.length ;
    for (var i = len-1; i >0; i--)
    {
        var currentMaxIndex = 0;
        values[currentMaxIndex].fillValue = colorGreen ; 
        for (var j = 1; j <= i; j++)
        {
            yield;
            values[currentMaxIndex].fillValue = colorGreen ; 
            values[j].fillValue = colorBlue ; 
            if (values[j].height < values[currentMaxIndex].height )
            {
                values[j].fillValue = colorRed ;
                old = currentMaxIndex ; 
                currentMaxIndex = j;
                values[old].fillValue = colorYellow ;
                for (var z = 0; z <j; z++)
                    values[z].fillValue = colorYellow ;  
            }
        }
        values[currentMaxIndex].fillValue = colorGreen;
        for (var z = 0; z < j-1; z++)
                values[z].fillValue = colorYellow ;
        
        
        if (currentMaxIndex !== i)
        {
           
                [values[i].height , values[currentMaxIndex].height] = [values[currentMaxIndex].height , values[i].height];
               values[i].fillValue = colorGreen ;
                values[currentMaxIndex].fillValue = colorYellow;
        }
    }
}
