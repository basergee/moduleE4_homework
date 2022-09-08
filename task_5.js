// Задание 5.

// Переписать консольное приложение из задания №4 на классы.

class Device() {
    constructor(power) {
        this.power = power;
        this.isOn = false;
    }

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
