
const imgInterval = 200;
const frame=0;

function animate({image, x, y, fi, ff}) {
    let ti = Date.now();

    const img = new Image(); 
    img.src = image[0];
    window.requestAnimationFrame(draw);

    const ctx = document.getElementById("canvas").getContext("2d");

    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, 300, 300); // clear canvas


    // Movement
    const tf = new Date();
    if (tf-ti < imgInterval && frame < ff-(fi+frame)) frame+= 1; 
    
    img.scr=animate[frame]
    ctx.drawImage(img, x, y);

    window.requestAnimationFrame(animate);
}

export default animate;