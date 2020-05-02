calc.onclick = function () {
    var myform = this.form;
    myform.value = +myform.name.value + +myform.kot.value + +myform.gameAlco.value + +myform.city.value + +myform.animal.value;
    if (myform.value < 10) {
        const joinmodal = document.querySelector(".joinmodal");
        const joinClose = document.querySelector(".joinClose");
            joinmodal.classList.add("is-open");
        joinClose.addEventListener('click', function (event) {
            joinmodal.classList.remove("is-open");
        });
    }
}