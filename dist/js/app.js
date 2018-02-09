document.addEventListener("DOMContentLoaded", function() {

    function sections(){
        const btnConfirm = document.querySelector("#btnIntroConfirm");
        const introSection = document.querySelector(".intro");
        const catSection = document.querySelector(".categories");
        const subcatOne = document.querySelector("#section-true-false");
        const subcatTwo = document.querySelector("#section-furniture");
        const subcatThree = document.querySelector("#section-three");
        const subcatFour = document.querySelector("#section-four");
        const category = document.querySelectorAll(".categories-list li");
        const btnPrev = document.querySelectorAll(".btn-prev");

        function confirm() {
            introSection.style.display = "none";
            catSection.style.display = "block";
        }

        btnConfirm.addEventListener("click", confirm);

        [...btnPrev].forEach(el => {
            el.addEventListener("click", function () {
                this.parentElement.parentElement.style.display = "none";
                catSection.style.display = "block";
            })
        });

        for (let i = 0; i < category.length; i++) {
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
            })
        }
    }

    sections();

    function generateObj(el) {
        let randoms = [];
        for (let i = 0; i<5; i++) {
            let x = Math.floor(Math.random() * el.length);
            while (randoms.indexOf(x) !== -1) {
                x = Math.floor(Math.random() * el.length);
            }
            randoms.push(x);
        }
        return randoms;
    }


    //section 1
    function trueOrFalse() {

        const sectionOneList = document.querySelector("#section-one-list");
        const sentences = [
            {answer: "false", phrase: " Las fritas patatas son muy sanas."},
            {answer: "true", phrase: "El presidente es una profesion muy seria."},
            {answer: "true", phrase: " Cuando la gente esta triste, escucha la musica."},
            {answer: "true", phrase: "Osos tienen las cabezas muy grandes."},
            {answer: "true", phrase: "Mi profesor de espanol es baja."},
            {answer: "true", phrase: "Vaticano es un pais pequeno."},
            {answer: "false", phrase: "Cuando hace frio, vamos a la playa."},
            {answer: "false", phrase: " Mi abuela es una mujer muy joven."},
            {answer: "true", phrase: "Varsovia es una ciudad vieja."},
            {answer: "true", phrase: " Michael Jordan es un hombre alto."},
            {answer: "false", phrase: "Baloncesto es un deporte dificil."},
            {answer: "false", phrase: " Chino no es un idioma complicado."},
            {answer: "false", phrase: "Perros no son animales simpaticos."},
            {answer: "true", phrase: "Bill Gates es una persona rica."},
            {answer: "false", phrase: " Justin Bieber es pobre."}

        ];

        let randoms = generateObj(sentences);

        const phrases = randoms.map(random => {
            return sentences[random];

        });

        phrases.forEach(el => {
            const newItem = document.createElement("li");
            const yesBtn = document.createElement("button");
            const noBtn = document.createElement("button");
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

    trueOrFalse();


    //section 2 //

    const furniture = [
        {id:"1", word: "espejo",definition: "sirve para nos mirar por la manana o por la noche",hint:"cuarto de bano, la cara"},
        {id:"2", word: "ordenador",definition:"podemos verificar las informaciones, hablar con nuestros amigos",hint:"dormitorio, electronico"},
        {id:"3", word: "mesa ", definition: "hizo de madera, podemos poner la comida sobre ella",hint:"cocina, mueblo, comedor"},
        {id:"4", word: "sofa", definition: "en frente de la tele en cada sala de estar",hint:"comodo, relajarse, mueblo"},
        {id:"5", word: "ventana ", definition: " nos da la luz en una habitacion",hint:"grande, cuadrado, transparente"},
        {id:"6", word: "cuaderno", definition: "la decoracion en un muro de una habitacion",hint:"cuadrado, la pintura, dibujo"},
        {id:"7", word: "frigorifico", definition: "el lugar frio donde ponemos la comida",hint:"cocina, technologia"},
        {id:"8", word: "bano ", definition: "lo utilisamos para banarse" ,hint:"agua, cuerpo, la tarde"},
        {id:"9", word: "alfombra", definition: "algo que ponemos en el suelo en cada habitacion",hint:"colorado"},
        {id:"10", word: "puerta ", definition: "la abrimos o cerramos en nuestra casa",hint:"madera, rectangular"},
        {id:"11", word: "lampara", definition: "nos da la luz", hint:"madera, metal, plastico"},
        {id:"12", word: "armario", definition: "el lugar donde tenemos la ropa",hint:"dormitorio, vestidos"},
        {id:"13", word: "flor", definition: "algo verde que decora nuestra casa",hint:" planta, agua"},

    ];

    function trueFalse() {

        const sectionTwoListLeft = document.querySelector("#sectionTwoListLeft");
        const sectionTwoListRight = document.querySelector("#sectionTwoListRight");
        const hintBtn = document.querySelector("#hint");

        let randoms = generateObj(furniture);

        const objects = randoms.map(random => {
            return furniture[random];

        });

        function shuffleDefinitions() {

            const shuffled = [];
            objects.forEach(el => {
                const index = Math.floor(Math.random() * el.length);
                if (shuffled.indexOf(el[index]) === -1) {
                    shuffled.push(el);
                }

            });
            return shuffled;
        }
        let shuffled = shuffleDefinitions();

        function shuffle(){
            for(let j,x,i = shuffled.length;i;j = Math.floor(Math.random()*i),x=shuffled[--i],shuffled[i]=shuffled[j],shuffled[j]=x);
            return shuffled;
        }
        let mixed = shuffle();

        objects.forEach((item,index) => {

            const newListItem = document.createElement("li");
            newListItem.innerText = item.word;
            sectionTwoListLeft.appendChild(newListItem);
            newListItem.classList.add("draggable");
            newListItem.dataset.num = index;
            newListItem.style.textTransform = "uppercase";
        });

        mixed.forEach((item,index) => {
            const newListItemRight = document.createElement("li");
            newListItemRight.innerText = item.definition;
            sectionTwoListRight.appendChild(newListItemRight);
            newListItemRight.style.position = "relative";
            newListItemRight.classList.add("droppable");
            const hint = document.createElement("span");
            hint.innerText = item.hint;
            newListItemRight.appendChild(hint);
            hint.classList.add("hiddenHint");
            newListItemRight.dataset.number = index;


            $(".draggable").draggable({
                revert:true,
                revertDuration: 200,
                cursor: "move"
            });

            $(".droppable").droppable({
                accept: function(draggable){

                    console.log(draggable);
                    console.log(this);


                    if(parseInt(draggable.data("num"),10) === parseInt($(this).data("number"),10)){
                        return true;
                    }else{
                        return false;
                    }
                },
                drop: function(event, ui){
                    const that =$(this);
                    that.css('color', 'red').effect('bounce');
                    // ui.draggable.addClass('correct ui-state-error');
                    that.droppable('disable');
                    (ui.draggable).draggable('disable');

                }

            });

            hintBtn.addEventListener("click", function() {

                newListItemRight.addEventListener("mouseover", function () {
                    hint.style.display = "inline";

                });

                newListItemRight.addEventListener("mouseout", function () {
                    hint.style.display = "none";
                })
             })

        })
    }

    trueFalse();


    //section 3

    function guessWeather() {

        const sectionThreeBox = document.querySelector("#section-three-box");
        const weather = [
            {word: "nieve", def: "la cosa blanca durante el invierno"},
            {word: "sol", def: "algo amarillo en el cielo"},
            {word: "nublado", def: "cuando el cielo esta gris o muy sombre"},
            {word: "hace frio", def: "en esta situaction necestias un gorro, una chaqueta, una bufanda, unos guantes"},
            {word: "calor", def: "necesitas un traje de bano, sombrero y hawaianas"},
            {word: "hielo", def: "cuando hace frio esto esta en el rio o en el lago y podemos patinar sobre esto "},
            {word: "otono", def: "la temporada cuando las hojas son de naranja, amarillo y marron"},
            {word: "invierno", def: "la temporada con Papa Noel y la Noche Vieja"},
            {word: "verano", def: "la temporada cuando tenemos las vacaciones y somos muuuy felices :)"},
            {word: "primavera", def: "la temporada con las cosas verdes "},
            {word: "lluvia", def: "la situacion cuando necesitas las paraguas"},
            {word: "tormenta", def: "cunado tienes miedo porque hay mucho ruido, el cielo esta negro o blanco "},

        ];

        let randoms = generateObj(weather);

        const weatherList = randoms.map(random => {
            return weather[random];

        });

        weatherList.forEach(el=>{

            const newItem = document.createElement("div");
            const weatherDef = document.createElement("p");
            const input = document.createElement("input");
            const check = document.createElement("button");

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
            if(input.value === el.word) {
                newItem.parentElement.removeChild(newItem);
            }else{
                input.style.border = "3px solid red";
            }
            const inputs = document.querySelectorAll("input");

            if(inputs.length === 9){
                const finalInfo = document.querySelector(".finalInfo");
                finalInfo.style.opacity = 1;
            }

        }

        check.addEventListener("click", removeGuessedWord);

        });

    }

    guessWeather();

    //section 4

    function slider() {

        const butPrev = document.querySelector("#prevPicture");
        const butNext = document.querySelector("#nextPicture");
        const slide = document.querySelector(".sliderList").children;
        const tab = [];

        for (let i = 0; i < slide.length; i++) {
            tab.push(slide[i]);
        }

        let index = 0;
        tab[index].classList.add('visible');


        const next = function () {
            tab[index].classList.remove('visible');
            index++;
            if (index >= tab.length) {
                index = 0;
            }
            tab[index].classList.add("visible");

        };

        const prev = function () {
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
    slider();

    //section 5a
    function quiz() {
        const exerciseBtn = document.querySelector("#exercise-btn");
        const subCat5 = document.querySelector("#section4ex");
        const answers = document.querySelectorAll(".answers input");

        [...answers].forEach(el=> {
            el.addEventListener("click", function () {
                const datasetVal = el.getAttribute("data-ans");
                 if(datasetVal === "ok"){
                 el.nextElementSibling.style.color = "#50c3b7";
                 }else{
                 el.nextElementSibling.style.color = "red";
                 }
            })
        });

        exerciseBtn.addEventListener("click", function () {
            this.parentElement.parentElement.style = "none";
            subCat5.style.display = "block";
        });
    }
    quiz();

});