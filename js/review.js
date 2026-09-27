// =========================
// คะแนนดาว
// =========================

let selectedStar = 0;


function selectStar(number) {

    selectedStar = number;

    const stars =
        document.querySelectorAll(".stars span");


    stars.forEach((star, index) => {

        if (index < number) {

            star.classList.add("active");

        } else {

            star.classList.remove("active");

        }

    });

}



// =========================
// ส่งรีวิว
// =========================

function submitReview() {

    const name =
        document.getElementById("review-name").value.trim();


    const product =
        document.getElementById("review-product").value;


    const text =
        document.getElementById("review-text").value.trim();


    const image =
        document.getElementById("review-image");


    // ตรวจสอบข้อมูล

    if (name === "") {

        alert("กรุณากรอกชื่อ");

        return;

    }


    if (product === "") {

        alert("กรุณาเลือกสินค้า");

        return;

    }


    if (selectedStar === 0) {

        alert("กรุณาเลือกคะแนน");

        return;

    }


    if (text === "") {

        alert("กรุณาเขียนรีวิว");

        return;

    }



    // สร้างกล่องรีวิว

    const review =
        document.createElement("div");


    review.className =
        "review-item";



    // สร้างดาว

    let stars = "";

    for (let i = 1; i <= 5; i++) {

        if (i <= selectedStar) {

            stars += "★";

        } else {

            stars += "☆";

        }

    }



    review.innerHTML = `

        <div class="review-name">
            ${name}
        </div>

        <div class="review-product">
            สินค้า: ${product}
        </div>

        <div class="review-stars">
            ${stars}
        </div>

        <div class="review-message">
            ${text}
        </div>

    `;



    // แสดงรูป

    if (image.files.length > 0) {

        const reader =
            new FileReader();


        reader.onload = function(e) {

            const img =
                document.createElement("img");


            img.src =
                e.target.result;


            img.className =
                "review-image";


            review.appendChild(img);

        };


        reader.readAsDataURL(
            image.files[0]
        );

    }



    // เพิ่มรีวิวด้านบน

    const reviewList =
        document.getElementById("review-list");


    reviewList.prepend(review);



    // ล้างข้อมูล

    document.getElementById(
        "review-name"
    ).value = "";


    document.getElementById(
        "review-product"
    ).value = "";


    document.getElementById(
        "review-text"
    ).value = "";


    document.getElementById(
        "review-image"
    ).value = "";


    selectedStar = 0;


    document.querySelectorAll(
        ".stars span"
    ).forEach(star => {

        star.classList.remove("active");

    });


    alert("ส่งรีวิวเรียบร้อยแล้ว ⭐");

}