// Задание 4.

// Реализовать следующее консольное приложение на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать
// потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и
// компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.


function Device(power) {
    this.power = power,
    this.isOn = false,

    this.turnOn = function() {
        this.isOn = true;
    },

    this.turnOff = function() {
        this.isOn = false;
    },

    this.isTurnedOn = function() {
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

// определим объекты
const lamp = new Device(50);
lamp.colorTemp = "Warm"

const pc = new Device(500);
pc.memoryInGb = 8

// сложим все объекты в массив
const devices = [lamp, pc];

// проверим состояние некоторых объектов
console.log(lamp.isTurnedOn())
console.log(pc.isTurnedOn())
console.log(pc.memoryInGb)

// включим лампу
lamp.turnOn()

// узнаем потребляемую мощность устройств
console.log(calcPower(devices));

console.log(lamp.isTurnedOn())
console.log(pc.isTurnedOn())

// включим компьютер
pc.turnOn()

// узнаем потребляемую мощность устройств
console.log(calcPower(devices));
