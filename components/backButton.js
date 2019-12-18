
AFRAME.registerComponent('back-button', {
  schema: {
    default: 'https://screeeen.github.io/vr-sandbox/index.html'

  },

  init() {
    const html = `
    <a-entity mixin="button" geometry="primitive:  plane;  width:  1.8;  height:  0.3"  goto="https://screeeen.github.io/vr-sandbox/index.html"  position="0 .24 -4"
    animation__click="property: components.material.material.color; type: color; startEvents: click; dur: 1; to: #FFF"
    animation__mouseenter="property: scale; to: 1.3 1.3 1.3; dur: 150; startEvents: mouseenter"
    animation__mouseenter__color="property: components.material.material.color; type: color; to: lightblue; startEvents: mouseenter; dur: 150"
    animation__mouseleave="property: scale; to: 1 1 1; dur: 15; startEvents: mouseleave"
    animation__mouseleave__color="property: components.material.material.color; type: color; to: #CCC; startEvents: mouseleave; dur: 15">
    <a-text value="Back" text="align:center" color="#000" scale=".5 .5 .5""></a-text>
  </a-entity>
    `
    const back = document.querySelector('#backButton');
    back.innerHTML = html;
  }
});






