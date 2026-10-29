// =============================================
// DANH SÁCH KHÁCH MỜI
// =============================================

const guestList = [
    {
        fullName: "Nguyễn Thị Diệu",
        displayName: "Iu 🫰",
        role: "Chị",
        hostRole: "Hìn 🥰",
        customAliases: [
            "Diệu",
            "NTD"
        ]
    },
    {
        fullName: "Nguyễn Thị Kim Ngân",
        displayName: "Vô Tâm",
        role: "Người",
        hostRole: "Tôi(Không Chào Đón 😏)",
        customAliases: [
            "Kim Ngân",
            "NTKN",
            "KN",
            "Nhỏ Vô Tâm",
            "Ngân"
        ]
    },
    {
        fullName: "Trần Vũ Vân Trúc",
        displayName: "ZT",
        role: "bạn",
        hostRole: "LeHien nhá 🫵",
        customAliases: [
            "Vân Trúc",
            "Zân Trúc",
            "TVVT",
            "ZT",
            "VT",
            "Trúc"
        ]
    },
    {
        fullName: "Phạm Thanh Phát",
        displayName: "Phát",
        role: "Mày",
        hostRole: "Tao 💪",
        customAliases: [
            "Thanh Phát",
            "Phát",
            "PTP"
        ]
    },
    {
        fullName: "Phạm Bá Thịnh",
        displayName: "Thịnh 🖕",
        role: "Chó",
        hostRole: "Tao.",
        customAliases: [
            "Bá Thịnh",
            "Thịnh",
            "PBT"
        ]
    },
    {
        fullName: "Phạm Phú Mỹ",
        displayName: "Mỹ",
        role: "Mày",
        hostRole: "Tao 💪",
        customAliases: [
            "Phú Mỹ",
            "Mỹ",
            "PPM"
        ]
    },
    {
        fullName: "Ngô Thành Trung",
        displayName: "Chun 🖕",
        role: "Chó",
        hostRole: "Tao.",
        customAliases: [
            "Thành Trung",
            "Trung",
            "NTT",
            "NTC",
            "Chun"
        ]
    },
    {
        fullName: "Nguyễn Thị Kim Lanh",
        displayName: "Lanh",
        role: "O",
        hostRole: "Con 💚",
        customAliases: [
            "Kim Lanh",
            "Lanh",
            "NTKL"
        ]
    },
    {
        fullName: "Hồ Thị Nhung",
        displayName: "Nhung 🖕",
        role: "Chị",
        hostRole: "tôi.",
        customAliases: [
            "Nhung",
            "Linh Đan",
            "Thị Nhung",
            "HTN"
        ]
    },
    {
        fullName: "Hồ Thị Bảo Ngân",
        displayName: "Ngân 😏",
        role: "Chị",
        hostRole: "tôi.",
        customAliases: [
            "Bảo Ngân",
            "Ngân",
            "BN",
            "HTBN"
        ]
    },
    {
        fullName: "Ngô Nhật Minh",
        displayName: "Minh",
        role: "Iem",
        hostRole: "anh nhó 😁",
        customAliases: [
            "Nhật Minh",
            "Minh",
            "NNM"
        ]
    },
    {
        fullName: "Trần Thanh Trúc",
        displayName: "Trúc",
        role: "Chụy",
        hostRole: "iem nhóe 🫰",
        customAliases: [
            "Thanh Trúc",
            "Trúc",
            "TTT"
        ]
    },
    {
        fullName: "Trần Hồng Nhi",
        displayName: "Nhi",
        role: "Chụy",
        hostRole: "iem nhóa 🫰",
        customAliases: [
            "Hồng Nhi",
            "Nhi",
            "HN",
            "THN"
        ]
    },
    {
        fullName: "Trần Hồng Phúc",
        displayName: "Gô",
        role: "Anh",
        hostRole: "iem nhó 😁",
        customAliases: [
            "Hồng Phúc",
            "THP",
            "Gô",
            "Phúc"
        ]
    },
    {
        fullName: "Phạm Lê Bảo Trâm",
        displayName: "Trâm",
        role: "Bạn",
        hostRole: "mình nhé!",
        customAliases: [
            "Pon",
            "Trâm",
            "Bảo Trâm",
            "PTBT"
        ]
    },
    {
        fullName: "Trần Nguyễn Văn Thành",
        displayName: "của Iem",
        role: "Người Anh",
        hostRole: "em nháaaa ✌️✌️",
        customAliases: [
            "Văn Thành",
            "Thành",
            "TNVT",
            "Win",
            "VT"
        ]
    },
    {
        fullName: "Trần Nguyễn Văn Đạt",
        displayName: "Bin",
        role: "Iem",
        hostRole: "anh nhó 😁",
        customAliases: [
            "Văn Đạt",
            "Đạt",
            "TNVD",
            "Bin"
        ]
    },
    {
        fullName: "Nguyễn Thị Lành",
        displayName: "Lành",
        role: "O",
        hostRole: "Con 💚",
        customAliases: [
            "NTL",
            "Thị Lành",
            "Lành"
        ]
    },
    {
        fullName: "Trần Văn Lộc",
        displayName: "Lộc",
        role: "Bác",
        hostRole: "Con 💚",
        customAliases: [
            "Văn Lộc",
            "Lộc",
            "TVL"
        ]
    },
    {
        fullName: "Nguyễn Nguyệt",
        displayName: "Nguyệt",
        role: "O",
        hostRole: "Con 💚",
        customAliases: [
            "NN",
            "Nguyệt"
        ]
    },
    {
        fullName: "Thiều Quang Vũ",
        displayName: "Vũ",
        role: "Iem",
        hostRole: "anh nhó!",
        customAliases: [
            "Quang Vũ",
            "Vũ",
            "TQV",
            "Qv"
        ]
    }
];


