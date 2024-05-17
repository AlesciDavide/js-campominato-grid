const startGameButton = document.querySelector('button#startGame');



startGameButton.addEventListener('click', function(){
    const checkcontainerEl = document.getElementById('container');
        if(checkcontainerEl !== null){
            checkcontainerEl.remove();
        }
    const containerEl = document.createElement('section');
    containerEl.id= 'container';
    const myMainEl = document.querySelector('main')
    myMainEl.appendChild(containerEl);
    const mycontainerEl = document.querySelector('#container');
        for(let i = 0; i < 100; i++){
            const divElements = document.createElement('div');
            divElements.classList.add('elements');
            divElements.append(i+1);
            mycontainerEl.appendChild(divElements);
        }


})

