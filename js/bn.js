let slideIndex = 0;

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {

    // ถ้าเกินสไลด์สุดท้าย ให้กลับไปสไลด์แรก
    if (index >= slides.length) {
        slideIndex = 0;
    }

    // ถ้าก่อนสไลด์แรก ให้ไปสไลด์สุดท้าย
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    else {
        slideIndex = index;
    }

    // เอา active ออกจากทุกสไลด์
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    // เอา active ออกจากทุกจุด
    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    // เปิดสไลด์ปัจจุบัน
    slides[slideIndex].classList.add("active");

    // เปิดจุดปัจจุบัน
    dots[slideIndex].classList.add("active");
}


// ปุ่มซ้ายขวา
function changeSlide(number) {
    showSlide(slideIndex + number);
}


// กดจุด
function currentSlide(index) {
    showSlide(index);
}


// เริ่มต้นที่สไลด์แรก
showSlide(0);

setInterval(() => {
    changeSlide(1);
}, 5000);