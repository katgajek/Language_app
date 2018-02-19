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

export default quiz;