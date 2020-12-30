const header = document.querySelector('.site-header');
const toggler = document.querySelector('.menu-icon');
const spacer = document.querySelector('.topnav-spacer');
const body = document.getElementById('body');
const selector = document.querySelector('input[name=menu-btn]');

function scrollCheck() {
    const scrollPos = window.scrollY;
    if (body.classList.contains('scrolled') != true) {body.classList.add('scrolled');}
    if (scrollPos > 10) {
        header.classList.add('scrolled');
        if (spacer != null) spacer.classList.add('scroll');
    } else {
        header.classList.remove('scrolled');
        if (spacer != null) spacer.classList.remove('scroll');
    }
}

window.addEventListener('scroll', () => {
    scrollCheck();
});

;(function(){
    function addAnim() {
        if (toggler.classList.contains('animate') != true) {
            toggler.classList.add('animate');
        }

        if (body.style.overflow == "hidden") {body.style.overflow = "";}
        else if (body.style.overflow == "" && selector.checked != true) {body.style.overflow = "hidden";}
    };

    // listen to mouseover for the container
    toggler.addEventListener('click', addAnim);
})();