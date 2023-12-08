const accordion = document.querySelectorAll(".book--chapter-wrap");

accordion.forEach((item) => {
    item.addEventListener("click", () => {
        const content = item.querySelector(".chapter--content");

        if (content) {
            accordion.forEach((otherItem) => {
                if (otherItem !== item) {
                    const otherContent =
                        otherItem.querySelector(".chapter--content");

                    if (otherContent) {
                        otherContent.classList.add("chapter--hidden");

                        const otherChapterNum =
                            otherItem.querySelector(".chapter--collect");
                        const otherIcon = otherItem.querySelector("svg");

                        if (otherChapterNum) {
                            otherChapterNum.classList.remove("active--color");
                        }

                        if (otherIcon) {
                            otherIcon.classList.remove("rotate-180");
                        }
                    }
                }
            });

            content.classList.toggle("chapter--hidden");

            const chapterNum = item.querySelector(".chapter--collect");
            const icon = item.querySelector("svg");

            if (chapterNum) {
                chapterNum.classList.add("active--color");
            }

            if (icon) {
                icon.classList.toggle("rotate-180");
            }
        }
    });
});
