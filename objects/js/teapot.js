let Teapot = function () {
    this.get = function () {
        this.name = getString('Введите марку чайника?', 'Maunfeld');
        this.watt = getPositiveInt('Введите мощность чайника(Ватт)', 1600);
        this.power = getExactString('Чайник включен', 'on', 'on', 'off');
        if (this.power == 'on') {
            this.volume = getPositiveNumberMax('Введите объём воды в чайнике?(Максимум 2.0 л)', 2.0);
            this.startTemperature = getIntMax('Введите начальную температуру воды', 100);
            let hotTime = (this.volume * 4200 * (100 - this.startTemperature))/1000;
            this.time = (hotTime / (this.watt / 1000)) / 60;
            alert(`Вода закипит через ${this.time.toFixed(2)} мин.`);
            return Teapot;
        } else {
            alert('Так не закипит.');
            return Teapot;
        }
    }
}

let maunfeld = new Teapot;
maunfeld.get();
console.log(maunfeld);