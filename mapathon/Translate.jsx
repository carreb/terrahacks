function animate({image, x1, y1, x2, y2}) {
    let x=x1, y=y1
    let dx = x2 - x1, dy = y2- y1;

    const img = new Image(); 
    img.src = image[0];
    window.requestAnimationFrame(draw);

    const ctx = document.getElementById("canvas").getContext("2d");

    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, 300, 300); // clear canvas

    // Movement    
    x+=dx; y+= dy;
    ctx.drawImage(img, x, y);

    return(
        window.requestAnimationFrame(animate)
    )

}

export default animate;