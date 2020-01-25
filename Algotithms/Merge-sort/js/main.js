


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
     sorter = mergeSort(values.length) ;
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




function* mergeSort(n) 
{ 
    
   var curr_size;  
   var left_start; 
    
   for (curr_size=1; curr_size<=n-1; curr_size = 2*curr_size) 
   { 
       for (left_start=0; left_start<n-1; left_start += 2*curr_size) 
       { 
           var mid = min(left_start + curr_size - 1, n-1); 
  
           var right_end = min(left_start + 2*curr_size - 1, n-1); 
           
           sorter2 = merge( left_start, mid, right_end);
           sorter2.next() ;
           yield;
           for(i=0;i<values.length;i++)
                values[i].fillValue = colorYellow ;
       }
       
   }
}



function* merge(  l,  m,  r) 
{ 
    var i, j, k; 
  
    /* create temp valuesays */
    var L = []; var R = []; 
  
    /* Copy data to temp valuesays L[] and R[] */
    for (i = l; i <=m; i++) 
    {
        L.push( values[i].height); 
        values[i].fillValue = colorGreen ;
    }
    for (j = m+1; j <=r; j++) 
    {
        R.push( values[j].height ) ;
        values[j].fillValue = colorGreen ;
    }
    
    /* Merge the temp valuesays back varo values[l..r]*/
    k = l; 
    i = 0; 
    j = 0; 
    while (i < L.length && j < R.length) 
    { 
        if (L[i] > R[j]) 
        { 
            values[k].height = L[i]; 
            i++; 
        } 
        else
        { 
            values[k].height = R[j]; 
            j++; 
        } 
        k++; 
    }
    
    /* Copy the remaining elements of L[], if there are any */
    while (i < L.length) 
    {
        values[k].height = L[i];  
        i++; 
        k++; 
    } 
    
    /* Copy the remaining elements of R[], if there are any */
    while (j < R.length) 
    { 
        values[k].height = R[j]; 
        j++; 
        k++; 
    }
    yield;
    
}
