let Blocknote = function (id) {
    let contacts = new Array(),
        element = document.querySelector(`#${id}`),
        tableElem = document.createElement('table'),
        controlPanel = document.createElement('div'),
        buttonAdd = document.createElement('button'),
        buttonRemove = document.createElement('button'),
        self = this;

    tableElem.classList.add('table-contacts');
    buttonAdd.textContent = 'Добавить контакт';
    buttonAdd.classList.add('add');
    buttonRemove.textContent = 'Удалить контакт';
    buttonRemove.classList.add('remove');
    controlPanel.appendChild(buttonAdd);
    controlPanel.appendChild(buttonRemove);
    element.append(tableElem);
    element.append(controlPanel);
    
    this.addContact = function (contact) {
        contacts.push(contact);
    }
    this.removeContact = function (number) {
        contacts.splice(number-1,1);
    }
    this.getContact = function () {
        let name = getString('Введите имя контакта?'),
            surname = getString('Введите фамилию контакта'),
            phone = getPhone(),
            contact = new Contact(name, surname, phone),
            message = `Предлагается добавить контакт: \nИмя: ${name}\nФамилия: ${surname}\nТелефон: ${phone}.`;
        if (confirm(message)) return contact;
    }


    this.update = function () {
        let table = '<thead><tr><th>Номер</th><th>Имя</th><th>Фамилия</th><th>Телефон</th></tr></thead><tbody>',
            num = 1;
        for (let contact of contacts) {
            table += `<tr><td>${num}</td><td>${contact.name}</td><td>${contact.surname}</td><td>${contact.phone}</td></tr>`;
            num++;
        }
        table += '</tbody>';
        element.querySelector('.table-contacts').innerHTML = table;
    }
    this.getContactsList = function () {
        return contacts;
    }

    controlPanel.querySelector('.remove').addEventListener('click', function () {
        let num = getIntMinMax('Введите номер удаляемого контакта', 1, contacts.length);
        self.removeContact(num);
        self.update();
    });
    controlPanel.querySelector('.add').addEventListener('click', function () {
        let contact = self.getContact();
        if (contact != undefined) self.addContact(contact);
        self.update();
    });
}

let Contact = function (name, surname, phone) {
    this.name = name;
    this.surname = surname;
    this.phone = phone;
}

// let firstBlocknote = new Blocknote('contacts');
// firstBlocknote.addContact(new Contact('Евгений', 'Никифоров', '+375333467666'));
// firstBlocknote.addContact(new Contact('Никитос', 'Евлампьев', '+375444567821'));
// firstBlocknote.addContact(new Contact('Партос', 'Геннадьев', '+375331234567'));
// firstBlocknote.addContact(new Contact('Арамис', 'Жернов', '+375297845698'));
// firstBlocknote.addContact(new Contact('Дантос', 'Дантосин', '+3752943861578'));
// firstBlocknote.update();


let searchBlocknote = function (id) {
    Blocknote.apply(this, arguments);
    let self = this;
    this.search = function (str) {
        str = str.toLowerCase();
        let contacts = self.getContactsList();
        let arResult = new Array();
        for (let contact of contacts) {
            for (let note in contact) {
                note = contact[note].toLowerCase();
                if (note.includes(str)) {
                    arResult.push(contact);
                    break;
                }
            }
        }
        let table = '<thead><tr><th>Номер</th><th>Имя</th><th>Фамилия</th><th>Телефон</th></tr></thead><tbody>',
            num = 1;
        for (let contact of arResult) {
            table += `<tr><td>${num}</td><td>${contact.name}</td><td>${contact.surname}</td><td>${contact.phone}</td></tr>`;
            num++;
        }
        table += '</tbody>';
        element.querySelector('.table-contacts').innerHTML = table;
    }
    let searchInput = document.createElement('input'),
        searchFunc = this.search,
        element = document.querySelector(`#${id}`);
    searchInput.classList.add('search');
    element.append(searchInput);
    element.querySelector('.search').addEventListener('keyup', function (event) {
        if (event.code == "Enter") {
            searchFunc(this.value);
            this.value = '';
        }
    });
    let reset = document.createElement('button');
    reset.textContent = 'Сбросить поиск';
    reset.classList.add('reset');
    element.appendChild(reset);
    reset = element.querySelector('.reset');
    reset.addEventListener('click', function (event) {
        self.update();
    });
}

let blocknote2 = new searchBlocknote('contacts2');
blocknote2.addContact(new Contact('Евгений', 'Никифоров', '+375333467666'));
blocknote2.addContact(new Contact('Никитос', 'Евлампьев', '+375444567821'));
blocknote2.addContact(new Contact('Партос', 'Геннадьев', '+375331234567'));
blocknote2.addContact(new Contact('Арамис', 'Жернов', '+375297845698'));
blocknote2.addContact(new Contact('Дантос', 'Дантосин', '+3752943861578'));
blocknote2.update();