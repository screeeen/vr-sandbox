/* global AFRAME */
AFRAME.registerComponent('event-manager', {

    init: function () {
      this.bindMethods();
      this.boxButtonEl = document.querySelector('#boxButton');  
      this.boxButtonEl.addEventListener('click', this.onClick);
      this.boxButtonEl.addState('pressed');
    },
  
    bindMethods: function () {
      this.onClick = this.onClick.bind(this);
    },
    enviros: ['default', 'contact', 'egypt', 'checkerboard', 'forest', 'goaland', 'yavapai', 'goldmine', 'threetowers', 'poison', 'arches', 'tron', 'japan', 'dream', 'volcano', 'starry', 'osiris'],
    current: 0,
    onClick: function (evt) {
      console.log('event manager click')
      var targetEl = evt.target;
      if (targetEl === this.boxButtonEl){
        this.boxButtonEl.removeState('pressed');
        current++;
        var enviro = document.querySelector('#environment');
        enviro.remove();

        var newEnviro = document.createElement('a-entity');
        var scene = document.querySelector('a-scene');
        var texto = document.querySelector('#text')
        texto.setAttribute('text',{value:'clicked'})
        newEnviro.setAttribute('environment',{preset :enviros[current]});
        newEnviro.id = 'environment';
        console.log(scene)
        scene.appendChild(newEnviro);   
      }
    }
    
  });
  