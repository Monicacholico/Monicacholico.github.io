
class Dropdown {
    constructor() {
        this.SPACEBAR_KEY_CODE = [0, 32];
        this.ENTER_KEY_CODE = 13;
        this.DOWN_ARROW_KEY_CODE = 40;
        this.ESCAPE_KEY_CODE = 27;
        this.list = document.querySelector('.dropdown_list');
        this.listContainer = document.querySelector('.dropdown_list-container');
        this.dropdownArrow = document.querySelector('.dropdown_arrow');
        this.listItems = document.querySelectorAll('.dropdown_list-item');
        this.dropdownSelectedNode = document.querySelector('#dropdown_selected');
        this.listItemIds = [];
        this.url = url;


        this.dropdownSelectedNode.addEventListener("click", e =>
                                      this.toggleListVisibility(e)
                                     );
        this.dropdownArrow.addEventListener('click', this.toggleListVisibility);

        this.dropdownSelectedNode.addEventListener("keydown", e =>
                                            this.toggleListVisibility(e)
                                            );
        this.dropdownArrow.addEventListener('keydown', this.toggleListVisibility);

    }

    keyboardHandler() {
        this.listItems.forEach(item => listItemIds.push(item.id));
        this.listItems.forEach(item => {
            item.addEventListener('click', e => {
                setSelectedListItem(e);
                closeList();
            });
            item.addEventListener('keydown', e => {
                switch (e.keyCode) {
                    case ENTER_KEY_CODE:
                    setSelectedListItem(e);
                    closeList();
                    return;

                    case DOWN_ARROW_KEY_CODE:
                        focusNextListItem(DOWN_ARROW_KEY_CODE);
                        return;

                    case UP_ARROW_KEY_CODE:
                        focusNextListItem(UP_ARROW_KEY_CODE);
                        return;

                    case ESCAPE_KEY_CODE:
                        closeList();
                        return;

                    default:
                        return;
                }
            });
        });
        
    }
    
    setSelectedListItem(e) {
        let selectedTextToAppend = document.createTextNode(e.target.innerText);
        dropdownSelectedNode.innerHTML = null;
        dropdownSelectedNode.appendChild(selectedTextToAppend);
    }

    closeList() {
        list.classList.remove('open');
        dropdownArrow.classList.remove('expanded');
        listContainer.setAttribute('aria-expanded', false);
    }

    toggleListVisibility(e) {
        let openDropDown = 
        this.SPACEBAR_KEY_CODE.includes(e.keyCode) || e.keyCode === this.ENTER_KEY_CODE;

        if (e.keyCode === this.ESCAPE_KEY_CODE) {
            closeList();
        }

        if (e.type === 'click' || openDropDown) {
            this.list.classList.toggle('open');
            this.dropdownArrow.classList.toggle('expanded');
            this.listContainer.setAttribute('aria-expanded', this.list.classList.contains('open'));
        }

        if(e.keyCode === this.DOWN_ARROW_KEY_CODE) {
            this.focusNextListItem(this.DOWN_ARROW_KEY_CODE);
        }

        if(e.keyCode === this.UP_ARROW_KEY_CODE) {
            this.focusNextListItem(this.UP_ARROW_KEY_CODE);
        }
    }

    focusNextListItem(direction) {
        const activeElementId = document.activeElement.id;
        if(activeElementId === 'dropdown_selected') {
            document.querySelector(`#${listItemsIds[0]}`).focus();
        } else {
            const currentActiveElementIndex = listItemsIds.indexOf(activeElementId);
            if(direction === this.DOWN_ARROW_KEY_CODE) {
                const currentActiveElementIsNotLastItem = currentActiveElementIndex < this.listItemIds.length - 1;
            } if (currentActiveElementIsNotLastItem) {
                const nextListItemId = listeItemIds[currentActiveElementIndex + 1];
                document.querySelector(`#${nextListItemId}`).focus();
            }
            else if (direction === this.UP_ARROW_KEY_CODE) {
                const currentActiveElementIsNotFirstItem = currentActiveElementIndex > 0;
                if(currentActiveElementIsNotFirstItem) {
                    const nextListItemId = listItemIds[currentActiveElementIndex - 1];
                    document.querySelector(`#${nextListItemId}`).focus();
                }
            }
        }
    }
    
}

new Dropdown();


