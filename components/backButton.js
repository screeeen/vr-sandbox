
AFRAME.registerComponent('back-button', {
  schema: {
    default: 'https://screeeen.github.io/vr-sandbox/index.html'

  },

  init() {
    const html = `
    
    <a-entity mixin="button" geometry="primitive:  plane;  width:  1.8;  height:  0.3"  goto="https://screeeen.github.io/vr-sandbox/index.html"  position="0 .24 -4">
    <a-text value="Back" text="align:center" color="#000" scale=".5 .5 .5""></a-text>
  </a-entity>
    `
    const back = document.querySelector('#backButton');
    back.innerHTML = html;
  }
});






