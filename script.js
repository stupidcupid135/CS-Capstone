let images = Array.from(document.getElementsByTagName("img"));
let sources = [];
let id = null;
clearInterval(id);
images.forEach((img)=>{sources.push(img.src);});


images.forEach((img)=>{img.onmouseenter = ()=>{img.src = "PerryThePlatypus.png";};});
images.forEach(mouseLeave);

function mouseLeave(img, index) {
    let oldSrc = sources[index];
    img.onmouseleave = ()=>{(img.src = oldSrc);};
    
}