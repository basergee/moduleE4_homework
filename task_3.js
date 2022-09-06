// Задание 3.

// Написать функцию, которая создает пустой объект, но без прототипа.

function createNew() {
  return Object.create(null);
}


let test_ob = createNew();


console.log(test_ob)
