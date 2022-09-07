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


const lamp = new Device(50);
lamp.colorTemp = "Warm"

const pc = new Device(500);
pc.memoryInGb = 8

console.log(lamp.isTurnedOn())
console.log(pc.isTurnedOn())

lamp.turnOn()

console.log(lamp.isTurnedOn())
console.log(pc.isTurnedOn())

console.log(pc.memoryInGb)
