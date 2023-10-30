const debugWrap = document.querySelector('.debugger')
// make debugWrap draggable

debugWrap.onmousedown = function(e){
    let event = e || window.event;  
    let point_x=event.offsetX;
    let point_y=event.offsetY;
    document.onmousemove = function(ent){
      let evt = ent || window.event;
      let ele_left= evt.clientX - point_x;
      let ele_top= evt.clientY - point_y;
      ele_left = Math.min(Math.max(0,ele_left), window.innerWidth - debugWrap.offsetWidth)
      ele_top=  Math.min(Math.max(0,ele_top),  window.innerHeight - debugWrap.offsetHeight)
      debugWrap.style.left = ele_left + 'px';
      debugWrap.style.top = ele_top + 'px'
    }
    document.onmouseup = function(event){
      this.onmouseup = null;
      this.onmousemove = null;
      if(typeof debugWrap.releaseCapture!='undefined'){  
        debugWrap.releaseCapture();  
      }  
    }
    document.ondragstart = function(ev) {
      ev.preventDefault();
    }
    document.ondragend = function(ev) {
      ev.preventDefault();
    }
}