// Задание 1.

// Написать, функцию, которая принимает в качестве аргумента объект и выводит
// в консоль все ключи и значения только собственных свойств. Данная функция не
// должна возвращать значение.


function foo(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Key: ${key}`, `Value: ${obj[key]}`);
        }
    }
}


const testObj = {
  name: "test_obj",
  field: "f"
}


foo(testObj)
