const spinBtn = document.getElementById('spin');
const wheel = document.querySelector('.container');

var currRotation = 0;

spinBtn.addEventListener('click' , function(){
    spinBtn.disabled = true;

    var randomDegrees = Math.floor(Math.random()* 360);

    var totalSpins = 1800 + randomDegrees;

    currRotation += totalSpins;

    wheel.style.transform = 'rotate(' + currRotation + 'deg)';

    setTimeout(function() {
        spinBtn.disabled = false;
    }, 5000);

});