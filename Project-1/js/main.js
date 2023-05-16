
let nav = document.querySelector(".nav-wrapper");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");

    }
}

// nav hide

var navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse')
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// /* <!-- 3 ########## COUNTER ############# --> */


 document.addEventListener("DOMContentLoaded",() => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current =start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration /  range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);

    }

    counter("count1", 0, 1297, 3000);
    counter("count2", 100, 5798, 2500);
    counter("count3", 0, 1453, 3500);
    counter("count4", 0, 7653, 3000);
});


