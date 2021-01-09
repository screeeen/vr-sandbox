/* global AFRAME */
AFRAME.registerComponent('event-manager', {

    init: function () {
      this.bindMethods();
      this.boxButtonEl = document.querySelector('#boxButton');  
      this.boxButtonEl.addEventListener('click', this.onClick);
      document.addEventListener('keydown', this.onKeydown);
      this.boxButtonEl.addState('pressed');
    },
  
    bindMethods: function () {
      this.onClick = this.onClick.bind(this);
      // this.onKeydown = this.onKeydown.bind(this);
    },
    onClick: function (evt) {
      var enviros= ['default', 'contact', 'egypt', 'checkerboard', 'forest', 'goaland', 'yavapai', 'goldmine', 'threetowers', 'poison', 'arches', 'tron', 'japan', 'dream', 'volcano', 'starry', 'osiris'];
      var current =  parseInt(Math.random()*10);
      if (this.boxButtonEl){
        this.boxButtonEl.removeState('pressed');
        var scene = document.querySelector('a-scene');
        var envi = enviros[current];
        var enviro = scene.getAttribute('environment');
        enviro.preset = envi;
        console.log(scene.getAttribute('environment'));
        // scene.removeAttribute('environment');
        scene.setAttribute('environment',{preset :envi});
        // console.log(scene.attributes)
      }
    },
    // onKeydown: function (evt) {
    //   var enviros= ['default', 'contact', 'egypt', 'checkerboard', 'forest', 'goaland', 'yavapai', 'goldmine', 'threetowers', 'poison', 'arches', 'tron', 'japan', 'dream', 'volcano', 'starry', 'osiris'];
    //   var current =  parseInt(Math.random()*10);
    //   if (this.boxButtonEl){
    //     this.boxButtonEl.removeState('pressed');
    //     var scene = document.querySelector('a-scene');
    //     var envi = enviros[current];
    //     var enviro = scene.getAttribute('environment');
    //     enviro.preset = envi;
    //     console.log(scene.getAttribute('environment'));
    //     // scene.removeAttribute('environment');
    //     scene.setAttribute('environment',{preset :envi});
    //     // console.log(scene.attributes)
    //   }
    // }
    
  });
  