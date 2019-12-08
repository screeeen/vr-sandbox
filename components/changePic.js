AFRAME.registerComponent('change-pic', {
  schema: {
    default: ''

  },

  init() {
    this.el.addEventListener('click', () => {
      const card = document.querySelector('#card');
      const button = document.querySelector('#buttonC');
      const pic = document.querySelector('#pic');
      const newPic = document.createElement('a-image')
      pic.remove();
      newPic.id = "pic";
      newPic.setAttribute('mixin', 'polaroid-pic');
      const url = "url(https://picsum.photos/200/300/?random&rnd"+new Date().getTime()+")";
      newPic.setAttribute('src', url);
      card.append(newPic);
    }),
      document.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
          const card = document.querySelector('#card');
          const button = document.querySelector('#buttonC');
          const pic = document.querySelector('#pic');
          const newPic = document.createElement('a-image')
          pic.remove();
          newPic.id = "pic";
          newPic.setAttribute('mixin', 'polaroid-pic');
          const url = "url(https://picsum.photos/200/300/?random&rnd"+new Date().getTime()+")";
          newPic.setAttribute('src', url);
          card.append(newPic);
        }
      })
  }
});




// const data = this.data;
// const el = this.el;

// el.addEventListener(data.event, evt => {
//   el.addEventListener('click', function (evt) {
//     const url = "https://picsum.photos/600/400"
//     document.querySelector('#polaroid-pic', url);
//   });