// =============================================
// CHUẨN HÓA TÊN
// =============================================

function normalizeName(name) {

    return name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");

}


// =============================================
// DANH SÁCH TÊN / ALIAS ĐƯỢC PHÉP
// =============================================

guestList.forEach(guest => {

    guest.allowedNames = [
        guest.fullName,
        ...(guest.customAliases || [])
    ]
        .map(normalizeName)

        // Xóa alias trùng bên trong
        // cùng một khách
        .filter(
            (name, index, array) =>
                array.indexOf(name) === index
        );

});


// =============================================
// KIỂM TRA TÊN / ALIAS BỊ TRÙNG
// =============================================

function checkDuplicateNames() {

    const nameMap =
        new Map();


    guestList.forEach(guest => {

        guest.allowedNames.forEach(name => {

            if (!nameMap.has(name)) {

                nameMap.set(
                    name,
                    []
                );

            }


            nameMap
                .get(name)
                .push(
                    guest.fullName
                );

        });

    });


    nameMap.forEach(
        (guests, name) => {

            if (guests.length > 1) {

                console.warn(
                    `Tên/Alias bị trùng: "${name}"`,
                    guests
                );

            }

        }
    );

}


// Kiểm tra alias ngay khi load script
checkDuplicateNames();


// =============================================
// TÌM KHÁCH
// =============================================

function findGuest(inputName) {

    const normalizedInput =
        normalizeName(inputName);


    const matches =
        guestList.filter(guest =>

            guest.allowedNames.includes(
                normalizedInput
            )

        );


    // Không tìm thấy
    if (matches.length === 0) {

        return {
            status: "not-found"
        };

    }


    // Chỉ có đúng 1 người
    if (matches.length === 1) {

        return {
            status: "found",
            guest: matches[0]
        };

    }


    // Có nhiều khách dùng chung
    // tên hoặc alias
    return {
        status: "duplicate",
        guests: matches
    };

}


// =============================================
// MỞ THIỆP
// =============================================

