const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const accordionHeaders = document.querySelectorAll(".accordion-header");

burger.addEventListener("click", () => {
    nav.classList.toggle('show');
    burger.classList.toggle('active')
});

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;

        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
                otherHeader.classList.remove('active');
                otherHeader.nextElementSibling.style.maxHeight = null;
                otherHeader.nextElementSibling.classList.remove('active');
            }
        });

        header.classList.toggle('active');
        content.classList.toggle('active');

        if (content.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});