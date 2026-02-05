import './style.css'

// Mobile hamburger menu
let menu = document.querySelector("#mobileMenu");
let burgerButton = document.querySelector("#hamburgerButton");
let burgerstacks = document.querySelectorAll(".hamburger");

// Theme Change
let themeButton = document.querySelector("#themeButton");
let colorQuery = window.matchMedia("(prefers-color-scheme: dark)");

// Show More
let showMore = document.querySelector("#showMore");
let projList = document.querySelector("#projList");
// Automatically expand if clicking projects in navigation
let projNav = document.querySelector("#projectNav"); 
let mobProjNav = document.querySelector("#mobileProjectNav");

function initApp() {
    document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark" || 
            (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
    document.documentElement.classList.toggle(
        "light",
        localStorage.theme === "light" || 
            (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: light)").matches),
    );
}

function openMenu() {
    // Show Menu
    if (menu.classList.contains("closed"))
    {
        menu.classList.add("open");
        menu.classList.remove("closed");

        burgerstacks[0].classList.add("XTop");
        burgerstacks[1].classList.add("XMid");
        burgerstacks[2].classList.add("XBottom");

    }
    // Hide Menu
    else
    {
        menu.classList.add("closed");
        menu.classList.remove("open");

        burgerstacks[0].classList.remove("XTop");
        burgerstacks[1].classList.remove("XMid");
        burgerstacks[2].classList.remove("XBottom");
    }
}

function changeTheme() {
    let themeIcon = document.querySelector("#themeIcon");
    if (document.documentElement.classList.contains("dark"))
    {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        themeIcon.innerHTML = '<path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 \
                               1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 \
                               0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 \
                               1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 \
                               1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 \
                               18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 \
                               1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 \
                               12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 \
                               1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 \
                               0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 \
                               1.06l1.59 1.591Z" />';
    }
    else
    {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        themeIcon.innerHTML = '<path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 \
                               8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 \
                               10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 \
                               6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />';
    }
}

function showProjects() {
    projList.classList.toggle("hideContent");
    projList.classList.toggle("showContent");
    if (projList.classList.contains("showContent"))
        showMore.innerHTML = 'Hide <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon"> \
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" /> \
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" /> \
                                </svg>';
    else 
        showMore.innerHTML = 'Show More <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon"> \
                                            <path fill-rule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clip-rule="evenodd" /> \
                                            <path fill-rule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clip-rule="evenodd" /> \
                                        </svg>';
}

burgerButton.addEventListener("click",openMenu);
menu.addEventListener("click",openMenu);
themeButton.addEventListener("click",changeTheme);

showMore.addEventListener("click",showProjects);

colorQuery.addEventListener("change", initApp);


