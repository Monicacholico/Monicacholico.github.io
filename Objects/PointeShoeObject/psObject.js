
class PsObject {
    constructor(pSObj){
        this.name = pSObj.name;
        this.image = pSObj.image;
        this.brand = pSObj.brand;
        this.level = pSObj.level;
        this.type = pSObj.type;
        this.strength = pSObj.strength;
        this.length = pSObj.length;
        this.width = pSObj.width;
        this.arc = pSObj.arc;
        this.displayer();
    }

    displayer() {
        const displayerHook = document.getElementById('app');
        // const psList = document.createElement('ul');
        displayerHook.className = 'product-list';
        //for const psItem of psItems){
            const psLi = document.createElement('li');
            psLi.className = 'product-item';
            psLi.innerHTML = `
            <div>
                <img src="${this.image}" alt="${this.brand} ${this.name}" >
                <div class="product-item__content">
                    <div class="ps-model">
                    <h2>${this.name}</h2>
                    <h3>${this.brand}</h3>
                    </div>
                    <div class="features">
                    <p class="ps-desc"><strong>For Levels:</strong> ${this.level}</p>
                    <p class="ps-desc"><strong>For Feet Type:</strong> ${this.type}</p>
                    <p class="ps-desc"><strong>Strength of Feet:</strong> ${this.strength}</p>
                    <p class="ps-desc"><strong>Toes Length:</strong> ${this.length}</p>
                    <p class="ps-desc"><strong>Width of Feet:</strong> ${this.width}</p>
                    <p class="ps-desc"><strong>Arc Profile:</strong> ${this.arc}</p>
                    <button>Add to Cart</button>
                    </div>
                </div>
            </div>
            `;
            // psList.append(psLi);
        // }
        displayerHook.append(psLi);
    }
}

const alpha = new PsObject({
    name: 'Alpha',
    image: 'https://source.unsplash.com/random',
    brand: 'Bloch',
    level: 'advanced',
    type: 'egyptian',
    strenght: 'strong',
    length: 'long',
    width: 'narrow',
    arc: 'high'
});
console.log(alpha);