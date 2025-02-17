

function clickOnTab(e) {

    let activeTabs = document.querySelectorAll(' active');

    function clickOnTab() {
        activeTabs.forEach(function (tab) {
            tab.className = tab.className.replace('active', '');
        });

        e.target.parentElement.className += ' active';
        document.getElementById(event.target.href.split("#")[1]).className += ' active';
    }
}

const element = document.getElementById('nav-tab');

element.addEventListener('click', clickOnTab, false);



