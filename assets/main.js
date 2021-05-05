const header = document.querySelector('.site-header');
const toggler = document.querySelector('.menu-icon');
const spacer = document.querySelector('.topnav-spacer');
const body = document.getElementById('body');
const selector = document.querySelector('input[name=menu-btn]');
let root = document.documentElement;

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

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

function scrollPageTo (to, duration=500) {
  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  const easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };

  return new Promise((resolve, reject) => {
    const element = document.scrollingElement;

    if (typeof to === 'string') {
      to = document.querySelector(to) || reject();
    }
    if (typeof to !== 'number') {
      to = to.getBoundingClientRect().top + element.scrollTop;
    }

    let start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    const animateScroll = function() {
        currentTime += increment;
        let val = easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        } else {
          resolve();
        }
    };
    animateScroll();
  });
}

//root.style.setProperty('--gradient-dark', "#181122");
//root.style.setProperty('--gradient-light', "#1b2132");

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  // to avoid breaking orgain page when copying more words
  // cant copy when adding below this code
  // dummy.style.display = 'none'
  document.body.appendChild(dummy);
  //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

function uncheck() {
  var checkbox = document.getElementById('checkbox');
  setTimeout(function(){ if (document.getElementById('checkbox').checked == true) {document.getElementById('checkbox').checked = false;} }, 1000);
}