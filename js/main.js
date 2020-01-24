

/* List contains the data about every algorithm card, The function 'algorithmsCards() 'loop and takes the information to make every card    */ 
var algorithmsList = [
    
    {
        name : 'Bubble Sort',
        about : 'Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.',
        imgPath : 'images/sorting.gif' ,
        pageLink : 'file:///C:/Users/Dodger/Desktop/Project/Algorithms%20Visualizer/Algotithms/Bubble-sort/index.html' 
    },
    {
        name : 'Selection Sort',
        about : 'an in-place comparison sort. It has O(n²) time complexity, making it inefficient on large lists',
        imgPath : 'images/sorting.gif' ,
        pageLink : 'file:///C:/Users/Dodger/Desktop/Project/Algorithms%20Visualizer/Algotithms/Selection-sort/index.html' 
    },
    {
        name : 'Bubble Sort',
        about : 'Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.',
        imgPath : 'images/sorting.gif' ,
        pageLink : '#' 
    },
    {
        name : 'Bubble Sort',
        about : 'Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.',
        imgPath : 'images/sorting.gif' ,
        pageLink : '#' 
    },
    {
        name : 'Bubble Sort',
        about : 'Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.',
        imgPath : 'images/sorting.gif' ,
        pageLink : '#' 
    },
    {
        name : 'Bubble Sort',
        about : 'Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.',
        imgPath : 'images/sorting.gif' ,
        pageLink : '#' 
    },
]


function algorithmsCards()
{
    // Looping through every elemnt in the 'algorithmsList' list and creating a card for every algorithm object with that object data 
    /*
        Parent => child 
        
        Herarchy : card => pagePath =>  img , ( body => title , text   )
        Type     : <div>     <a>       <img>   <div>    <h5>    <p>
    */
    for(i=0;i<algorithmsList.length;i++)  
    {
        
        // creating a wrapping <a> to link the card to it's specific page 
        let pagePath = document.createElement('a') ;
        pagePath.href = algorithmsList[i].pageLink;
        
        
        // creating the card 
        let card = document.createElement('div') ;
        card.classList.add('card');
        card.classList.add('col-xs-6');
        card.classList.add('col-sm-5');
        card.classList.add('col-md-4');
        card.classList.add('col-lg-3');
        
        // creating the card image
        let img = document.createElement('img') ;   
        img.src = algorithmsList[i].imgPath ;
        img.classList.add('card-img-top');
        
        // creating the card body
        let body = document.createElement('div');
        body.classList.add('card-body');
        
        // creating the card-body title 
        let title = document.createElement('h5');
        title.classList.add('card-title');
        title.classList.add('text-color');
        title.innerHTML = algorithmsList[i].name ;
        
        // creating the card-body text 
        let text = document.createElement('p') ;
        text.classList.add('card-text');
        text.classList.add('text-color');
        text.innerHTML = algorithmsList[i].about; 
        
        // appending the title and the text to the 'body' elemnt 
        body.appendChild(title) ;
        body.appendChild(text) ;
        
        // appending the img and the the body to the <a> element 
        pagePath.appendChild(img);
        pagePath.appendChild(body) ;
        
        // appending the <a> element to the card 
        card.appendChild(pagePath) ;
        document.getElementById('container').appendChild(card) ;
    }
}