let Car = function () {
    this.get = function () {
        this.name = getString('Введите марку авто?', 'KIA');
        this.engine = getExactString('Двигатель работает', 'on', 'on', 'off');
        if (this.engine == 'on') {
            this.step = getExactString('Какая передача', 'd', 'd', 'r', 'p', 'n');
            switch (this.step) {
                case 'p':
                case 'n':
                    alert('Так не поедет');
                    break;
                case 'd':
                case 'r':
                    this.speed = getIntMax('Введите скорость?(Максимум 200км/ч)', 200);
                    this.time = getPositiveInt('Введите время в пути(мин)', 60);
                    this.distance = this.speed * this.time/60;
                    alert(`Вы проехали ${this.distance} км.`);
            }
            return Car;
        } else {
            alert('Сорян, сначана нужно завести двигатель.');
            return Car;
        }
    }
}

let car = new Car;
car.get();
console.log(car);