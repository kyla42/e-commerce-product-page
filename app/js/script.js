// counter /cart popup 
const sub = document.getElementById("sub");
const add = document.getElementById("add");
const count = document.querySelector(".count");
const addToCart = document.querySelector(".addToCart");
const cartCounter = document.querySelector(".cart-counter");
const cartBtn = document.querySelector(".cart-button");
const cartPopUp = document.querySelector(".cart");
const emptyCartPopUp = document.querySelector(".cart-empty");
const numOfProducts = document.querySelector(".number");
const total = document.querySelector(".total");
const empty = document.querySelector(".cart__contents--empty");

const cartClose = () => {
    cartPopUp.classList.add("hidden");
    emptyCartPopUp.classList.add("hidden");
}

num = 0;
cartNum = 0;
price = 125.00;

add.addEventListener("click", () => {
    num++;
    count.textContent = num;
    cartCounter.classList.remove("pop-anim");
});

sub.addEventListener("click", () => {
    if (num !== 0) {
        num--;
        count.textContent = num; 
    }
});

addToCart.addEventListener("click", () => {
    
    if (num !== 0) {
        cartNum += num
        totalPrice = price * cartNum;

        cartCounter.textContent = cartNum;
        numOfProducts.textContent = `x ${cartNum}`; 
        total.textContent = `$${totalPrice.toFixed(2)}`;
   
        cartCounter.classList.remove("hidden");
        cartCounter.classList.add("pop-anim");
        emptyCartPopUp.classList.add("hidden")
    } 
    count.textContent = 0
    num = 0
})

cartBtn.addEventListener("click", () => {
    if (cartNum === 0) {
        emptyCartPopUp.classList.toggle("hidden");
        cartPopUp.classList.add("hidden");
    }
    else {
        cartPopUp.classList.toggle("hidden");
        emptyCartPopUp.classList.add("hidden");
    }
});

empty.addEventListener("click", () => {
    cartNum = 0;
    cartCounter.classList.add("hidden");
    emptyCartPopUp.classList.remove("hidden");
});

window.addEventListener("resize", cartClose)


// image-related
// **main**
const imgFrame = document.querySelector(".imgFrame");
const thumbBtn = document.querySelectorAll(".thumb");

// **modal**
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close");
const imgFrameModal = document.querySelector(".modal-imgFrame");
const thumbBtnModal = document.querySelectorAll(".modal-thumb");
const prevModal = document.querySelector(".modal-prev");
const nextModal = document.querySelector(".modal-next");

// **mobile**
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

productImgs = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg"
];

const resetThumb = () => {
    for (let j of thumbBtn) {
        j.classList.remove("active");
    }
};

const resetThumbModal = () => {
    for (let k of thumbBtnModal) {
        k.classList.remove("active");
    }
};

const thumbImgChanger = (i) => {
    resetThumb();
    resetThumbModal();
    imgFrame.src = productImgs[i];
    imgFrameModal.src = productImgs[i];
    thumbBtn[i].classList.add("active");    
    thumbBtnModal[i].classList.add("active");
}

const nextImg = () => {
    resetThumbModal();
    getSrcModal();
    resetThumb();
    getSrc();
    
    i++;
    if (i > productImgs.length - 1) {
        i = 0;
    };

    imgFrame.src = productImgs[i];
    thumbBtn[i].classList.add("active");
    imgFrameModal.src = productImgs[i];
    thumbBtnModal[i].classList.add("active");
}

const prevImg = () => {
    resetThumbModal();
    getSrcModal();
    resetThumb();  
    getSrc();

    i--;
    if (i < 0) {
        i = productImgs.length - 1;
    };

    imgFrame.src = productImgs[i];
    thumbBtn[i].classList.add("active");
    imgFrameModal.src = productImgs[i];
    thumbBtnModal[i].classList.add("active");
}


// main page image slider
for (let i = 0; i < thumbBtn.length; i++) {
    thumbBtn[i].addEventListener("click", () => {     
        thumbImgChanger(i);
    });
};


// modal on
const mediaSm = window.matchMedia("(max-width: 600px)");

imgFrame.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    cartClose(); 

    if (mediaSm.matches) {
        overlay.classList.add("hidden");
    }
    window.addEventListener("resize", () => {
        if (mediaSm.matches) {
            overlay.classList.add("hidden");
        }
    })
});

// modal off
closeModal.addEventListener("click", () => 
    overlay.classList.add("hidden"));


// modal image slider
const getSrcModal = () => {
    let currentImg = imgFrameModal.getAttribute("src");
    i = productImgs.indexOf(currentImg);
};

for (let i = 0; i < thumbBtnModal.length; i++) {
    thumbBtnModal[i].addEventListener("click", () => {     
        thumbImgChanger(i);
    });
};

nextModal.addEventListener("click", nextImg);
prevModal.addEventListener("click", prevImg);


// mobile screen image slider
const getSrc = () => {
    let currentImg = imgFrame.getAttribute("src");
    i = productImgs.indexOf(currentImg);
}

next.addEventListener("click", nextImg);
prev.addEventListener("click", prevImg);


// mobile menu
const menuBtn = document.querySelector(".hbg-menu");
const mobileOverlay = document.querySelector(".mobile-overlay");
const menuArea = document.querySelector(".menu-area");
const menuClose = document.getElementById("menu-close");

menuBtn.addEventListener("click", () => {
    mobileOverlay.classList.add("active");
    menuArea.classList.add("active");
    cartClose(); 
})

menuClose.addEventListener("click", () => {
    mobileOverlay.classList.remove("active");
    menuArea.classList.remove("active");
})