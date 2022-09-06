// Задание 2.

// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

function hasProperty(p, obj) {
    let result = false;
    for (let key in obj) {
        if (key === p) {
            result = true;
            break;
        }
    }
    return result;
}


let test_ob = {
  name: "test",
  prop: 12
}


console.log(hasProperty("name", test_ob))
console.log(hasProperty("prop", test_ob))
console.log(hasProperty("no", test_ob))