function openInvitation() {

    const inputName =
        document
            .getElementById("nameInput")
            .value
            .trim();


    // =========================================
    // CHƯA NHẬP TÊN
    // =========================================

    if (inputName === "") {

        alert(
            "Bạn chưa nhập tên 😭"
        );

        return;

    }


    // =========================================
    // TÌM KHÁCH
    // =========================================

    const result =
        findGuest(inputName);


    // =========================================
    // KHÔNG TÌM THẤY
    // =========================================

    if (
        result.status ===
        "not-found"
    ) {

        alert(
            "Tên không đúng hoặc không có trong danh sách khách mời 🥲"
        );

        return;

    }


    // =========================================
    // TÊN / ALIAS BỊ TRÙNG
    // =========================================

    if (
        result.status ===
        "duplicate"
    ) {

        alert(
            "Tên này đang bị trùng với khách mời khác 😭\n" +
            "Bạn nhập họ tên đầy đủ hoặc tên gọi khác nhé."
        );

        return;

    }


    // =========================================
    // ĐÃ TÌM THẤY KHÁCH
    // =========================================

    const guest =
        result.guest;


    // =========================================
    // DANH XƯNG + TÊN KHÁCH TRÊN THIỆP
    // =========================================

    document
        .getElementById("guestRole")
        .textContent =
        guest.role + " ";


    document
        .getElementById("guestName")
        .textContent =
        guest.displayName;


    // =========================================
    // CÁCH HIỀN TỰ XƯNG VỚI KHÁCH
    // =========================================

    document
        .getElementById("hostRole")
        .textContent =
        guest.hostRole;


    // =========================================
    // TÊN TRÊN PHONG BÌ
    // =========================================

    const envelopeGuestRole =
        document.getElementById(
            "envelopeGuestRole"
        );


    const envelopeGuestName =
        document.getElementById(
            "envelopeGuestName"
        );


    if (envelopeGuestRole) {

        envelopeGuestRole.textContent =
            guest.role + " ";

    }


    if (envelopeGuestName) {

        envelopeGuestName.textContent =
            guest.displayName;

    }


    // =========================================
    // CHẠY HIỆU ỨNG PHONG BÌ
    // =========================================

    playEnvelopeAnimation();

}


// =============================================
// HIỆU ỨNG MỞ PHONG BÌ
// =============================================

function playEnvelopeAnimation() {

    const welcomePage =
        document.getElementById(
            "welcomePage"
        );


    const envelopePage =
        document.getElementById(
            "envelopePage"
        );


    const invitationPage =
        document.getElementById(
            "invitationPage"
        );


    const envelope =
        document.querySelector(
            ".envelope"
        );


    // =========================================
    // NẾU KHÔNG CÓ PHONG BÌ
    // =========================================

    if (
        !envelopePage ||
        !envelope
    ) {

        welcomePage.style.display =
            "none";


        invitationPage.style.display =
            "block";


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        return;

    }


    // =========================================
    // ẨN TRANG LOGIN
    // =========================================

    welcomePage.style.display =
        "none";


    // =========================================
    // ẨN THIỆP CHÍNH
    // =========================================

    invitationPage.style.display =
        "none";


    // =========================================
    // HIỆN PHONG BÌ
    // =========================================

    envelopePage.style.display =
        "flex";


    // =========================================
    // RESET ANIMATION
    // =========================================

    envelope.classList.remove(
        "open",
        "finish"
    );


    // =========================================
    // MỞ NẮP PHONG BÌ
    // =========================================

    setTimeout(() => {

        envelope.classList.add(
            "open"
        );

    }, 500);


    // =========================================
    // THIỆP BAY LÊN
    // =========================================

    setTimeout(() => {

        envelope.classList.add(
            "finish"
        );

    }, 2100);


    // =========================================
    // CHUYỂN SANG THIỆP CHÍNH
    // =========================================

    setTimeout(() => {

        envelopePage.style.display =
            "none";


        invitationPage.style.display =
            "block";


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 3200);

}


// =============================================
// NHẤN ENTER ĐỂ MỞ THIỆP
// =============================================

const nameInput =
    document.getElementById(
        "nameInput"
    );


if (nameInput) {

    nameInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Enter"
            ) {

                openInvitation();

            }

        }
    );

}


// =============================================
// CONFETTI DÙNG CHUNG
// =============================================

