AFRAME.registerComponent('change-pic', {
  schema: {
    default: ''

  },

  init() {
    this.el.addEventListener('click', () => {
      const card = document.querySelector('#card');
      const button = document.querySelector('#button-change');
      const pic = document.querySelector('#pic');
      const newPic = document.createElement('a-image')
      pic.remove();
      newPic.id = "pic";
      newPic.setAttribute('mixin', 'card-pic');
      const url = "url(https://picsum.photos/200/300/?random&rnd"+new Date().getTime()+")";
      newPic.setAttribute('src', url);
      card.append(newPic);
    })
  }
});
