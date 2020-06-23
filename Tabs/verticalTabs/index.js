
function Tabs(element) {
    this.tabsElement = element;
    this.tabListElem = element.querySelector('.vertical-tabs-list-wrap');
    this.tabContentWrap = element.querySelector('.vertical-tabs-content-wrap');
    this.tabGroupName = element.dataset.tabName || 'tabGroup';
    this.allTabs = element.querySelectorAll('.vertical-tab');
    this.activeTabIndex = 0;
    this.build.call(this);
}

Tabs.prototype.build = function() {
    console.log(element);
    this.tabListElem.addEventListener('click', this.handleTabclick.bind(this));
    this.tabListElem.addEventListener('keydown', this.handleKeyBoardEnter.bind(this));
}

Tabs.prototype.handleTabclick = function (e) {
    if(e.target.classList.contains('vertical-tab-link')){
        this.setActiveTab(e.target);
    }
}
Tabs.prototype.handleKeyboardEnter = function(e) {
    if(e.keyCode === 13 && e.target.classList.contains('vertical-tab-link')){
        this.setActiveTab(e.target);
    }
}

Tabs.prototype.setActiveTab = function(tabElem) {
    if(!tabElem) return;
    if(this.tabListElem.querySelector('.vertical-tab-activ .vertical-tab-link') === tabElem) return;
    //remove active
    this.tabListElem.querySelector('.vertical-tab-active .vertical-tab-link').setAttribute('aria-selected', false);
    this.tabListElem.querySelector('.vertical-tab-content.active').classList.remove('active');
    // set active
    tabElem.setAttribute('aria-selected', true);
    tabElem.classList.add('vertical-tab-active');
    this.tabContentWrap.querySelector('#' + tabElem.dataset.tabId).classList.add('active');
    var allTabs = [].slice.call(this.allTabs);
    this.activeTabIndex = this.findIndex(allTabs, function(tab){
        return tab.classList.contains('vertical-tab-active');
    });
}

Tabs.prototype.handleKeyBoardNav = function(e) {
    var KEYCODE = {
        UP_ARROW: 38,
        DOWN_ARROW: 40,
        HOME_KEY: 36,
        END_KEY: 35
    };

    var allTabs = [].slice.call(this.allTabs);
    var currentTabIndex = this.findIndex(allTabs, function(tab) {
        return tab.classList.contains('vertical-tab-active');
    });
    var currentTab = allTabs[currentTabIndex];
    var firstTab = allTabs[0] || currentTab;
    var lastTab = allTabs[this.allTabs.length - 1] || currentTab;
    var nextTab = allTabs[currentTabIndex + 1] || firstTab;
    var prevTab = allTabs[currentTabIndex - 1] || lastTab;

    switch (e.keyCode) {
        case KEYCODE.UP_ARROW:
            e.preventDefault();
            this.setActiveTab(prevTab.querySelector('.vertical-tab-link'));
            return;
        case KEYCODE.DOWN_ARROW:
            e.preventDefault();
            this.setActiveTab(nextTab.querySelector('.vertical-tab-link'));
            return;
        case KEYCODE.HOME_KEY:
            e.preventDefault();
            this.setActiveTab(firstTab.querySelector('.vertical-tab-link'));
            return;
        case KEYCODE.END_KEY:
            e.preventDefault();
            this.setActiveTab(lastTab.querySelector('.vertical-tab-link'));
            return;
        default:
            return;
    }
};

(function() {
    var tabsElemets = document.querySelectorAll('.cdo .vertical-tabs');
    Array.prototype.slice.call(tabsElemets).forEach(function (elem) {
        new Tabs(elem);
    });
})();