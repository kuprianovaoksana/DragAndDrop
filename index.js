const list = [
    {title: 'Входящие', color: 'red'},
    {title: 'В процессе', color: 'green'},
    {title: 'Сделано', color: 'yellow'}
];

const elements = [
    {title: 'элемент 1'},
    {title: 'элемент 2'},
    {title: 'элемент 3'},
    {title: 'элемент 4'},
];

const container = document.querySelector('.container_list');
const tasks = document.querySelector('.js-area');
const areas = document.querySelectorAll('.js-area');


document.addEventListener("DOMContentLoaded", initTable());


function initTable () {
    for (let i = list.length - 1; i >= 0; i--) {
        container.insertAdjacentHTML (
            'afterbegin',
            `<div class='container_list_element' style='background: ${list[i].color}'>${list[i].title}</div>`
        );

    }

    for (let i = elements.length - 1; i >= 0; i--) {

        tasks.insertAdjacentHTML (
            'afterbegin',
            `<div class='container_element_element element-${i}' draggable='true'>${elements[i].title}</div>`
        );

        let card = document.querySelector('.container_element_element');
        card.addEventListener('dragstart', startDragging);
        card.addEventListener('dragend', endDragging);
    }

    areas.forEach( area => {
        area.addEventListener('dragover', dragOver);
        area.addEventListener('dragenter', dragEnter);
        area.addEventListener('drop', dragDrop);
    })

    let targetElement;
    
    function startDragging () {
        setTimeout (() => {
            this.classList.add('hide');
            targetElement = this.classList[1];
        }, 0)
    }

    function endDragging () {
        this.classList.remove('hide');
    }

    function dragOver (e) {
        e.preventDefault();
    };

    function dragEnter (e) {
        e.preventDefault();
    };

    function dragDrop () {

        let cardElement = document.querySelector(`.${targetElement}`);
        this.append(cardElement);
    };
};



