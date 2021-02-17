//класс Section который отвечает за отрисовку элементов на странице

export class Section {

    //конструктор, который принимает объект (внутри объекта массив для добавления на страницу при инициализации и функция которая отвечает за создание и отрисовку данных на страницк) и контейнер в который нужно добавлять созданные элементы.
    
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }

    //публичный метод, который отвечает за отрисовку всех элементов

    renderItems() {
        this._items.forEach(item => this._renderer(item))
    }

    //публичный метод который принимает DOM-элемент и добавляет его в контейнер.

    addItem(element) {
        this._containerSelector.append(element);
    }
}