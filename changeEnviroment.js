AFRAME.registerComponent('goto', {
    schema: {
      default: ''
    },
  
    init() {
        var enviros = []
      this.el.addEventListener('click', () => {
        // window.location.href = this.data;
        console.log('clicked envirobutton')
  
      })
      const scene = document.querySelector('a-scene');
      console.log(scene)
    //   scene.innerHTML = html;
    }
  });