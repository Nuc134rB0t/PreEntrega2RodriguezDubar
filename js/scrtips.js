const audioCoin = new Audio("../audio/smb_coin.wav");
const audioBump = new Audio("../audio/smb_bump.wav");
const audioJump = new Audio("../audio/smb_jump-small.wav");
// const buttons = document.querySelectorAll("gather");
const buttons = document.getElementsByClassName("coin");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        audioCoin.play();
        audioBump.play();
        audioJump.play();
    });
});