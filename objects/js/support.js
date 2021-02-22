/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ

function getString(question, defaultString) {
    let string = prompt(question, defaultString);
    if ((string = string.trim()) == '') getString(question, defaultString);
    return string;
}
function getExactString(question, defaultString, ...variants) {
    let string = getString(`${question}(Варианты: ${variants})`, defaultString);
    if (variants.includes(string)) return string;
    return getExactString(question, defaultString, ...variants);
}

function getIntMax(question, maxNum) {
    let positiveInt = getInt(`${question}. Больше нуля и меньше либо равно ${maxNum}`);
    if (positiveInt > 0 && positiveInt <= maxNum) {
        return positiveInt;
    } else {
        return getIntMax(question, maxNum);
    }
}
function getInt(question, defaultNum) {
    let int;

    while (true) {
        int = prompt(question, defaultNum);
        if ((int = int.trim()) == '') continue;
        if (Number.isInteger(int = Number(int))) break;                                                  
    }                                                                       

    return int;
}
function getNumber(question, defaultNum) {
    let num;

    while (true) {
        num = prompt(question, defaultNum);
        if ((num = num.trim()) == '') continue;
        if (!Number.isNaN(num = Number(num))) break;                                                  
    }                                                                       

    return num;
}
function getPositiveNumber(question, defaultNum) {
    let positiveNum = getNumber(question, defaultNum);
    if (positiveNum > 0) {
        return positiveNum;
    } else {
        return getPositiveNumber(question, defaultNum);
    }
}
function getPositiveNumberMax(question, max) {
    let positiveNum = getPositiveNumber(question, max);
    if (positiveNum <= max) {
        return positiveNum;
    } else {
        return getPositiveNumberMax(question, max);
    }
}

function getPositiveInt(question, defaultNum) {
    let positiveInt = getInt(question, defaultNum);
    if (positiveInt > 0) {
        return positiveInt;
    } else {
        return getIntMax(question, defaultNum);
    }
}

function getPositiveIntMin(question, min) {
    let positiveInt = getInt(question, min);
    if (positiveInt >= 18) {
        return positiveInt;
    } else {
        return getPositiveIntMin(question, min);
    }
}

function getPhone() {
    let phone = getString('Введите телефон?(белорусский)', '+375295862040');
    if (checkPhone(phone)) return phone;
    return getPhone();
}

function checkPhone (phone)  {
    phone = phone.match(/\d/g).join('');
    let regexp = /(?:375|80)(?:33|44|29|25|17|21|16|23|15|22)\d{7}/g;

    return (phone.match(regexp) == null) ? false : (phone.match(regexp)[0] == phone);
}
