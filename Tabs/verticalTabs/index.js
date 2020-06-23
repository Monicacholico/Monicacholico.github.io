
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

    this.tabListElem.querySelector('.vertical-tab-active .vertical-tab-link').setAttribute('aria-selected', false);
    this.tabListElem.querySelector('.vertical-tab-content.active').classList.remove('active');
    var allTabs = [].slice.call(this.allTabs)
    console.log(allTabs);
}