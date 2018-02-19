(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function furnitureMatch() {

    var words = ["espejo", "ordenador", "mesa", "sofa", "ventana", "cuaderno", "frigorifico"];
    var answers = ["sirve para mirarnos por la manana o por la noche", "podemos verificar las informaciones, hablar con nuestros amigos", "hizo de madera, podemos poner la comida sobre ella", "en frente de la tele en cada sala de estar", "nos da la luz en una habitacion", "la decoracion en un muro de una habitacion", "el lugar frio donde ponemos la comida"];

    var word = [];
    for (var i = 0; i < words.length; i++) {
        word.push('<li data-index="' + (i + 1) + '">' + words[i] + '</li>');
    }

    var answer = [];
    for (var _i = 0; _i < answers.length; _i++) {
        answer.push('<li data-index="' + (_i + 1) + '">' + answers[_i] + '</li>');
    }

    function shuffle(o) {
        for (var j, x, _i2 = o.length; _i2; j = Math.floor(Math.random() * _i2), x = o[--_i2], o[_i2] = o[j], o[j] = x) {}
        return o;
    }

    answer = shuffle(answer);
    word = shuffle(word);

    $('.source').html(word);
    $('.target').html(answer);

    $(".source li").draggable({
        revert: "invalid",
        revertDuration: 200,
        cursor: "move"
    });

    $(".target li").droppable({
        accept: function accept(draggable) {

            if (parseInt(draggable.data('index'), 10) === parseInt($(this).data('index'), 10)) {
                return true;
            } else {
                return false;
            }
        },
        drop: function drop(event, ui) {
            var that = $(this);
            that.css('color', '#50c3b7').effect('bounce');
            that.droppable('disable');
            ui.draggable.draggable('disable');
        }

    });
}

exports.default = furnitureMatch;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function quiz() {
    var exerciseBtn = document.querySelector("#exercise-btn");
    var subCat5 = document.querySelector("#section4ex");
    var answers = document.querySelectorAll(".answers input");

    [].concat(_toConsumableArray(answers)).forEach(function (el) {
        el.addEventListener("click", function () {
            var datasetVal = el.getAttribute("data-ans");
            if (datasetVal === "ok") {
                el.nextElementSibling.style.color = "#50c3b7";
            } else {
                el.nextElementSibling.style.color = "red";
            }
        });
    });

    exerciseBtn.addEventListener("click", function () {
        this.parentElement.parentElement.style = "none";
        subCat5.style.display = "block";
    });
}

exports.default = quiz;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function slider() {

    var butPrev = document.querySelector("#prevPicture");
    var butNext = document.querySelector("#nextPicture");
    var slide = document.querySelector(".sliderList").children;
    var tab = [];

    for (var i = 0; i < slide.length; i++) {
        tab.push(slide[i]);
    }

    var index = 0;
    tab[index].classList.add('visible');

    var next = function next() {
        tab[index].classList.remove('visible');
        index++;
        if (index >= tab.length) {
            index = 0;
        }
        tab[index].classList.add("visible");
    };

    var prev = function prev() {
        tab[index].classList.remove('visible');
        index--;
        if (index < 0) {
            index = tab.length - 1;
        }

        tab[index].classList.add("visible");
    };

    butPrev.addEventListener("click", prev);
    butNext.addEventListener("click", next);
}

exports.default = slider;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function trueOrFalse() {

    var sectionOneList = document.querySelector("#section-one-list");
    var sentences = [{ answer: "false", phrase: " Las fritas patatas son muy sanas." }, { answer: "true", phrase: "El presidente es una profesion muy seria." }, { answer: "true", phrase: " Cuando la gente esta triste, escucha la musica." }, { answer: "true", phrase: "Osos tienen las cabezas muy grandes." }, { answer: "true", phrase: "Mi profesor de espanol es baja." }, { answer: "true", phrase: "Vaticano es un pais pequeno." }, { answer: "false", phrase: "Cuando hace frio, vamos a la playa." }, { answer: "false", phrase: " Mi abuela es una mujer muy joven." }, { answer: "true", phrase: "Varsovia es una ciudad vieja." }, { answer: "true", phrase: " Michael Jordan es un hombre alto." }, { answer: "false", phrase: "Baloncesto es un deporte dificil." }, { answer: "false", phrase: " Chino no es un idioma complicado." }, { answer: "false", phrase: "Perros no son animales simpaticos." }, { answer: "true", phrase: "Bill Gates es una persona rica." }, { answer: "false", phrase: " Justin Bieber es pobre." }];

    function generateObj(el) {
        var randoms = [];
        for (var i = 0; i < 5; i++) {
            var x = Math.floor(Math.random() * el.length);
            while (randoms.indexOf(x) !== -1) {
                x = Math.floor(Math.random() * el.length);
            }
            randoms.push(x);
        }
        return randoms;
    }

    var randoms = generateObj(sentences);

    var phrases = randoms.map(function (random) {
        return sentences[random];
    });

    phrases.forEach(function (el) {
        var newItem = document.createElement("li");
        var yesBtn = document.createElement("button");
        var noBtn = document.createElement("button");
        newItem.innerText = el.phrase;
        sectionOneList.appendChild(newItem);
        yesBtn.innerText = "verdadero";
        noBtn.innerText = "falso";
        sectionOneList.appendChild(yesBtn);
        sectionOneList.appendChild(noBtn);
        yesBtn.classList.add("btn-true-false");
        noBtn.classList.add("btn-true-false");
        yesBtn.dataset.bool = "true";
        noBtn.dataset.bool = "false";

        function yesAnswer() {
            if (el.answer === yesBtn.dataset.bool) {
                newItem.style.color = "#50c3b7";
            } else {
                newItem.style.color = "red";
            }
        }

        function noAnswer() {
            if (el.answer === noBtn.dataset.bool) {
                newItem.style.color = "#50c3b7";
            } else {
                newItem.style.color = "red";
            }
        }

        yesBtn.addEventListener("click", yesAnswer);
        noBtn.addEventListener("click", noAnswer);
    });
}

exports.default = trueOrFalse;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function guessWeather() {

    var sectionThreeBox = document.querySelector("#section-three-box");
    var weather = [{ word: "nieve", def: "la cosa blanca durante el invierno" }, { word: "sol", def: "algo amarillo en el cielo" }, { word: "nublado", def: "cuando el cielo esta gris o muy sombre" }, { word: "hace frio", def: "en esta situaction necestias un gorro, una chaqueta, una bufanda, unos guantes" }, { word: "calor", def: "necesitas un traje de bano, sombrero y hawaianas" }, { word: "hielo", def: "cuando hace frio esto esta en el rio o en el lago y podemos patinar sobre esto " }, { word: "otono", def: "la temporada cuando las hojas son de naranja, amarillo y marron" }, { word: "invierno", def: "la temporada con Papa Noel y la Noche Vieja" }, { word: "verano", def: "la temporada cuando tenemos las vacaciones y somos muuuy felices :)" }, { word: "primavera", def: "la temporada con las cosas verdes " }, { word: "lluvia", def: "la situacion cuando necesitas las paraguas" }, { word: "tormenta", def: "cunado tienes miedo porque hay mucho ruido, el cielo esta negro o blanco " }];

    function generateObj(el) {
        var randoms = [];
        for (var i = 0; i < 5; i++) {
            var x = Math.floor(Math.random() * el.length);
            while (randoms.indexOf(x) !== -1) {
                x = Math.floor(Math.random() * el.length);
            }
            randoms.push(x);
        }
        return randoms;
    }

    var randoms = generateObj(weather);

    var weatherList = randoms.map(function (random) {
        return weather[random];
    });

    weatherList.forEach(function (el) {

        var newItem = document.createElement("div");
        var weatherDef = document.createElement("p");
        var input = document.createElement("input");
        var check = document.createElement("button");

        newItem.classList.add("weatherItem");
        newItem.appendChild(weatherDef);
        newItem.appendChild(input);
        newItem.appendChild(check);
        sectionThreeBox.appendChild(newItem);
        weatherDef.innerText = el.def;
        weatherDef.classList.add("weatherText");
        check.innerText = "verificar";
        check.classList.add("checkBtn");

        function removeGuessedWord() {
            if (input.value === el.word) {
                newItem.parentElement.removeChild(newItem);
            } else {
                input.style.border = "3px solid red";
            }
            var inputs = document.querySelectorAll("input");

            if (inputs.length === 9) {
                var finalInfo = document.querySelector(".finalInfo");
                finalInfo.style.opacity = 1;
            }
        }

        check.addEventListener("click", removeGuessedWord);
    });
}

exports.default = guessWeather;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function sections() {
    var btnConfirm = document.querySelector("#btnIntroConfirm");
    var introSection = document.querySelector(".intro");
    var catSection = document.querySelector(".categories");
    var subcatOne = document.querySelector("#section-true-false");
    var subcatTwo = document.querySelector("#section-furniture");
    var subcatThree = document.querySelector("#section-three");
    var subcatFour = document.querySelector("#section-four");
    var category = document.querySelectorAll(".categories-list li");
    var btnPrev = document.querySelectorAll(".btn-prev");

    function confirm() {
        introSection.style.display = "none";
        catSection.style.display = "block";
    }

    btnConfirm.addEventListener("click", confirm);

    [].concat(_toConsumableArray(btnPrev)).forEach(function (el) {
        el.addEventListener("click", function () {
            this.parentElement.parentElement.style.display = "none";
            catSection.style.display = "block";
        });
    });

    for (var i = 0; i < category.length; i++) {
        category[i].addEventListener("click", function () {

            if (this.children[0].getAttribute("data-cat") === "1") {
                catSection.style.display = "none";
                subcatOne.style.display = "block";
            } else if (this.children[0].getAttribute("data-cat") === "2") {
                catSection.style.display = "none";
                subcatTwo.style.display = "block";
            } else if (this.children[0].getAttribute("data-cat") === "3") {
                catSection.style.display = "none";
                subcatThree.style.display = "block";
            } else if (this.children[0].getAttribute("data-cat") === "4") {
                catSection.style.display = "none";
                subcatFour.style.display = "block";
            }
        });
    }
}

exports.default = sections;

},{}],7:[function(require,module,exports){
"use strict";

var _sections = require("./_sections.js");

var _sections2 = _interopRequireDefault(_sections);

var _section_true_false = require("./_section_true_false.js");

var _section_true_false2 = _interopRequireDefault(_section_true_false);

var _section_furniture = require("./_section_furniture.js");

var _section_furniture2 = _interopRequireDefault(_section_furniture);

var _section_weather = require("./_section_weather.js");

var _section_weather2 = _interopRequireDefault(_section_weather);

var _section_slider = require("./_section_slider.js");

var _section_slider2 = _interopRequireDefault(_section_slider);

var _section_quiz = require("./_section_quiz.js");

var _section_quiz2 = _interopRequireDefault(_section_quiz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {

    (0, _sections2.default)();
    (0, _section_true_false2.default)();
    (0, _section_furniture2.default)();
    (0, _section_weather2.default)();
    (0, _section_slider2.default)();
    (0, _section_quiz2.default)();
});

},{"./_section_furniture.js":1,"./_section_quiz.js":2,"./_section_slider.js":3,"./_section_true_false.js":4,"./_section_weather.js":5,"./_sections.js":6}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9fc2VjdGlvbl9mdXJuaXR1cmUuanMiLCJzcmMvc2NyaXB0cy9fc2VjdGlvbl9xdWl6LmpzIiwic3JjL3NjcmlwdHMvX3NlY3Rpb25fc2xpZGVyLmpzIiwic3JjL3NjcmlwdHMvX3NlY3Rpb25fdHJ1ZV9mYWxzZS5qcyIsInNyYy9zY3JpcHRzL19zZWN0aW9uX3dlYXRoZXIuanMiLCJzcmMvc2NyaXB0cy9fc2VjdGlvbnMuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLFNBQVMsY0FBVCxHQUEwQjs7QUFFdEIsUUFBTSxRQUFRLENBQUMsUUFBRCxFQUFXLFdBQVgsRUFBd0IsTUFBeEIsRUFBZ0MsTUFBaEMsRUFBd0MsU0FBeEMsRUFBbUQsVUFBbkQsRUFBK0QsYUFBL0QsQ0FBZDtBQUNBLFFBQU0sVUFBVSxDQUNaLGtEQURZLEVBRVosaUVBRlksRUFHWixvREFIWSxFQUlaLDRDQUpZLEVBS1osaUNBTFksRUFNWiw0Q0FOWSxFQU9aLHVDQVBZLENBQWhCOztBQVdBLFFBQUksT0FBTyxFQUFYO0FBQ0EsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLE1BQU0sTUFBMUIsRUFBa0MsR0FBbEMsRUFBdUM7QUFDbkMsYUFBSyxJQUFMLENBQVUsc0JBQXNCLElBQUksQ0FBMUIsSUFBK0IsSUFBL0IsR0FBc0MsTUFBTSxDQUFOLENBQXRDLEdBQWlELE9BQTNEO0FBQ0g7O0FBRUQsUUFBSSxTQUFTLEVBQWI7QUFDQSxTQUFLLElBQUksS0FBSSxDQUFiLEVBQWdCLEtBQUksUUFBUSxNQUE1QixFQUFvQyxJQUFwQyxFQUF5QztBQUNyQyxlQUFPLElBQVAsQ0FBWSxzQkFBc0IsS0FBSSxDQUExQixJQUErQixJQUEvQixHQUFzQyxRQUFRLEVBQVIsQ0FBdEMsR0FBbUQsT0FBL0Q7QUFDSDs7QUFFRCxhQUFT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T0FBM0I7QUFDSDtBQUNKLFNBbEJEO0FBbUJIO0FBSUo7O2tCQUVjLFE7Ozs7O0FDbkRmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVzs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUgsQ0FURCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiZnVuY3Rpb24gZnVybml0dXJlTWF0Y2goKSB7XG5cbiAgICBjb25zdCB3b3JkcyA9IFtcImVzcGVqb1wiLCBcIm9yZGVuYWRvclwiLCBcIm1lc2FcIiwgXCJzb2ZhXCIsIFwidmVudGFuYVwiLCBcImN1YWRlcm5vXCIsIFwiZnJpZ29yaWZpY29cIl07XG4gICAgY29uc3QgYW5zd2VycyA9IFtcbiAgICAgICAgXCJzaXJ2ZSBwYXJhIG1pcmFybm9zIHBvciBsYSBtYW5hbmEgbyBwb3IgbGEgbm9jaGVcIixcbiAgICAgICAgXCJwb2RlbW9zIHZlcmlmaWNhciBsYXMgaW5mb3JtYWNpb25lcywgaGFibGFyIGNvbiBudWVzdHJvcyBhbWlnb3NcIixcbiAgICAgICAgXCJoaXpvIGRlIG1hZGVyYSwgcG9kZW1vcyBwb25lciBsYSBjb21pZGEgc29icmUgZWxsYVwiLFxuICAgICAgICBcImVuIGZyZW50ZSBkZSBsYSB0ZWxlIGVuIGNhZGEgc2FsYSBkZSBlc3RhclwiLFxuICAgICAgICBcIm5vcyBkYSBsYSBsdXogZW4gdW5hIGhhYml0YWNpb25cIixcbiAgICAgICAgXCJsYSBkZWNvcmFjaW9uIGVuIHVuIG11cm8gZGUgdW5hIGhhYml0YWNpb25cIixcbiAgICAgICAgXCJlbCBsdWdhciBmcmlvIGRvbmRlIHBvbmVtb3MgbGEgY29taWRhXCIsXG5cbiAgICBdO1xuXG4gICAgbGV0IHdvcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdvcmQucHVzaCgnPGxpIGRhdGEtaW5kZXg9XCInICsgKGkgKyAxKSArICdcIj4nICsgd29yZHNbaV0gKyAnPC9saT4nKTtcbiAgICB9XG5cbiAgICBsZXQgYW5zd2VyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFuc3dlci5wdXNoKCc8bGkgZGF0YS1pbmRleD1cIicgKyAoaSArIDEpICsgJ1wiPicgKyBhbnN3ZXJzW2ldICsgJzwvbGk+Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2h1ZmZsZShvKXtcbiAgICAgICAgZm9yKGxldCBqLHgsaSA9IG8ubGVuZ3RoO2k7aiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSppKSx4PW9bLS1pXSxvW2ldPW9bal0sb1tqXT14KTtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgYW5zd2VyID0gc2h1ZmZsZShhbnN3ZXIpO1xuICAgIHdvcmQgPSBzaHVmZmxlKHdvcmQpO1xuXG4gICAgJCgnLnNvdXJjZScpLmh0bWwod29yZCk7XG4gICAgJCgnLnRhcmdldCcpLmh0bWwoYW5zd2VyKTtcblxuICAgICQoXCIuc291cmNlIGxpXCIpLmRyYWdnYWJsZSh7XG4gICAgICAgIHJldmVydDogXCJpbnZhbGlkXCIsXG4gICAgICAgIHJldmVydER1cmF0aW9uOiAyMDAsXG4gICAgICAgIGN1cnNvcjogXCJtb3ZlXCJcbiAgICB9KTtcblxuICAgICQoXCIudGFyZ2V0IGxpXCIpLmRyb3BwYWJsZSh7XG4gICAgICAgIGFjY2VwdDogZnVuY3Rpb24oZHJhZ2dhYmxlKXtcblxuXG4gICAgICAgICAgICBpZihwYXJzZUludChkcmFnZ2FibGUuZGF0YSgnaW5kZXgnKSwxMCkgPT09IHBhcnNlSW50KCQodGhpcykuZGF0YSgnaW5kZXgnKSwxMCkpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkcm9wOiBmdW5jdGlvbihldmVudCwgdWkpe1xuICAgICAgICAgICAgY29uc3QgdGhhdCA9JCh0aGlzKTtcbiAgICAgICAgICAgIHRoYXQuY3NzKCdjb2xvcicsICcjNTBjM2I3JykuZWZmZWN0KCdib3VuY2UnKTtcbiAgICAgICAgICAgIHRoYXQuZHJvcHBhYmxlKCdkaXNhYmxlJyk7XG4gICAgICAgICAgICAodWkuZHJhZ2dhYmxlKS5kcmFnZ2FibGUoJ2Rpc2FibGUnKTtcblxuICAgICAgICB9XG5cbiAgICB9KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdXJuaXR1cmVNYXRjaDsiLCJmdW5jdGlvbiBxdWl6KCkge1xuICAgIGNvbnN0IGV4ZXJjaXNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleGVyY2lzZS1idG5cIik7XG4gICAgY29uc3Qgc3ViQ2F0NSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VjdGlvbjRleFwiKTtcbiAgICBjb25zdCBhbnN3ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbnN3ZXJzIGlucHV0XCIpO1xuXG4gICAgWy4uLmFuc3dlcnNdLmZvckVhY2goZWw9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhc2V0VmFsID0gZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1hbnNcIik7XG4gICAgICAgICAgICBpZihkYXRhc2V0VmFsID09PSBcIm9rXCIpe1xuICAgICAgICAgICAgICAgIGVsLm5leHRFbGVtZW50U2libGluZy5zdHlsZS5jb2xvciA9IFwiIzUwYzNiN1wiO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgZWwubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGV4ZXJjaXNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlID0gXCJub25lXCI7XG4gICAgICAgIHN1YkNhdDUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcXVpejsiLCJmdW5jdGlvbiBzbGlkZXIoKSB7XG5cbiAgICBjb25zdCBidXRQcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2UGljdHVyZVwiKTtcbiAgICBjb25zdCBidXROZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXh0UGljdHVyZVwiKTtcbiAgICBjb25zdCBzbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyTGlzdFwiKS5jaGlsZHJlbjtcbiAgICBjb25zdCB0YWIgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFiLnB1c2goc2xpZGVbaV0pO1xuICAgIH1cblxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgdGFiW2luZGV4XS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG5cblxuICAgIGNvbnN0IG5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRhYltpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBpZiAoaW5kZXggPj0gdGFiLmxlbmd0aCkge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRhYltpbmRleF0uY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG5cbiAgICB9O1xuXG4gICAgY29uc3QgcHJldiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGFiW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgIGluZGV4LS07XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGluZGV4ID0gdGFiLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICB0YWJbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIH07XG5cbiAgICBidXRQcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmV2KTtcbiAgICBidXROZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyOyIsImZ1bmN0aW9uIHRydWVPckZhbHNlKCkge1xuXG4gICAgY29uc3Qgc2VjdGlvbk9uZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlY3Rpb24tb25lLWxpc3RcIik7XG4gICAgY29uc3Qgc2VudGVuY2VzID0gW1xuICAgICAgICB7YW5zd2VyOlwiZmFsc2VcIiwgcGhyYXNlOlwiIExhcyBmcml0YXMgcGF0YXRhcyBzb24gbXV5IHNhbmFzLlwifSxcbiAgICAgICAge2Fuc3dlcjogXCJ0cnVlXCIsIHBocmFzZTogXCJFbCBwcmVzaWRlbnRlIGVzIHVuYSBwcm9mZXNpb24gbXV5IHNlcmlhLlwifSxcbiAgICAgICAge2Fuc3dlcjogXCJ0cnVlXCIsIHBocmFzZTogXCIgQ3VhbmRvIGxhIGdlbnRlIGVzdGEgdHJpc3RlLCBlc2N1Y2hhIGxhIG11c2ljYS5cIn0sXG4gICAgICAgIHthbnN3ZXI6IFwidHJ1ZVwiLCBwaHJhc2U6IFwiT3NvcyB0aWVuZW4gbGFzIGNhYmV6YXMgbXV5IGdyYW5kZXMuXCJ9LFxuICAgICAgICB7YW5zd2VyOiBcInRydWVcIiwgcGhyYXNlOiBcIk1pIHByb2Zlc29yIGRlIGVzcGFub2wgZXMgYmFqYS5cIn0sXG4gICAgICAgIHthbnN3ZXI6IFwidHJ1ZVwiLCBwaHJhc2U6IFwiVmF0aWNhbm8gZXMgdW4gcGFpcyBwZXF1ZW5vLlwifSxcbiAgICAgICAge2Fuc3dlcjpcImZhbHNlXCIsIHBocmFzZTogXCJDdWFuZG8gaGFjZSBmcmlvLCB2YW1vcyBhIGxhIHBsYXlhLlwifSxcbiAgICAgICAge2Fuc3dlcjpcImZhbHNlXCIsIHBocmFzZTogXCIgTWkgYWJ1ZWxhIGVzIHVuYSBtdWplciBtdXkgam92ZW4uXCJ9LFxuICAgICAgICB7YW5zd2VyOiBcInRydWVcIiwgcGhyYXNlOiBcIlZhcnNvdmlhIGVzIHVuYSBjaXVkYWQgdmllamEuXCJ9LFxuICAgICAgICB7YW5zd2VyOiBcInRydWVcIiwgcGhyYXNlOiBcIiBNaWNoYWVsIEpvcmRhbiBlcyB1biBob21icmUgYWx0by5cIn0sXG4gICAgICAgIHthbnN3ZXI6XCJmYWxzZVwiLCBwaHJhc2U6IFwiQmFsb25jZXN0byBlcyB1biBkZXBvcnRlIGRpZmljaWwuXCJ9LFxuICAgICAgICB7YW5zd2VyOlwiZmFsc2VcIiwgcGhyYXNlOiBcIiBDaGlubyBubyBlcyB1biBpZGlvbWEgY29tcGxpY2Fkby5cIn0sXG4gICAgICAgIHthbnN3ZXI6XCJmYWxzZVwiLCBwaHJhc2U6IFwiUGVycm9zIG5vIHNvbiBhbmltYWxlcyBzaW1wYXRpY29zLlwifSxcbiAgICAgICAge2Fuc3dlcjogXCJ0cnVlXCIsIHBocmFzZTogXCJCaWxsIEdhdGVzIGVzIHVuYSBwZXJzb25hIHJpY2EuXCJ9LFxuICAgICAgICB7YW5zd2VyOlwiZmFsc2VcIiwgcGhyYXNlOiBcIiBKdXN0aW4gQmllYmVyIGVzIHBvYnJlLlwifVxuXG4gICAgXTtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlT2JqKGVsKSB7XG4gICAgICAgIGxldCByYW5kb21zID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPDU7IGkrKykge1xuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbC5sZW5ndGgpO1xuICAgICAgICAgICAgd2hpbGUgKHJhbmRvbXMuaW5kZXhPZih4KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZWwubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJhbmRvbXMucHVzaCh4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZG9tcztcbiAgICB9XG5cblxuICAgIGxldCByYW5kb21zID0gZ2VuZXJhdGVPYmooc2VudGVuY2VzKTtcblxuICAgIGNvbnN0IHBocmFzZXMgPSByYW5kb21zLm1hcChyYW5kb20gPT4ge1xuICAgICAgICByZXR1cm4gc2VudGVuY2VzW3JhbmRvbV07XG5cbiAgICB9KTtcblxuICAgIHBocmFzZXMuZm9yRWFjaChlbD0+IHtcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY29uc3Qgbm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBuZXdJdGVtLmlubmVyVGV4dCA9IGVsLnBocmFzZTtcbiAgICAgICAgc2VjdGlvbk9uZUxpc3QuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG4gICAgICAgIHllc0J0bi5pbm5lclRleHQgPSBcInZlcmRhZGVyb1wiO1xuICAgICAgICBub0J0bi5pbm5lclRleHQgPSBcImZhbHNvXCI7XG4gICAgICAgIHNlY3Rpb25PbmVMaXN0LmFwcGVuZENoaWxkKHllc0J0bik7XG4gICAgICAgIHNlY3Rpb25PbmVMaXN0LmFwcGVuZENoaWxkKG5vQnRuKTtcbiAgICAgICAgeWVzQnRuLmNsYXNzTGlzdC5hZGQoXCJidG4tdHJ1ZS1mYWxzZVwiKTtcbiAgICAgICAgbm9CdG4uY2xhc3NMaXN0LmFkZChcImJ0bi10cnVlLWZhbHNlXCIpO1xuICAgICAgICB5ZXNCdG4uZGF0YXNldC5ib29sID0gXCJ0cnVlXCI7XG4gICAgICAgIG5vQnRuLmRhdGFzZXQuYm9vbCA9IFwiZmFsc2VcIjtcblxuXG4gICAgICAgIGZ1bmN0aW9uIHllc0Fuc3dlcigpe1xuICAgICAgICAgICAgaWYoZWwuYW5zd2VyID09PSB5ZXNCdG4uZGF0YXNldC5ib29sKXtcbiAgICAgICAgICAgICAgICBuZXdJdGVtLnN0eWxlLmNvbG9yPVwiIzUwYzNiN1wiO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbmV3SXRlbS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBub0Fuc3dlcigpe1xuICAgICAgICAgICAgaWYoZWwuYW5zd2VyID09PSBub0J0bi5kYXRhc2V0LmJvb2wpe1xuICAgICAgICAgICAgICAgIG5ld0l0ZW0uc3R5bGUuY29sb3IgPSBcIiM1MGMzYjdcIjtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIG5ld0l0ZW0uc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgeWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB5ZXNBbnN3ZXIpO1xuICAgICAgICBub0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbm9BbnN3ZXIpO1xuXG4gICAgfSk7XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCB0cnVlT3JGYWxzZTtcblxuIiwiZnVuY3Rpb24gZ3Vlc3NXZWF0aGVyKCkge1xuXG4gICAgY29uc3Qgc2VjdGlvblRocmVlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWN0aW9uLXRocmVlLWJveFwiKTtcbiAgICBjb25zdCB3ZWF0aGVyID0gW1xuICAgICAgICB7d29yZDogXCJuaWV2ZVwiLCBkZWY6IFwibGEgY29zYSBibGFuY2EgZHVyYW50ZSBlbCBpbnZpZXJub1wifSxcbiAgICAgICAge3dvcmQ6IFwic29sXCIsIGRlZjogXCJhbGdvIGFtYXJpbGxvIGVuIGVsIGNpZWxvXCJ9LFxuICAgICAgICB7d29yZDogXCJudWJsYWRvXCIsIGRlZjogXCJjdWFuZG8gZWwgY2llbG8gZXN0YSBncmlzIG8gbXV5IHNvbWJyZVwifSxcbiAgICAgICAge3dvcmQ6IFwiaGFjZSBmcmlvXCIsIGRlZjogXCJlbiBlc3RhIHNpdHVhY3Rpb24gbmVjZXN0aWFzIHVuIGdvcnJvLCB1bmEgY2hhcXVldGEsIHVuYSBidWZhbmRhLCB1bm9zIGd1YW50ZXNcIn0sXG4gICAgICAgIHt3b3JkOiBcImNhbG9yXCIsIGRlZjogXCJuZWNlc2l0YXMgdW4gdHJhamUgZGUgYmFubywgc29tYnJlcm8geSBoYXdhaWFuYXNcIn0sXG4gICAgICAgIHt3b3JkOiBcImhpZWxvXCIsIGRlZjogXCJjdWFuZG8gaGFjZSBmcmlvIGVzdG8gZXN0YSBlbiBlbCByaW8gbyBlbiBlbCBsYWdvIHkgcG9kZW1vcyBwYXRpbmFyIHNvYnJlIGVzdG8gXCJ9LFxuICAgICAgICB7d29yZDogXCJvdG9ub1wiLCBkZWY6IFwibGEgdGVtcG9yYWRhIGN1YW5kbyBsYXMgaG9qYXMgc29uIGRlIG5hcmFuamEsIGFtYXJpbGxvIHkgbWFycm9uXCJ9LFxuICAgICAgICB7d29yZDogXCJpbnZpZXJub1wiLCBkZWY6IFwibGEgdGVtcG9yYWRhIGNvbiBQYXBhIE5vZWwgeSBsYSBOb2NoZSBWaWVqYVwifSxcbiAgICAgICAge3dvcmQ6IFwidmVyYW5vXCIsIGRlZjogXCJsYSB0ZW1wb3JhZGEgY3VhbmRvIHRlbmVtb3MgbGFzIHZhY2FjaW9uZXMgeSBzb21vcyBtdXV1eSBmZWxpY2VzIDopXCJ9LFxuICAgICAgICB7d29yZDogXCJwcmltYXZlcmFcIiwgZGVmOiBcImxhIHRlbXBvcmFkYSBjb24gbGFzIGNvc2FzIHZlcmRlcyBcIn0sXG4gICAgICAgIHt3b3JkOiBcImxsdXZpYVwiLCBkZWY6IFwibGEgc2l0dWFjaW9uIGN1YW5kbyBuZWNlc2l0YXMgbGFzIHBhcmFndWFzXCJ9LFxuICAgICAgICB7d29yZDogXCJ0b3JtZW50YVwiLCBkZWY6IFwiY3VuYWRvIHRpZW5lcyBtaWVkbyBwb3JxdWUgaGF5IG11Y2hvIHJ1aWRvLCBlbCBjaWVsbyBlc3RhIG5lZ3JvIG8gYmxhbmNvIFwifSxcblxuICAgIF07XG5cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlT2JqKGVsKSB7XG4gICAgICAgIGxldCByYW5kb21zID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPDU7IGkrKykge1xuICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbC5sZW5ndGgpO1xuICAgICAgICAgICAgd2hpbGUgKHJhbmRvbXMuaW5kZXhPZih4KSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZWwubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJhbmRvbXMucHVzaCh4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmFuZG9tcztcbiAgICB9XG5cbiAgICBsZXQgcmFuZG9tcyA9IGdlbmVyYXRlT2JqKHdlYXRoZXIpO1xuXG4gICAgY29uc3Qgd2VhdGhlckxpc3QgPSByYW5kb21zLm1hcChyYW5kb20gPT4ge1xuICAgICAgICByZXR1cm4gd2VhdGhlcltyYW5kb21dO1xuXG4gICAgfSk7XG5cbiAgICB3ZWF0aGVyTGlzdC5mb3JFYWNoKGVsPT57XG5cbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgICAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySXRlbVwiKTtcbiAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZCh3ZWF0aGVyRGVmKTtcbiAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgICAgICBzZWN0aW9uVGhyZWVCb3guYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG4gICAgICAgIHdlYXRoZXJEZWYuaW5uZXJUZXh0ID0gZWwuZGVmO1xuICAgICAgICB3ZWF0aGVyRGVmLmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyVGV4dFwiKTtcbiAgICAgICAgY2hlY2suaW5uZXJUZXh0ID0gXCJ2ZXJpZmljYXJcIjtcbiAgICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZChcImNoZWNrQnRuXCIpO1xuXG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlR3Vlc3NlZFdvcmQoKSB7XG4gICAgICAgICAgICBpZihpbnB1dC52YWx1ZSA9PT0gZWwud29yZCkge1xuICAgICAgICAgICAgICAgIG5ld0l0ZW0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChuZXdJdGVtKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlucHV0LnN0eWxlLmJvcmRlciA9IFwiM3B4IHNvbGlkIHJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xuXG4gICAgICAgICAgICBpZihpbnB1dHMubGVuZ3RoID09PSA5KXtcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5hbEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbmFsSW5mb1wiKTtcbiAgICAgICAgICAgICAgICBmaW5hbEluZm8uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVHdWVzc2VkV29yZCk7XG5cbiAgICB9KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBndWVzc1dlYXRoZXI7IiwiZnVuY3Rpb24gc2VjdGlvbnMoKXtcbiAgICBjb25zdCBidG5Db25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5JbnRyb0NvbmZpcm1cIik7XG4gICAgY29uc3QgaW50cm9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnRyb1wiKTtcbiAgICBjb25zdCBjYXRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXRlZ29yaWVzXCIpO1xuICAgIGNvbnN0IHN1YmNhdE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VjdGlvbi10cnVlLWZhbHNlXCIpO1xuICAgIGNvbnN0IHN1YmNhdFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VjdGlvbi1mdXJuaXR1cmVcIik7XG4gICAgY29uc3Qgc3ViY2F0VGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlY3Rpb24tdGhyZWVcIik7XG4gICAgY29uc3Qgc3ViY2F0Rm91ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VjdGlvbi1mb3VyXCIpO1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRlZ29yaWVzLWxpc3QgbGlcIik7XG4gICAgY29uc3QgYnRuUHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLXByZXZcIik7XG5cbiAgICBmdW5jdGlvbiBjb25maXJtKCkge1xuICAgICAgICBpbnRyb1NlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjYXRTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgYnRuQ29uZmlybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uZmlybSk7XG5cbiAgICBbLi4uYnRuUHJldl0uZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBjYXRTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3J5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhdGVnb3J5W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNoaWxkcmVuWzBdLmdldEF0dHJpYnV0ZShcImRhdGEtY2F0XCIpID09PSBcIjFcIikge1xuICAgICAgICAgICAgICAgIGNhdFNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgIHN1YmNhdE9uZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2hpbGRyZW5bMF0uZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXRcIikgPT09IFwiMlwiKSB7XG4gICAgICAgICAgICAgICAgY2F0U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgc3ViY2F0VHdvLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaGlsZHJlblswXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNhdFwiKSA9PT0gXCIzXCIpIHtcbiAgICAgICAgICAgICAgICBjYXRTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBzdWJjYXRUaHJlZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2hpbGRyZW5bMF0uZ2V0QXR0cmlidXRlKFwiZGF0YS1jYXRcIikgPT09IFwiNFwiKSB7XG4gICAgICAgICAgICAgICAgY2F0U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgc3ViY2F0Rm91ci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VjdGlvbnM7IiwiaW1wb3J0IHNlY3Rpb25zIGZyb20gXCIuL19zZWN0aW9ucy5qc1wiO1xuaW1wb3J0IHRydWVPckZhbHNlIGZyb20gXCIuL19zZWN0aW9uX3RydWVfZmFsc2UuanNcIjtcbmltcG9ydCBmdXJuaXR1cmVNYXRjaCBmcm9tIFwiLi9fc2VjdGlvbl9mdXJuaXR1cmUuanNcIjtcbmltcG9ydCBndWVzc1dlYXRoZXIgZnJvbSBcIi4vX3NlY3Rpb25fd2VhdGhlci5qc1wiO1xuaW1wb3J0IHNsaWRlciBmcm9tIFwiLi9fc2VjdGlvbl9zbGlkZXIuanNcIjtcbmltcG9ydCBxdWl6IGZyb20gXCIuL19zZWN0aW9uX3F1aXouanNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICBzZWN0aW9ucygpO1xuICAgIHRydWVPckZhbHNlKCk7XG4gICAgZnVybml0dXJlTWF0Y2goKTtcbiAgICBndWVzc1dlYXRoZXIoKTtcbiAgICBzbGlkZXIoKTtcbiAgICBxdWl6KCk7XG5cbn0pOyJdfQ==
