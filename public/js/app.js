const sidebarToggle = document.querySelector(".toggle");
const sidebar = document.querySelector(".mobile-nav-sidebar");

sidebarToggle.addEventListener("click", () => {
    handleSidebar();
});

function handleSidebar(){
    sidebarToggle.classList.toggle("is-active");

    const sidebar = document.querySelector(".mobile-nav-sidebar");
    sidebar.classList.toggle("open-sidebar");
}

// close button if sidebar takes 100% width and remove active class from main toggle
const closeSidebar_button = document.querySelector(".close-sidebar-btn button");
closeSidebar_button.addEventListener("click", () => {
    sidebar.classList.remove("open-sidebar");
    sidebarToggle.classList.remove("is-active");
});

// close sidebar if buttons are clicked
const sidebarButtons = document.querySelectorAll(".mobile-nav .main-anchors");
sidebarButtons.forEach((button) => {
    button.addEventListener("click", () => {
        sidebar.classList.remove("open-sidebar");
        sidebarToggle.classList.remove("is-active");
    });
});

// hero section custom cursor logic
const customCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    customCursor.style.left = `${x}px`;
    customCursor.style.top = `${y}px`;
    customCursor.style.transition = `100ms`;
    customCursor.style.display = "grid";
});

// service accordion logic
const accordionButtons = document.querySelectorAll(".button");
accordionButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        accordionButtons.forEach((button) => {
            button.style.color = "hsl(251, 16%, 20%) ";
            button.children[0].style.borderLeft = "none";
        });

        button.style.color = "white";
        button.children[0].style.borderLeft = "3px solid hsl(191, 99%, 46%)";

        const accordionContent = document.querySelectorAll(".expand-content");

        accordionContent.forEach((accordion) => {
            accordion.classList.remove("open-accordion");
        });
        accordionContent[index].classList.add("open-accordion");
    });
});


// clients slider logic
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");
const articles = document.querySelectorAll(".client-thoughts");
const personImages = document.querySelectorAll(".image-container img");
let currentSlide = 0;

function initSlider (n, item, item2) {
    item.forEach((slide, index) => {
      slide.style.transform = "translateX(150%)";
    });
    item2.forEach((slide, index) => {
        slide.style.opacity = ".3";
    });
    item[n].style.transform = "translateX(0)";

    item2[n].style.opacity = "1";
    item2[n].style.transition = "1s";
}
  
function next () {
    currentSlide >= articles.length - 1 ? currentSlide = 0 : currentSlide++;
    initSlider(currentSlide, articles, personImages);
}

function prev () {
    currentSlide <= 0 ? currentSlide - 1 : currentSlide--;
    initSlider(currentSlide, articles, personImages);
}

function sliderPerson_images (img, index) {
    personImages.forEach((Img) => {
        Img.style.opacity = ".3";
    });
    img.style.opacity = "1";

    currentSlide = index;

    articles.forEach((article) => {
        article.style.transform = "translateX(150%)";
    });
    articles[currentSlide].style.transform = "translateX(0)";
}

initSlider(currentSlide, articles, personImages);

nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);

// if user clicks on person image show correct message
personImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        sliderPerson_images(img, index);
    });
});