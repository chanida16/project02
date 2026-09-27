function confirmPayment() {

    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        );

    const name =
        document.getElementById(
            "customer-name"
        ).value.trim();

    const phone =
        document.getElementById(
            "customer-phone"
        ).value.trim();

    const address =
        document.getElementById(
            "customer-address"
        ).value.trim();


    if (!payment) {

        alert("กรุณาเลือกวิธีการชำระเงิน");

        return;

    }


    if (name === "") {

        alert("กรุณากรอกชื่อ");

        return;

    }


    if (phone === "") {

        alert("กรุณากรอกเบอร์โทรศัพท์");

        return;

    }


    if (address === "") {

        alert("กรุณากรอกที่อยู่");

        return;

    }


    alert(
        "ชำระเงินเรียบร้อยแล้ว 💗\nขอบคุณสำหรับการสั่งซื้อ!"
    );

}