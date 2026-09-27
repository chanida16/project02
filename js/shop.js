// =========================
// หมวดหมู่สินค้า
// =========================

const categories = [
    "all",
    "clothes",
    "bag",
    "shoes",
    "accessories"
];


// หมวดหมู่ปัจจุบัน

let currentCategory = 0;


// =========================
// แสดงหมวดหมู่
// =========================

function showCategory(category, button) {

    const products =
        document.querySelectorAll(".product-card");


    const buttons =
        document.querySelectorAll(".category");


    // เปลี่ยนปุ่มที่เลือก

    buttons.forEach(btn => {

        btn.classList.remove("active");

    });


    button.classList.add("active");


    // หัวข้อ

    const title =
        document.getElementById("shop-title");


    if (category === "all") {

        title.innerText =
            "สินค้าแนะนำ";

    }


    if (category === "clothes") {

        title.innerText =
            "เสื้อผ้า";

    }


    if (category === "bag") {

        title.innerText =
            "กระเป๋า";

    }


    if (category === "shoes") {

        title.innerText =
            "รองเท้า";

    }


    if (category === "accessories") {

        title.innerText =
            "เครื่องประดับ";

    }


    // แสดง / ซ่อนสินค้า

    products.forEach(product => {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {

            product.style.display = "block";

        }
        else {

            product.style.display = "none";

        }

    });


    // จำหมวดหมู่ปัจจุบัน

    currentCategory =
        categories.indexOf(category);

}



// =========================
// เพิ่มจำนวน
// =========================

function plus(button) {

    const quantity =
        button.parentElement
        .querySelector("span");


    let number =
        parseInt(quantity.innerText);


    number++;


    quantity.innerText =
        number;

}



// =========================
// ลดจำนวน
// =========================

function minus(button) {

    const quantity =
        button.parentElement
        .querySelector("span");


    let number =
        parseInt(quantity.innerText);


    if (number > 1) {

        number--;

    }


    quantity.innerText =
        number;

}



// =========================
// เพิ่มรถเข็น
// =========================

function addCart() {

    const cartCount =
        document.getElementById("cart-count");


    let number =
        parseInt(cartCount.innerText);


    number++;


    cartCount.innerText =
        number;


    alert(
        "เพิ่มสินค้าลงรถเข็นแล้ว"
    );

}



// =========================
// ปุ่มถัดไป
// =========================

function nextCategory() {

    currentCategory++;


    if (
        currentCategory >=
        categories.length
    ) {

        currentCategory = 0;

    }


    const category =
        categories[currentCategory];


    const buttons =
        document.querySelectorAll(".category");


    showCategory(
        category,
        buttons[currentCategory]
    );

}



// =========================
// ปุ่มชำระเงิน
// =========================

function payment() {

    alert(
        "กำลังไปหน้าชำระเงิน"
    );

}