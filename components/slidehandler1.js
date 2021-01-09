AFRAME.registerComponent('slidehandler1', {
    init:function() {
    var pln = document.querySelector("#plane1");
    this.el.addEventListener('click', () => {
    pln.setAttribute('visible',true);
    //pln.setAttribute("position",{x:0,y:5,z:-9});
    pln.setAttribute('animation', 'property: position; dur: 1000; from: 0 0 -9; to: 0 5 -9');
    });
    }
    });
