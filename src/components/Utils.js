export function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  };


export function fade() {
  if(typeof window !== "undefined") {
  let fadings = document.getElementByClassName("fading");
window.scroll(function(){  
  let vpheight = document.documentElement.clientHeight;
  fadings.each(function(){
  	let r = this.getBoundingClientRect();  
    let thisHeight = this.height();
    if(thisHeight + r.top < 0 || r.top > vpheight) return true;
    let opacity = Math.max(0, Math.min(1, (r.top >= 0 ? vpheight - r.top : this.height() - Math.abs(r.top)) / vpheight));
    this.css("opacity", opacity);
  });  	       	
});
  }
}