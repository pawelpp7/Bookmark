const tabs = document.querySelectorAll(".tab-link");

const image = document.querySelector("#feature-image");
const title = document.querySelector("#feature-title");
const description = document.querySelector("#feature-description");

const features = {
    1: {
        image: "images/illustration-features-tab-1.svg",
        title: "Bookmark in one click",
        description:
            "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
    },

    2: {
        image: "images/illustration-features-tab-2.svg",
        title: "Speedy Searching",
        description:
            "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    },

    3: {
        image: "images/illustration-features-tab-3.svg",
        title: "Easy Sharing",
        description:
            "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    }
};


tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const tabNumber = tab.dataset.tab;

        image.src = features[tabNumber].image;
        title.textContent = features[tabNumber].title;
        description.textContent = features[tabNumber].description;

        tabs.forEach(item => {
            const isActive = item === tab;
            item.classList.toggle("active", isActive);
            item.setAttribute("aria-selected", String(isActive));
        });
    });

});

const modal = document.querySelector("#feature-modal");
const modalClose = document.querySelector("#modal-close");
const modalAction = document.querySelector("#modal-action");
const header = document.querySelector(".header");

let modalOpened = false;
let modalTimer;

function openModal() {
    if (modalOpened) return;
    modalOpened = true;
    clearTimeout(modalTimer);
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modalClose.focus();
}

function closeModal() {
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}
if (window.matchMedia("(hover: hover)").matches) {
    header.addEventListener("mouseenter", openModal);
}
modalTimer = setTimeout(openModal, 30000);
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        modal.classList.contains("is-visible")
    ) {
        closeModal();
    }
});
modalAction.addEventListener("click", closeModal);


const joinedCount = document.querySelector("#joined-count");

if (joinedCount) {
    const startValue = 35000;
    const duration = 20000;
    const startTime = performance.now();

    function updateJoinedCount(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const remaining = Math.ceil(
            startValue * (1 - progress)
        );

        joinedCount.textContent =
            progress >= 1
                ? "0"
                : remaining.toLocaleString("en-US");

        if (progress < 1) {
            requestAnimationFrame(updateJoinedCount);
        }
    }

    requestAnimationFrame(updateJoinedCount);
}

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");

if (menuToggle && mobileMenu) {
    function setMenu(open) {
        mobileMenu.classList.toggle("open", open);
        document.body.classList.toggle("menu-open", open);
        menuToggle.setAttribute("aria-expanded", String(open));
        menuToggle.setAttribute("aria-label", open ? "Zamknij menu" : "Otwórz menu");
    }

    menuToggle.addEventListener("click", () => {
        setMenu(!mobileMenu.classList.contains("open"));
    });
    mobileMenu.addEventListener("click", (event) => {
        if (event.target.closest("button, a")) setMenu(false);
    });
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".navbar")) setMenu(false);
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") setMenu(false);
    });

    window.matchMedia("(min-width: 601px)").addEventListener("change", (e) => {
        if (e.matches) setMenu(false);
    });
}


const form = document.querySelector("#newsletter-form");

if (form) {
    const field = form.querySelector(".field");
    const input = form.querySelector("#newsletter-email");
    const errorIcon = form.querySelector(".field-icon");
    const errorText = form.querySelector(".field-error");
    const success = document.querySelector(".form-success");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function showError(message) {
        field.classList.add("has-error");
        errorText.textContent = message;
        errorText.hidden = false;
        errorIcon.hidden = false;
        input.setAttribute("aria-invalid", "true");
        success.hidden = true;
    }

    function clearError() {
        field.classList.remove("has-error");
        errorText.hidden = true;
        errorIcon.hidden = true;
        input.removeAttribute("aria-invalid");
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const value = input.value.trim();

        if (value === "") {
            showError("Whoops, the email field can't be empty");
        } else if (!emailPattern.test(value)) {
            showError("Whoops, make sure it's an email");
        } else {
            clearError();
            form.reset();
            success.hidden = false;
        }
    });

    input.addEventListener("input", clearError);
}