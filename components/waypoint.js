AFRAME.registerComponent('waypoint',{
  schema:{
    offset:{type:'number'default:0}
  },
  init:function(data){
    var offset = this.data.offset;
    this.el.addEventListener('click',function(evt){
      document.querySelector('a-scene').querySelector('#view').setAttribute('position',{
        x:this.getAttribute('position').x,
        y:this.getAttribute('position').y+offset,
        z:this.getAttribute('position').z
      });
    });
  }
});