const title = document.getElementById('title');
const subTitle = document.getElementById('subTitle');
const content = document.getElementById('content');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const authorTitle = title.value;
    const authorSubtitle = subTitle.value;
    const authorContent = content.value;

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