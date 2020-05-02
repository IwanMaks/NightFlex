const joinButton = document.querySelector('#join-button');
const joinmodal = document.querySelector(".joinmodal");
const joinClose = document.querySelector(".joinClose");
joinButton.addEventListener('click', function (event) {
    joinmodal.classList.add("is-open");
});
joinClose.addEventListener('click', function (event) {
    joinmodal.classList.remove("is-open");
});
