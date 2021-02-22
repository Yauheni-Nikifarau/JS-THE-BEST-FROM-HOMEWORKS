process();

function process() {
    saler = new Saler('Ашот', 1, 3, 1, 5, 7);
    buyer = new Buyer(getString('Введите ваше имя', 'Гоги'), 300);
    order = new Order();
    situation = new MarketSituation(buyer, saler, order);
    situation.protocol();
};

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//ОБЪЕКТ СИТУАЦИЯ НА РЫНКЕ
function MarketSituation(buyer, saler, order) {
    this.buyer = buyer;
    this.saler = saler;
    this.order = order;
    this.protocol = function () {
        this.buyer.sayHi();
        this.saler.sayHi();
        for (let item of this.saler.goods) {
            this.saler.offer(item);
            let quantityOfItems = buyer.iWill(item);
            if (quantityOfItems) {
                this.order.addToOrder(item, quantityOfItems);
            }
        }
        this.order.info();
        if (!this.order.askToConfirm(buyer)) {
            for (let item = 0; item < this.order.order.length; item++) {
                if (confirm(`Вы хотите удалить из заказа ${this.order.order[item][0].name}?`)) {
                    alert('Галя, отмена!');
                    this.order.orderSum -= this.order.order[item][1] * this.order.order[item][0].price;
                    this.order.order.splice(item, 1);
                    item--;
                }
            }
            this.order.info();
        }
        if (this.order.orderSum == 0) {
            alert('Вы ничего у меня не купили, такой покупатель нам не нужен.');
        } else if (this.order.orderSum <= this.buyer.availableSum) {
            alert(`${this.buyer.name}, вы оформили заказ на ${this.order.orderSum}$. Пожалуйста, гоните бабос.`);
            this.buyer.availableSum -= this.order.orderSum;
            this.saler.amount += this.order.orderSum;
            for (let item of this.order.order) {
                this.buyer.bag.push(item);
                let index;
                for (let i = 0; i < this.saler.goods.length; i++) {
                    if (this.saler.goods[i][0] == item[0]) index = i;
                }
                if (item[1] == this.saler.goods[index][1]) {
                    this.saler.goods.splice(index,1);
                } else {
                    this.saler.goods[index][1] -= item[1];
                } 
            } 
        } else {
            alert('Вы забыли заработать достаточно денег. Вернитесь позже.');
        }
        this.buyer.info();
        this.saler.info();
    }
}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//ОБЪЕКТ ПРОДАВЕЦ
function Saler(name, q1, q2, q3, q4, q5) {
    this.amount = 0;
    this.name = name;
    this.goods = [[new Good('Ноутбук', "Какой-то рабочий", 555), q1],
                  [new Good("Мяч", "красный, круглый", 5), q2],
                  [new Good("Брюки", "Чёрные, обе штанины на месте", 35), q3],
                  [new Good("Карандаш", "Твёрдо-мягкий", 1), q4],
                  [new Good("Пивасик", "Светлый, пшеничный, нефильтрованный", 2), q5]];
    this.sayHi = function () {
        alert(`${this.name}: Привет, я ${this.name}!`);
    }
    this.offer = function (good) {
        alert(`${this.name}: У меня есть ${good[0].name}.\n
                Описание: ${good[0].shortDescription}.\n
                Количество в наличии: ${good[1]}.\n
                Цена: ${good[0].price}$.`)
    }
    this.info = function () {
        let message = `${this.name}: У меня в наличии:\n`
        for (let good of this.goods) {
            message += `${good[0].name} --- ${good[1]}ед.\n`
        }
        message += `И ${this.amount}$.`
        alert(message);
    }   
}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//ОБЪЕКТ ПОКУПАТЕЛЬ
function Buyer(name, availableSum) {
    this.bag = [];
    this.name = name;
    this.availableSum = availableSum;
    this.sayHi = function () {
        alert(`${this.name}: Привет, я ${this.name}! У меня есть ${this.availableSum}$.`);
    }
    this.iWill = function (good) {
        if (confirm(`${this.name}: Я буду покупать ${good[0].name}?`)) {
            return getIntMax(`${this.name}: Я возьму ... единиц товара ${good[0].name}. (Максимум ${good[1]}).`, good[1]);
        }   
    }
    this.info = function () {
        let message = `${this.name}: у меня осталось ${this.availableSum}$.\nВ моей сумке:\n`
        for (let good of this.bag) {
            message += `${good[0].name} --- ${good[1]}ед.\n`
        }
        alert(message);
    }
}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//ОБЪЕКТ ТОВАР
function Good(name, shortDescription, price) {
    this.name = name;
    this.shortDescription = shortDescription;
    this.price = price;
}
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//ОБЪЕКТ ЗАКАЗ
function Order() {
    this.order = [];
    this.orderSum = 0;
    this.addToOrder = function(good, quantity) {
        this.order.push([good[0], quantity]);
        this.orderSum += good[0].price * quantity;
    }
    this.info = function () {
        let message = 'У вас в корзине: \n';
        for (let good of this.order) {
            message += `${good[0].name} ----- ${good[1]}\n`;
        }
        message += `Всего: ${this.orderSum}$.`;
        alert(message);
    }
    this.askToConfirm = function (buyer) {
        return confirm(`${buyer.name}, вы заказали на ${this.orderSum}$. У вас ${buyer.availableSum}$. Будете брать?`);
    }
}






