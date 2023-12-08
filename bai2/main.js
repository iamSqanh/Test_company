function runApp() {
    const getAllBtn = document.querySelectorAll(".left--content-wrap");
    const getAllText = document.querySelectorAll(".left--text");
    console.log(getAllText);

    getAllBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            getAllText[index].classList.toggle("hidden");
        });
    });
}

runApp();
