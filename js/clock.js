function Hand(name, angle) {
    this.name = name;
    this.angle = angle;
}

function initClock() {
    var date = new Date;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    var hands = [
        new Hand('hours', hours * 360/12 + minutes/2),
        new Hand('minutes', minutes * 360/60),
        new Hand('seconds', seconds * 360/60)
    ];
    
    hands.forEach(function(hand) {
        var element = document.querySelector('.' + hand.name);
        element.style.transform = 'rotate(' + hand.angle + 'deg)';
        element.style.webkitTransform  = 'rotate(' + hand.angle + 'deg)';
    });
    
    var containers = document.querySelectorAll('.seconds-container');
    initSecondsHandBounce();
}

function initSecondsHandBounce() {
    setInterval(function() {
        var container = document.querySelector('.seconds-container');
        
        if (container.angle == undefined) {
            container.angle = 0;
        }
        
        container.angle += 6;
        
        container.style.transform = 'rotate(' + container.angle + 'deg)';
        container.style.webkitTransform = 'rotate(' + container.angle + 'deg)';
    }, 1000);
}

initClock();