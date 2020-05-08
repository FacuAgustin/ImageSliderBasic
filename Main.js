let sliderImage=document.querySelectorAll('.slide'),
    arrowLeft=document.querySelector('#arrow-left'),
    arrowRight=document.querySelector('#arrow-right'),
    current=0;

    //clear all image
    function reset(){
        for (let i = 0; i < sliderImage.length; i++) {
            sliderImage[i].style.display='none';
            
        }
    }
    function starSlider(){
        reset();
        sliderImage[0].style.display='block';
    }
    //show prev
    function slideLeft() {
        reset();
        sliderImage[current - 1].style.display='block'
        current--;
    }
    //show next
    function slideRight() {
        reset();
        sliderImage[current+1].style.display='block';
        current++;
    }
    //left arrow click
    arrowLeft.addEventListener('click',function () {
       if (current === 0) {
           current=sliderImage.length;
       } 
       slideLeft();
    });
    arrowRight.addEventListener('click',function () {
        if (current===sliderImage.length -1) {
            current=-1;
        }
        slideRight();
    })

    starSlider();

