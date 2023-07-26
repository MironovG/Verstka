/*************************** Скрипт на карту *********************/
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [44.990257, 38.926537],
    zoom: 17,
  });

  let placeMark = new ymaps.Placemark([44.990257, 38.926537], {
    hintContent: "ЖК “Яблоновский”", // Подсказка при наведении на маркер
    balloonContent: "ЖК “Яблоновский”", // Содержимое балуна (всплывающей подсказки)
  });

  myMap.geoObjects.add(placeMark);
}

/********************** Скрипт на переключение блоков  *********************/
let buttons = document.querySelectorAll("button[data-index]");
let tasks = document.querySelectorAll(".test");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let taskId = "number" + this.dataset.index;
    for (let j = 0; j < tasks.length; j++) {
        if (tasks[j].id === taskId){
            tasks[j].style.display = 'block'
        } else{
            tasks[j].style.display = 'none'
        }
    }
  });
}
