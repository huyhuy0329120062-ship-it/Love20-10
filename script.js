// ================================
// LẤY CÁC THÀNH PHẦN HTML
// ================================
const presentScreen =
    document.getElementById("presentScreen");

const openGiftBtn =
    document.getElementById("openGiftBtn");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const questionScreen =
    document.getElementById("questionScreen");

const loginScreen =
    document.getElementById("loginScreen");

const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const message =
    document.getElementById("message");

const loginBtn =
    document.getElementById("loginBtn");

const username =
    document.getElementById("username");

const password =
    document.getElementById("password");

const loginMessage =
    document.getElementById("loginMessage");
const giftScreen =
    document.getElementById("giftScreen");

const openLetterBtn =
    document.getElementById("openLetterBtn");

const loveLetter =
    document.getElementById("loveLetter");

const fallingContainer =
    document.getElementById("fallingContainer");



// =================================
// BẤM NÚT KHÔNG
// =================================

noBtn.addEventListener("click", function () {

    // Nút Không biến mất
    noBtn.style.display = "none";


    // Hiện thông báo
    message.innerHTML =
        "Hông được chọn 'Không' đâu 😝<br>" +
        "Chỉ còn một lựa chọn thôi nha ❤️";

});



// =================================
// BẤM NÚT CÓ
// =================================

yesBtn.addEventListener("click", function () {

    // Ẩn màn hình câu hỏi
    questionScreen.classList.add("hidden");


    // Hiện màn hình đăng nhập
    loginScreen.classList.remove("hidden");


    // Đưa con trỏ vào username
    username.focus();

});



// =================================
// KIỂM TRA ĐĂNG NHẬP
// =================================

loginBtn.addEventListener("click", function () {

    const user =
        username.value.trim();

    const pass =
        password.value.trim();


    // Nếu chưa nhập gì
    if (user === "" || pass === "") {

        loginMessage.style.color = "#ff4f81";

        loginMessage.innerHTML =
            "Em nhập đầy đủ đã nha 😚";

        return;
    }


    // Kiểm tra tài khoản
    if (
        user === "Binh" &&
        pass === "09012008"
    ) {

        loginMessage.style.color = "#ff4f81";

        loginMessage.innerHTML =
            "Đúng rồi ❤️ Đang mở quà cho bé...";


        setTimeout(function () {

            // Ẩn đăng nhập
            loginScreen.classList.add("hidden");

            // Hiện màn hình hộp quà
            presentScreen.classList.remove("hidden");

        }, 800);

    }

    else {

        loginMessage.style.color = "#e63946";

        loginMessage.innerHTML =
            "Sai mật mã rồi bé ơi 😝 Thử lại nha!";

    }

});



// =================================
// NHẤN ENTER ĐỂ ĐĂNG NHẬP
// =================================

password.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            loginBtn.click();

        }

    }
);
// =================================
// MỞ BỨC THƯ
// =================================

openLetterBtn.addEventListener(
    "click",
    function () {

        loveLetter.classList.remove("hidden");

        openLetterBtn.style.display = "none";


        // Cuộn nhẹ xuống bức thư
        setTimeout(function () {

            loveLetter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 300);

    }
);
// =================================
// HOA + TRÁI TIM RƠI
// =================================

function startFalling() {

    const symbols = [
        "❤️",
        "💕",
        "🌸",
        "🌷",
        "💗",
        "🌹"
    ];


    setInterval(function () {

        const item =
            document.createElement("div");


        item.classList.add(
            "falling-item"
        );


        // Chọn ngẫu nhiên hoa/tim
        item.innerHTML =
            symbols[
            Math.floor(
                Math.random()
                * symbols.length
            )
            ];


        // Vị trí ngẫu nhiên
        item.style.left =
            Math.random() * 100 + "vw";


        // Kích thước
        item.style.fontSize =
            (Math.random() * 15 + 18)
            + "px";


        // Tốc độ rơi
        const duration =
            Math.random() * 4 + 5;


        item.style.animationDuration =
            duration + "s";


        fallingContainer.appendChild(
            item
        );


        // Xóa sau khi rơi xong
        setTimeout(function () {

            item.remove();

        }, duration * 1000);


    }, 450);
}
// =================================
// MỞ MÓN QUÀ
// =================================

openGiftBtn.addEventListener(
    "click",
    function () {

        // Phát nhạc
        backgroundMusic.volume = 0.5;

        backgroundMusic.play()
            .catch(function (error) {

                console.log(
                    "Không thể phát nhạc:",
                    error
                );

            });


        // Hiệu ứng nút
        openGiftBtn.innerHTML =
            "Đang mở... ❤️";


        setTimeout(function () {

            // Ẩn màn hình hộp quà
            presentScreen.classList.add(
                "hidden"
            );


            // Hiện thiệp
            giftScreen.classList.remove(
                "hidden"
            );


            // Hoa + tim bắt đầu rơi
            startFalling();


            // Đưa trang lên đầu
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 800);

    }
);