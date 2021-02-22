let Lamp = function () {
    this.get = function () {
        this.cost = getPositiveNumber('Введите стоимость электроэнергии(руб)', 0.19);
        this.power = getExactString('Лампочка включена', 'on', 'on', 'off');
        if (this.power == 'on') {
            this.watt = getPositiveInt('Введите мощность лампочки(Ватт)', 100);
            this.time = getPositiveInt('Введите время работы лампы(мин)', 360);
            this.sum = (this.watt/1000) * (this.time/60) * this.cost;
            alert(`У вас счёт за электроэнергию на ${this.sum.toFixed(2)} руб.`);            
            return Lamp;
        } else {
            alert('По нулям, лампочка не работает');
            return Lamp;
        }
    }
}

let lamp = new Lamp;
lamp.get();
console.log(lamp);