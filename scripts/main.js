const links = document.querySelectorAll("li");

links.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".top-selected")?.classList.remove("top-selected");

        item.querySelector("a").classList.add("top-selected");
    });
});
