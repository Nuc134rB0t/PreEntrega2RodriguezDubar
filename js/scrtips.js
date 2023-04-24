const audioCoin = new Audio("./media/audio/smb_coin.wav");
const audioBump = new Audio("./media/audio/smb_bump.wav");
const audioJump = new Audio("./media/audio/smb_jump-small.wav");

const audioBumpSub = new Audio("../media/audio/smb_bump.wav");
const audioCoinSub = new Audio("../media/audio/smb_coin.wav");
const audioJumpSub = new Audio("../media/audio/smb_jump-small.wav");
// const buttons = document.querySelectorAll("gather");
// const buttons = document.getElementsByClassName("coin");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        audioCoin.play();
        audioBump.play();
        audioJump.play();
        audioCoinSub.play();
        audioBumpSub.play();
        audioJumpSub.play();
    });
});