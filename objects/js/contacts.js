let Contacts = function () {
    let Contact = function (name, surname, age, phone) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.phone = phone;
    }

    this.blocknote = [];
    
    this.createContact = function () {
        let name = getString('Введите имя'),
            surname = getString('Введите фамилию'),
            age = getPositiveIntMin('Введите возраст?(старше 18)', 18);
            phone = getPhone(),
            contact = new Contact(name, surname, age, phone);

        this.blocknote.push(contact);
    }

    this.addingContacts = function () {
        if (confirm('Хотите добавить контакт?')) {
            do {
                this.createContact();
            } while (confirm('Хотите добавить еще контакт?'));
        }
    }

    this.removing = function () {
        if (confirm('Хотите удалить контакт?')) {
            do {
                if (this.blocknote.length == 0) {
                    alert('У вас и так никого нет в контактах.');
                    break;
                }
                alert('Выберите номер контакта, который хотите удалить');
                this.info();
                let key = getPositiveInt("Введите номер контакта, который хотите удалить.") - 1;
                if (key >= this.blocknote.length) {
                    alert('Нет контакта под таким номером.');
                } else {
                    this.removeContact(key);
                }
            } while (confirm('Хотите удалить еще контакт?'));
        }
    }

    this.info = function () {
        let message = '';
        for (let i = 0; i < this.blocknote.length; i++) {
            message += `${i+1}. Имя: ${this.blocknote[i].name} ---- Фамилия: ${this.blocknote[i].surname}.\nТелефон: ${this.blocknote[i].phone} ---- Возраст: ${this.blocknote[i].age}.\n`
        }
        alert(message);
    }

    this.removeContact = function (i) {
        this.blocknote.splice(i,1);
        alert('Контак удалён!');
    }

    this.get = function () {
        if (confirm('Поиграемся с контактами?')) {
            this.addingContacts();
            this.info()
            this.removing();
            this.info()
        }
        return Contacts;
    }
}


let Contact = function (name, surname, age, phone) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.phone = phone;
}

let blocknote = new Contacts();
blocknote.get();
console.log(blocknote);