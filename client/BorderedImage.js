class BorderedImage {
    constructor(src,bordercolor) {
        this.src = src
        this.bordercolor = bordercolor
    }
    create(x,y) {
        const img = new Image()
        img.src = this.src
        img.onload = () => {
            const w = img.width,h = img.height
            const canvas = document.createElement('canvas')
            canvas.width = w*1.2
            canvas.height = h*1.2
            const context = canvas.getContext('2d')
            context.fillStyle = this.bordercolor
            context.fillRect(0,0,canvas.width,canvas.height)
            context.drawImage(img,w/10,w/10,w,h)
            const imgElem = document.createElement('img')
            imgElem.src = canvas.toDataURL()
            imgElem.style.webkitTransform = `translateX(${x}px)translateY(${y}px)`
            imgElem.style.oTransform = `translateX(${x}px)translateY(${y}px)`
            imgElem.style.mozTransform = `translateX(${x}px)translateY(${y}px)`
            document.body.appendChild(imgElem)
        }
    }
}
