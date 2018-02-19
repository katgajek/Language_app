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

export default sections;