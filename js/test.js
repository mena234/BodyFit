$(function () {
    
    "use strict";
    
    
    $(".the-link-one").click(function () {
        
        $(".carousel-two").fadeToggle();
        $(".carousel-one").fadeToggle();
        
    });
    
    $(".the-link-two").click(function () {
        
        $(".carousel-one").fadeToggle();
        $(".carousel-two").fadeToggle();
        
    });
    
    
});


var intervalFade;


function theFade() {
    
    "use strict";
    
    $(".carousel-one").fadeOut();
    $(".carousel-two").fadeIn();
    $(".the-link-two").addClass("active-a");
    $(".the-link-one").removeClass("active-a");
    
}

var intervalFade = setInterval(theFade, 10000);
 


var intervalFadeTwo;


function theFadeTwo() {
    
    "use strict";
    
    $(".carousel-two").delay(5000).fadeOut();
    $(".carousel-one").delay(5000).fadeIn();
}

var intervalFadeTwo = setInterval(theFadeTwo, 10000);






var test = document.getElementById("test"),

    testTwo = document.getElementById("test-two"),

    testThree = document.getElementById("test-three"),

    testFour = document.getElementById("test-four"),

    contain = document.getElementById("contain"),

    myTime,

    myTimeTwo,

    myTimeThree,

    myTimeFour;


function countUp() {

    "use strict";

    if (test.textContent >= 5000) {

        clearInterval(myTime);

    } else {

        test.textContent = parseInt(test.textContent) + 17;

    }

}


function countUpTwo() {

    "use strict";

    if (testTwo.textContent >= 4560) {

        clearInterval(myTimeTwo);

    } else {

        testTwo.textContent = parseInt(testTwo.textContent) + 16;

    }

}


function countUpThree() {

    "use strict";

    if (testThree.textContent >= 570) {

        clearInterval(myTimeThree);

    } else {

        testThree.textContent = parseInt(testThree.textContent) + 2;

    }

}

function countUpFour() {

    "use strict";

    if (testFour.textContent >= 900) {

        clearInterval(myTimeFour);

    } else {

        testFour.textContent = parseInt(testFour.textContent) + 4;

    }

}



window.onscroll = function () {
    
    "use strict";
    
    if (document.documentElement.scrollTop >= contain.offsetTop - 350) {
    

        var myTime = setInterval(countUp, 1),

            myTimeTwo = setInterval(countUpTwo, 1),

            myTimeThree = setInterval(countUpThree, 1),

            myTimeFour = setInterval(countUpFour, 1);
 
    }

    
};


window.onload = function () {
    
    "use strict";
    
    $(".loading-overlay").fadeOut(1000, function () {
        
        $("body").css("overflow", "auto");
        
    });
    
};






