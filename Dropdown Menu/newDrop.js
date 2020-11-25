
// Crear element data url en cada elemento
// set url to button if data url ===

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

        this.listItems.forEach(item => this.listItemIds.push(item.id));
        console.log(this.listItemIds[0]);
        this.keyboardHandler();

        this.dropdownSelectedNode.addEventListener("click", e =>
                                      this.toggleListVisibility(e)
                                     );
        this.dropdownArrow.addEventListener('click', this.toggleListVisibility);

        this.dropdownSelectedNode.addEventListener("keydown", e =>
                                            this.toggleListVisibility(e)
                                            );
        this.dropdownArrow.addEventListener('keydown', this.toggleListVisibility);

        this.list.addEventListener('click', this.urlDirector);

    }

    keyboardHandler() {
        this.listItems.forEach(item => {
            item.addEventListener('click', e => {
                this.setSelectedListItem(e);
                this.closeList();
                this.linkSelection();
                this.urlDirector();
            });
            item.addEventListener('keydown', e => {
                switch (e.keyCode) {
                    case this.ENTER_KEY_CODE:
                    this.setSelectedListItem(e);
                    this.closeList();
                    return;

                    case this.DOWN_ARROW_KEY_CODE:
                        this.focusNextListItem(DOWN_ARROW_KEY_CODE);
                        return;

                    case this.UP_ARROW_KEY_CODE:
                        this.focusNextListItem(UP_ARROW_KEY_CODE);
                        return;

                    case this.ESCAPE_KEY_CODE:
                        this.closeList();
                        return;

                    default:
                        return;
                }
            });
        });

    }

    setSelectedListItem(e) {
        let selectedTextToAppend = document.createTextNode(e.target.innerText);
        this.dropdownSelectedNode.innerHTML = null;
        this.dropdownSelectedNode.appendChild(selectedTextToAppend);
    }

    closeList() {
        this.list.classList.remove('open');
        this.dropdownArrow.classList.remove('expanded');
        this.listContainer.setAttribute('aria-expanded', false);
    }

    toggleListVisibility(e) {
        let openDropDown =
        this.SPACEBAR_KEY_CODE.includes(e.keyCode) || e.keyCode === this.ENTER_KEY_CODE;

        if (e.keyCode === this.ESCAPE_KEY_CODE) {
            this.closeList();
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
        console.log(document.activeElement.id);
        if(activeElementId === 'dropdown_selected') {
            document.querySelector(`#${this.listItemIds[0]}`).focus();
        } else {
            const currentActiveElementIndex = listItemIds.indexOf(activeElementId);
            if(direction === this.DOWN_ARROW_KEY_CODE) {
                const currentActiveElementIsNotLastItem = currentActiveElementIndex < this.listItemIds.length - 1;
            } if (currentActiveElementIsNotLastItem) {
                const nextListItemId = this.listItemIds[currentActiveElementIndex + 1];
                document.querySelector(`#${nextListItemId}`).focus();
            }
            else if (direction === this.UP_ARROW_KEY_CODE) {
                const currentActiveElementIsNotFirstItem = currentActiveElementIndex > 0;
                if(currentActiveElementIsNotFirstItem) {
                    const nextListItemId = this.listItemIds[currentActiveElementIndex - 1];
                    document.querySelector(`#${nextListItemId}`).focus();
                }
            }
        }
    }

    linkSelection() {
        const yachtVendor = 'https://www.planeta-mujer.org';
        const progressiveUrl = 'https://www.feel-like-dancing.com'
        const selections = document.querySelectorAll('.dropdown_list-item');
        const allSelections = Array.prototype.slice.call(selections);
        allSelections.map( selection => {
            selection.id === 'option-6' ?
            selection.setAttribute('data-url', `${yachtVendor}`) :
            selection.setAttribute('data-url', `${progressiveUrl}`);
        })
        console.log(allSelections);
        console.table(allSelections);
    }

    urlDirector(e) {
        const gotoUrlBtn = document.getElementById('url');
        gotoUrlBtn.setAttribute('href', e.target.dataset.url);
        // gotoUrlBtn.addEventListener('click', function(e) {
            // if(dropdownSelectedNode.textContent === 'Yacht') {
            //     console.log(allSelections[5].dataset.url);
            //     gotoUrlBtn.setAttribute('href', `${allSelections[5].dataset.url}`);
            // }
            // console.log(e.target);

        // })


    }

}

new Dropdown();


// class LinkSelector{
//     constructor(option) {
//         this.button = document.querySelector('#url');
//         console.log(this.button);
//         this.option = option;
//         this.build();
//     }
//     build() {
//         var self = this;
//         self.button.addEventListener('click', function() {
//             var dropdownSelection = document.querySelector('#dropdown_selected').textContent;
//             if (dropdownSelection === 'Personal Watercraft') {
//                 var url = self.option.personalWatercraft.url;
//                 self.button.setAttribute('href', `${url}`);
//             }
//             if (dropdownSelection === 'Motorboat') {
//                 var url = self.option.motorBoat.url;
//                 self.button.setAttribute('href', `${url}`);
//             }
//         });

//     }
// }