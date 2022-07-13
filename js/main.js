let containerGridDom = document.getElementById('container-grid');

let title = document.querySelector('.title')

let MainButton = document.getElementById('main-button');
MainButton.addEventListener('click', function(){

    containerGridDom.innerHTML = '';
    
    for( let i = 1; i <= 100; i++ ) {
    
        const square = generateSquare();
        
        square.addEventListener('click',
            function (){
                this.classList.toggle('clicked');
            }
        );
    
        containerGridDom.append(square);
    }

    title.classList.remove('show');
    title.classList.add('hidden');

});



function generateSquare(){
    
    const square = document.createElement('div');
    square.classList.add('square-easy');

    return square;

}
