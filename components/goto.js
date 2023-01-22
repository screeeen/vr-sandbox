AFRAME.registerComponent('goto', {
  schema: {
    default: ''
  },

  init() {
    this.el.addEventListener('click', () => {
      window.location.href = this.data;

    })
  }
});