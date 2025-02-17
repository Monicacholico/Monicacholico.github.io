class Banner {
    constructor(elemBanner){
        this.elemBanner = elemBanner;
        this.title = elemBanner.title;
        this.background = elemBanner.background;
        this.build();

    };
    
    build(){
        const sec = document.querySelector('.section');
        const html = `<h2>${this.title}</h2>`;
        sec.innerHTML += html;
    }
}

const balletBanner = new Banner({
    title: 'This is my first Banner'
})