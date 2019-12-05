AFRAME.registerComponent('change-pic', {
  schema: {
    default: ''
  },

  init () {

    const pic = document.querySelector('#polaroid-pic');

    this.el.addEventListener('click', () => {
      pic.setAttribute('src', this.data);
      console.log('hoal, hoalalaal');
    });
  }
});


// const data = this.data;
// const el = this.el;

// el.addEventListener(data.event, evt => {
//   el.addEventListener('click', function (evt) {
//     const url = "https://picsum.photos/600/400"
//     document.querySelector('#polaroid-pic', url);
//   });