AFRAME.registerComponent('change-pic', {
  schema: {
    default: ''
  },

  init () {

    const pic = document.querySelector('#pola');
    const newPic = document.createElement('a-image')
    this.el.addEventListener('click', () => {
      pic.setAttribute('src', this.data);
      pic.remove();
      console.log('hoal, hoalalaal', this.data, pic);
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