


var values = []  , sorter ,   flag = 0 ,sliderValue ;



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
    else //When the flag is 2 that means the algorithms has finished and the user pressed the button 
    {
        document.location.reload();
    }
        
}


// 0BBA00 

function setup() 
{ 
  var myCanvas = createCanvas(windowWidth - 17, 500);
    myCanvas.parent("cont");
  background(51);
  for(let i=1;i<50;i++)
  {
    let e = new bar( i* ( (windowWidth - 290) / 50 + 5), height , ( (windowWidth - 290)  / 50) , -int(random(1, height)) , '#FFC300   '  )  
    values.push(e) ;
  }
    sorter =  bubbleSort() ;
}

function draw()
{
    sliderValue = int(document.getElementById('slider').value);
    frameRate(sliderValue);
    background(51) ;
    
    
    for (let i = 0; i < values.length; i++)
    {
        values[i].show() ;
	}
    
    
    if(flag===1)
    {
        if (sorter.next().done)
        {
            frameRate(sliderValue) ;
            for (let i = 0; i < values.length; i++) 
            {
                values[i].yellow() ;
                values[i].show();
            }
            document.getElementById('startToggle').innerHTML = 'Refresh' ;
            flag = 2 ; 
            noLoop();
        }
      }
}

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
    
    green()
    {
        this.fillValue = '#0BBA00';
    }
    
    yellow()
    {
        this.fillValue = '#FFC300   ' ;
    }
  
  show()
  {
    fill(this.fillValue );
    stroke(162, 162, 162, 1);
    rect(this.x , this.y , this.width , this.height ,0 , 0 , 20 , 20 )  ;
  }
}


function* bubbleSort()
{
    if(flag===1)
    {
        for(i=values.length -1;i>0 ;i--)
            {
                for(j=0;j< i ;j++)
                    {
                        if(values[j].height < values[j+1].height)
                        {
                            values[j+1].green()  ;
                            values[j].yellow() ;
                            temp = values[j].height ;
                            values[j].height = values[j+1].height ; 
                            values[j+1].height = temp ; 
                        }
                        else
                        {
                            values[j+1].green()  ;
                            values[j].yellow() ;
                        }
                         yield ; 
                    }

            }
    }
    
}
    