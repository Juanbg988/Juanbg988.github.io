(function(){
    const galleries = document.querySelectorAll('.galeria-container');
    
    galleries.forEach(galeria =>{
        const sliders = [...galeria.querySelectorAll('.galeria-body')];
        const buttonNext = galeria.querySelector('.galeria-next');
        const buttonBefore = galeria.querySelector('.galeria-before');

        const changePosition = (add) => {
            const currentSlide = galeria.querySelector('.galeria-body-show');
            let currentId = Number(currentSlide.dataset.id);
        
            currentSlide.classList.remove('galeria-body-show');

            let newValue = currentId + add;
            if(newValue > sliders.length) newValue = 1;
            if(newValue < 1) newValue = sliders.length;

            sliders[newValue-1].classList.add('galeria-body-show');
        };

        if(buttonNext){
            buttonNext.addEventListener('click', ()=>changePosition(1));
        }

        if(buttonBefore){
            buttonBefore.addEventListener('click', ()=>changePosition(-1));
        }
    });
}) ();