const CONFETTI_COLORS = [
    "#e5aa3d", // vàng
    "#f1c75b", // vàng nhạt
    "#4c9ac4", // xanh dương
    "#78bfd6", // xanh nhạt
    "#ffffff", // trắng
    "#9ed9ea"  // xanh pastel
];


// =============================================
// TẠO CONFETTI
// =============================================

function createConfetti(
    selector,
    amount,
    minOpacity = 0.5,
    maxOpacity = 0.9,
    maxDrift = 80
) {

    const container =
        document.querySelector(
            selector
        );


    if (!container) {

        return;

    }


    // =========================================
    // XÓA CONFETTI CŨ
    // =========================================

    container
        .querySelectorAll(
            ".falling-confetti"
        )
        .forEach(
            item => item.remove()
        );


    // =========================================
    // TẠO CONFETTI
    // =========================================

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const confetti =
            document.createElement(
                "span"
            );


        confetti.className =
            "falling-confetti";


        // =====================================
        // VỊ TRÍ NGANG
        // =====================================

        const x =
            Math.random() *
            100;


        // =====================================
        // KÍCH THƯỚC
        // =====================================

        const width =
            4 +
            Math.random() *
            6;


        const height =
            10 +
            Math.random() *
            18;


        // =====================================
        // TỐC ĐỘ RƠI
        // =====================================

        const duration =
            7 +
            Math.random() *
            8;


        // Delay âm giúp confetti
        // nằm rải đều ngay khi mở trang

        const delay =
            -(
                Math.random() *
                duration
            );


        // =====================================
        // ĐỘ LẮC NGANG
        // =====================================

        const drift =
            -maxDrift +
            Math.random() *
            maxDrift *
            2;


        // =====================================
        // XOAY
        // =====================================

        const rotateStart =
            Math.random() *
            360;


        const rotateEnd =
            rotateStart +
            360 +
            Math.random() *
            720;


        // =====================================
        // ĐỘ TRONG SUỐT
        // =====================================

        const opacity =
            minOpacity +
            Math.random() *
            (
                maxOpacity -
                minOpacity
            );


        // =====================================
        // MÀU
        // =====================================

        const color =
            CONFETTI_COLORS[
                Math.floor(
                    Math.random() *
                    CONFETTI_COLORS.length
                )
            ];


        // =====================================
        // 20% LÀ HÌNH TRÒN
        // =====================================

        if (
            Math.random() <
            0.2
        ) {

            const size =
                5 +
                Math.random() *
                7;


            confetti.classList.add(
                "confetti-dot"
            );


            confetti.style.setProperty(
                "--w",
                size + "px"
            );


            confetti.style.setProperty(
                "--h",
                size + "px"
            );

        }
        else {

            confetti.style.setProperty(
                "--w",
                width + "px"
            );


            confetti.style.setProperty(
                "--h",
                height + "px"
            );

        }


        // =====================================
        // CSS VARIABLES
        // =====================================

        const variables = {

            "--x":
                x + "vw",

            "--duration":
                duration + "s",

            "--delay":
                delay + "s",

            "--drift":
                drift + "px",

            "--rotate-start":
                rotateStart + "deg",

            "--rotate-end":
                rotateEnd + "deg",

            "--opacity":
                opacity,

            "--color":
                color
        };


        Object.entries(
            variables
        ).forEach(
            ([property, value]) => {

                confetti
                    .style
                    .setProperty(
                        property,
                        value
                    );

            }
        );


        container.appendChild(
            confetti
        );

    }

}


// =============================================
// KHỞI TẠO HIỆU ỨNG
// =============================================

function initDecorations() {

    // =========================================
    // CONFETTI LOGIN
    // =========================================

    createConfetti(
        ".login-confetti-layer",
        100,
        0.38,
        0.73,
        75
    );


    // =========================================
    // CONFETTI THIỆP CHÍNH
    // =========================================

    createConfetti(
        ".party-decoration",
        120,
        0.50,
        0.90,
        80
    );

}


// =============================================
// CHẠY SAU KHI DOM SẴN SÀNG
// =============================================

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initDecorations
    );

}
else {

    initDecorations();

}
