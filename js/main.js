containerGridDom = document.getElementById('container-grid');
document.getElementById('container-grid').style.visibility = "hidden";

for( let i = 1; i <= 100; i++ ) {

    const square = generateSquare();
    
    square.addEventListener('click',
        function (){
            this.classList.toggle('clicked');
        }
    );

    containerGridDom.append(square);
}

let MainButton = document.getElementById('main-button');
MainButton.addEventListener('click', function(){

    document.getElementById('container-grid').style.visibility = "visible";
    console.log(containerGridDom);

});



function generateSquare(){
    
    const square = document.createElement('div');
    square.classList.add('square-easy');

    return square;

}
