
class Banner{
    constructor(balletBanner){
        this.title = balletBanner.title;
        this.imageUrl = balletBanner.image;
        this.background = balletBanner.background;
        this.ballerina = balletBanner.ballerina;
        this.description = balletBanner.description;
        // this.setBackground();
        this.buildBanner();
    }
    
    setBackground() {
        const backgroundHeader = document.getElementById('app');
        console.log(backgroundHeader);
        backgroundHeader.style.backgroundImage = `url(${this.background})`
    }


    buildBanner(){
        this.setBackground();
        const html = `<header class="header">
        <h2 class="title">${this.title}</h2>
        <img src="${this.ballerina}" alt="" id="main-image">
        <img src="${this.imageUrl}" alt="" id="trees">
        <p class="featured-desc">${this.description}</p>
        </header>`;
        document.getElementById('app').innerHTML += html;
    }
    

}

new Banner({
    title: 'Maria Kochetkova',
    ballerina: 'kochetkova.png',
    background: '20.png',
    description: 'Famous Russian Ballerina',
    image: '20.png'
})

