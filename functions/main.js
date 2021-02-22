//////////////////////////////////////////////////////////////////////////////////////////
// Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.

/**
 * task3Min
 * Возвращает минимум из двух аргументов.
 *
 * @param {number} a первый аргумент для сравнения. 
 * @param {number} b второй аргумент для сравнения.
 * @return {number} минимум из a и b. При равенстве аргументов возвращается b.
 */
let task3Min = (a, b) => (b <= a) ? b : a;
   
/**
 * task3Max
 * Возвращает максимум из двух аргументов.
 *
 * @param {number} a первый аргумент для сравнения. 
 * @param {number} b второй аргумент для сравнения.
 * @return {number} максимум из a и b. При равенстве аргументов возвращается b.
 */
let task3Max = (a, b) => (b >= a) ? b : a;


//////////////////////////////////////////////////////////////////////////////////////////
// Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.

/**
 * task4Print
 * Выведение переданного аргумента в консоль.
 *
 * @param {any} argument аргумент, предназначенный для выведения в консоль.  
 * @return {undefined}
 */
let task4Print = (argument) => console.log(argument);


/**
 * getInt
 * Запрашивает у пользователя целое число через prompt.
 *  
 * @return {number} целое число, введенное пользователем.
 */
function getInt(question, defaultNum) {
    let int;

    while (true) {
        int = prompt(`${question}. (Целое число).`, defaultNum);
        if ((int = int.trim()) == '') continue;
        if (Number.isInteger(int = Number(int))) break;                                                  
    }                                                                       

    return int;
}


/**
 * task4GetInt
 * Запрашивает у пользователя числовые значения начала и конца массива 
 * и создает массив из последовательных чисел.
 * В случае, если значение конца больше начала, меняет местами значения.
 *  
 * @return {object} последовательный массив от минимального значения к максимальному.
 */
function task4CreateArray() {
    let firstArg = getInt('Начало последовательности', -15),
        secodArg = getInt('Конец последовательности', 15),
        start = task3Min(firstArg,secodArg),
        finish = task3Max(firstArg,secodArg),
        createdArray =[];

    while (start <= finish) {
        createdArray.push(start);
        start++;
    }

    return createdArray;
}


///////////////////////////////////////////////////////////////////////////////////////
// Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

/**
 * task5IsEven
 * Проверяет число на чётность.
 *
 * @param {number} arg аргумент для сравнения. 
 * @return {boolean} true, если аргумент чётный. false, если аргумент нечетный.
 */
let task5IsEven = (arg) => arg % 2 == 0;


////////////////////////////////////////////////////////////////////////////////////////
// Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.

/**
 * task6EvenArray
 * Удаляет из массива нечетные значения
 *
 * @param {object} array числовой массив, из которого будут удалятся нечетные значения. 
 * @return {object} преобразованный массив без нечетных значений.
 */
let task6EvenArray = (array) => array.filter(num => task5IsEven(num)); 


////////////////////////////////////////////////////////////////////////////////////////
// Напишите ф-цию, которая рисует следующую пирамидку. 
// Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
// параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
// кроме пробела, то пирамида должна быть нарисована этим символом,
// например:

/**
 * task7Pyramid
 * выстраивает пирамиду из символов
 *
 * @param {number} numOfLevels количество уровней пирамиды.
 * @param {string} char символ, из которого будет состоять пирамида, если неопределен, то каждый уровень пирамиды будет состоять из последней цифры номера уровня. 
 * @return {string} преобразованный массив без нечетных значений.
 */
function task7Pyramid(numOfLevels, char) {
    let pyramid = '';

    for(let level = 1; level <= numOfLevels; level++) {
        if (char == undefined) {
            pyramid += new Array(level).fill(level%10).join('') + '\n';
        } else {
            pyramid += new Array(level).fill(char).join('') + '\n';
        }
    }
    
    return pyramid;
}


////////////////////////////////////////////////////////////////////////////////////////
// Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек: Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
// цию, но которая выведет перевернутый треугольник.

/**
 * getPositiveInt
 * Запрашивает у пользователя целое положительное число через prompt.
 *  
 * @return {number} целое положительное число, введенное пользователем.
 */
function getPositiveInt(question, defaultNum) {
    let positiveInt = getInt(`${question}. Положительное.`, defaultNum);
    if (positiveInt > 0) {
        return positiveInt;
    } else {
        return getPositiveInt(question, defaultNum);
    }
}

