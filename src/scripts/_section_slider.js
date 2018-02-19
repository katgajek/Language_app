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

export default slider;