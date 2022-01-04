const title = document.getElementById('title');
const subTitle = document.getElementById('subTitle');
const content = document.getElementById('content');
const imgWrap = document.querySelector('.pointe-shoes-wrapper');
const img = document.querySelector('.pointe-shoes');
console.log(imgWrap);

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const authorTitle = title.value;
    const authorSubtitle = subTitle.value;
    const authorContent = content.value;

    console.log(authorTitle);
    console.log(authorContent);
    const html = `
    <div class="Article__wrapper">
        <div class="Article__header">
            <h2>
                ${authorTitle}
            </h2>
        </div>
        <div class="Article__contentWrapper">
            <div class="Article__imgWrapper">
                <img src="https://source.unsplash.com/random/150x150" alt="" class="Article__img">
            </div>
            <div class="Article__textWrapper">
                <h3 class="Article__subHeading">
                    ${authorSubtitle}
                </h3>
                <p class="Article__copy">
                    ${authorContent}
                </p>
            </div>
        </div>
    </div>
    `;
    const hook = document.querySelector('.Main');
    const article = document.createElement('article');
    article.innerHTML = html;
    hook.appendChild(article);
    title.value = '';
    subTitle.value = '';
    content.value = '';
})

document.addEventListener('scroll', () => {
    console.log('im working');
    // imgWrap.classList.add('spinner');
    imgWrap.style.transform = "rotate("+window.pageYOffset+"deg)"
    // console.log(window.pageYOffset);
    // imgWrap.style.border = '1px solid gray';
    // img.style.transform = 'rotate(90deg)';
})