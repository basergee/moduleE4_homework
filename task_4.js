// Задание 4.

// Реализовать следующее консольное приложение на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать
// потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и
// компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.


function Device(power) {
    this.power = power;
    this.isOn = false;
}


Device.prototype.turnOn = function() {
    this.isOn = true;
}


Device.prototype.turnOff = function() {
    this.isOn = false;
}


Device.prototype.isTurnedOn = function() {
    return this.isOn;
}


// Считает потребляемую мощность включенных устройств из массива divices
const calcPower = function(devices) {
    let p = 0;
    for (let d = 0; d < devices.length; d++) {
        if (devices[d].isTurnedOn()) {
            p += devices[d].power;
        }
    }

    return `Потребляемая мощность ${p} кВт`;
}

// определим объекты
const lamp = new Device(50);
lamp.colorTemp = "Warm"

const pc = new Device(500);
pc.memoryInGb = 8

// сложим все объекты в массив
const devices = [lamp, pc];

console.log('Выведем свойства объектов')
console.log('Свет лампы: ' + lamp.colorTemp)
console.log('Объем памяти компьютера: ' + pc.memoryInGb + 'Гб')

console.log('------------------------')

console.log('Проверим состояние некоторых объектов')
console.log('Лампа включена? ' + lamp.isTurnedOn())
console.log('Компьютер включен? ' + pc.isTurnedOn())

console.log('------------------------')

console.log('Включим лампу')
lamp.turnOn()

// узнаем потребляемую мощность устройств
console.log(calcPower(devices));

console.log('Лампа включена? ' + lamp.isTurnedOn())
console.log('Компьютер включен? ' + pc.isTurnedOn())

console.log('------------------------')

console.log('Включим компьютер')
pc.turnOn()

// узнаем потребляемую мощность устройств
console.log('Лампа включена? ' + lamp.isTurnedOn())
console.log('Компьютер включен? ' + pc.isTurnedOn())
console.log(calcPower(devices));
