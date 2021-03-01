let Lamp = function (name, watt) {
    name = name || 'Xiaomi';
    watt = watt || 10;
    let status = false;
    this.on = function () {
        status = true;
    }
    this.off = function () {
        status = false;
    }
    this.getStatus = function () {
        return status;
    }
}

let EconomicLamp = function (name, watt, tarif) {
    Lamp.apply(this, arguments);
    let on = this.on,
        off = this.off,
        timeStart, timeEnd,
        pay = 0;
        
    tarif = tarif || 0.19,
        
    this.on = function () {
        on.call(this);
        timeStart = new Date();
        timeStart = timeStart.getTime();
    }
    this.off = function () {
        off.call(this);
        timeEnd = new Date();
        timeEnd = timeEnd.getTime();
        this.check();
    }
    this.check = function () {
        let time = timeEnd - timeStart;
        pay += (time / 3600000) * (watt / 1000);
    }
    this.alertCheck = function () {
        console.log(`Вам счёт на ${pay} р.`);
    }
    this.resetPay = function () {
        pay = 0;
    }
}

let xiaomi = new EconomicLamp ('xiaomi', 10, 20);