/**
 * task8Triangle
 * Выводит равнобедренный треугольник из символов * на экран, высоту вводит пользователь.
 *  
 * @return {string} равнобедренный треугольник из символов *.
 */
function task8Triangle(num) {
    let numOfLevels = getPositiveInt("Введите высоту треугольника", num),
        basis = 2*numOfLevels - 1,
        triangle = '';

    for (let level = 1; level <= numOfLevels; level++) {
        triangle += new Array((basis - level*2 + 1) / 2).fill(' ').concat(new Array(level*2 - 1).fill('*'), new Array((basis - level*2 + 1) / 2).fill(' ')).join('')+ '\n';
    }

    return triangle;
}


/**
 * task8TriangleReverse
 * Выводит перевернутый равнобедренный треугольник из символов * на экран, высоту вводит пользователь.
 *  
 * @return {string} перевернутый равнобедренный треугольник из символов *.
 */
function task8TriangleReverse(num) {
    let numOfLevels = getPositiveInt("Введите высоту перевернутого треугольника", num),
        basis = 2*numOfLevels - 1,
        triangle = '';

    for (let level = numOfLevels; level >= 1; level--) {
        triangle += new Array((basis - level*2 + 1) / 2).fill(' ').concat(new Array(level*2 - 1).fill('*'), new Array((basis - level*2 + 1) / 2).fill(' ')).join('')+ '\n';
    }

    return triangle;
}

////////////////////////////////////////////////////////////////////////////////////////
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.

/**
 * sumNumeralsOfNumber
 * возвращает сумму цифр числа
 *
 * @param {number} number число, сумму цифр которого надо получить.
 * @return {number} сумма цифр числа number. 
 */
let sumNumeralsOfNumber = (number) => Array.from(`${number}`).map(Number).reduce((acc, value) => acc + value);


/**
 * recursiveSumNumeralsOfNumber
 * возвращает сумму цифр числа, если получившееся значение больше 9, повторяет дейтвие с этим значением
 *
 * @param {number} number число, сумму цифр которого надо получить.
 * @return {number} сумма после всех рекурсивных вызовов (меньше либо равно 9). 
 */
let recursiveSumNumeralsOfNumber = function (number) {
    let sum = sumNumeralsOfNumber(number);
    if (sum > 9) return recursiveSumNumeralsOfNumber(sum);
    return sum;
}

////////////////////////////////////////////////////////////////////////////////////////
// Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.

/**
 * task11Print
 * распечатывает в консоль переданный в качестве аргумента массив
 *
 * @param {object} array массив, который надо распечатать.
 * @return {undefined} 
 */
function task11Print (array) {
    if (array.length != 0) {  
        task11Print(array.slice(0, array.length - 1));
        console.log(array[array.length - 1]); 
    }
}


////////////////////////////////////////////////////////////////////////////////////////
// Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
// группы студента и выводящую введённые данные в следующем виде:
// *******************************
// * Домашняя работа: «Функции»  *
// * Выполнил: студент гр. W4017 *
// * Иванов Иван Иванович        *
// *******************************
// Размер рамки должен определятся автоматически по самой длинной строке.
// Рамку вывести в консоль.


/** 
* getString
* Запрашивает у пользователя строку
*
* @param {string} question пояснение, какую строку необходимо ввести.
* @param {string} defaultString предложение ввода по умолчанию (необязательный параметр).
* @return {string} введённая пользователем строка.
*/
function getString(question, defaultString) {
    string = prompt(question, defaultString);
    if ((string = string.trim()) == '') getString(question, defaultString);
    return string;
}

/** 
* homeworkInfo
* Запрашивает у пользователя номер группы и ФИО и выводит многострочное сообщение-подпись к ДЗ
*
* @return {string} многострочное сообщение-подпись к ДЗ.
*/
function homeworkInfo(groupname, firstName, lastName, patronym) {
    let theme = `* Домашняя работа: «Функции»`,
        group = `* Выполнил: студент гр. ${getString('Ваша группа?', groupname)}`,
        name = `* ${getString('Ваша фамилия?',lastName)} ${getString('Ваше имя?',firstName)} ${getString('Ваше отчество?',patronym)}`,
        length = [theme, group, name].reduce((len, curStr) => (curStr.length > len) ? curStr.length : len, 0);
        line = new Array(length + 2).fill('*').join('');
        generateString = (str) => str + new Array(length - str.length).fill(' ').join('') + ' *';

    return line + '\n' + generateString(theme) + '\n' + generateString(group) + '\n' + generateString(name) + '\n' + line;   
}
