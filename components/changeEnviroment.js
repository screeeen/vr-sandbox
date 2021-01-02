AFRAME.registerComponent('changeEnvironment', {
    schema: {
      default: '',
    },
    
    init() {
      console.log(button,document.querySelector('#changeEnviroment'))
      const button = `
      <a-entity mixin="button" geometry="primitive:  plane;  width:  1.8;  height:  0.3"  material="color:#FFF" position="0 2 2"
      animation__click="property: components.material.material.color; type: color; startEvents: click; dur: 1; to: #FFF"
      animation__mouseenter="property: scale; to: 1.3 1.3 1.3; dur: 150; startEvents: mouseenter"
      animation__mouseenter__color="property: components.material.material.color; type: color; to: lightblue; startEvents: mouseenter; dur: 150"
      animation__mouseleave="property: scale; to: 1 1 1; dur: 15; startEvents: mouseleave"
      animation__mouseleave__color="property: components.material.material.color; type: color; to: #CCC; startEvents: mouseleave; dur: 15">
      <a-text value="Back" text="align:center" color="#000" scale=".5 .5 .5""></a-text>
    </a-entity>
      `
      var enviros = ['default', 'contact', 'egypt', 'checkerboard', 'forest', 'goaland', 'yavapai', 'goldmine', 'threetowers', 'poison', 'arches', 'tron', 'japan', 'dream', 'volcano', 'starry', 'osiris']
      current:0

      this.el.addEventListener('click', () => {
        // window.location.href = this.data;
        console.log('clicked envirobutton')
        
        current++;
      })
      const buttonEnviro = document.querySelector('#changeEnviroment');
      buttonEnviro.setAttribute('environment',enviros[current]);
      console.log(scene)
      buttonEnviro.innerHTML = button;
    }
  });