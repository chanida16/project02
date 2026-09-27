  let cartCount = 0;

        function addCart() {

            cartCount++;

            document.getElementById("cart-count").textContent = cartCount;

            alert("เพิ่มสินค้าลงตะกร้าแล้ว 🛒");

        }


        function plus(button) {

            let number = button.parentElement.querySelector("span");

            number.textContent = parseInt(number.textContent) + 1;

        }


        function minus(button) {

            let number = button.parentElement.querySelector("span");

            let value = parseInt(number.textContent);

            if (value > 1) {

                number.textContent = value - 1;

            }

        }