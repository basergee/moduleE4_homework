// Задание 5.

// Переписать консольное приложение из задания №4 на классы.

class Device {
    constructor(power) {
        this.power = power;
        this.isOn = false;
    }

    turnOn = function() {
        this.isOn = true;
    }

    turnOff = function() {
        this.isOn = false;
    }

    isTurnedOn = function() {
        return this.isOn;
    }
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


// создадим классы-наследники: лампа и компьютер

class Lamp extends Device {
    constructor(power, colorTemp) {
        super(power);
        this.colorTemp = colorTemp;
    }

    getColorTemp = function() {
        console.log('Свет лампы: ' + this.colorTemp);
    }
}


class Computer extends Device {
    constructor(power, memorySizeInGb) {
        super(power);
        this.memorySizeInGb = memorySizeInGb;
    }

    getMemSize = function() {
        console.log('Объем памяти компьютера: ' + this.memorySizeInGb + 'Гб');
    }
}


// определим объекты
const lamp = new Lamp(50, "Warm");

const pc = new Computer(500, 8);

// сложим все объекты в массив
const devices = [lamp, pc];

console.log('Выведем свойства объектов');
lamp.getColorTemp();
pc.getMemSize();

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
