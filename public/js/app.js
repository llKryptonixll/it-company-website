const sidebarToggle = document.querySelector(".toggle");
const sidebar = document.querySelector(".mobile-nav-sidebar");

sidebarToggle.addEventListener("click", () => {
    handleSidebar();
});

function handleSidebar(){
    sidebarToggle.classList.toggle("is-active");

    const sidebar = document.querySelector(".mobile-nav-sidebar");
    sidebar.classList.toggle("open-sidebar")
}

// close button if sidebar takes 100% width and remove active class from main toggle
const closeSidebar_button = document.querySelector(".close-sidebar-btn button");
closeSidebar_button.addEventListener("click", () => {
    sidebar.classList.toggle("open-sidebar");
    sidebarToggle.classList.remove("is-active");
});