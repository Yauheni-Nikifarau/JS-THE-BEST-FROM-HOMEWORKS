//////////////////////////////////////////////////////////
// СБОРКА
let site = document.createElement("div");
site.classList.add("site");

let todoList = document.createElement("div");
todoList.classList.add("todolist");

let todoListTitle = document.createElement("p");
todoListTitle.classList.add("todolist-title");
todoListTitle.textContent = "todo list";

let todoListInput = document.createElement("div");
todoListInput.classList.add("todolist-input");

let todoInput = document.createElement("input");
todoInput.setAttribute("type", "text");
todoInput.setAttribute("placeholder", "Введите пункт");

let todoListItems = document.createElement("div");
todoListItems.classList.add("todolist-items");

let clear = document.createElement("div");
clear.classList.add("list-clear");
clear.textContent = "Очистить";


todoListItems.appendChild(clear);
todoListInput.appendChild(todoInput);
todoList.appendChild(todoListTitle);
todoList.appendChild(todoListInput);
todoList.appendChild(todoListItems);
site.appendChild(todoList);
document.body.appendChild(site);

clear.addEventListener('click', function () {
    let toDelete = todoListItems.querySelectorAll(".todolist-item");
    toDelete.forEach(element => todoListItems.removeChild(element));
})

//////////////////////////////////////////////////////////////
// КОНСТРУКТОР

let Item = function (value) {
    this.todoItem = document.createElement("div");
    this.todoItem.classList.add("todolist-item");

    this.itemCheckbox = document.createElement("div");
    this.itemCheckbox.classList.add("item-checkbox");

    this.itemText = document.createElement("p");
    this.itemText.classList.add("item-text");
    this.itemText.textContent = value;

    this.itemClose = document.createElement("div");
    this.itemClose.classList.add("item-close");

    this.Span = function () {
        this.element = document.createElement("span");
        return this.element;
    }

    this.itemCheckbox.appendChild(this.Span());
    this.itemCheckbox.appendChild(this.Span());
    this.itemClose.appendChild(this.Span());
    this.itemClose.appendChild(this.Span());
    this.todoItem.appendChild(this.itemCheckbox);
    this.todoItem.appendChild(this.itemText);
    this.todoItem.appendChild(this.itemClose);

    return this.todoItem;
}

//////////////////////////////////////////////////////////////////////////////
// ФУНКЦИИ 

todoInput.addEventListener("keyup", function () {
    if ((event.code == "Enter" || event.code == "NumpadEnter") && (this.value = this.value.trim()) != '') {
        let item = new Item(this.value);
        this.value = '';
        todoListItems.insertBefore(item, clear);
        let checkbox = item.querySelector(".item-checkbox");
        checkbox.addEventListener("click", function () {
            item.classList.toggle("checked");
        });
        let text = item.querySelector(".item-text");
        text.addEventListener("click", function () {
            if (confirm('Хотите изменить пункт?')) {
                let newValue = getString('Введите новое значение');
                text.textContent = newValue;
            }
        })
        let close = item.querySelector(".item-close");
        close.addEventListener("click", function () {
            item.classList.toggle("checked");
            item.remove();
        });
    }
})



function getString(question, defaultString) {
    let string = prompt(question, defaultString);
    if ((string = string.trim()) == '') getString(question, defaultString);
    return string;
}
