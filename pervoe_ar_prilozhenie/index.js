
// ---------------------------------------------------- общее -----------------------------------------------------

const codes = {
    "head_code": `<!DOCTYPE html>
        <html lang="ru">
            \u00a0\u00a0\u00a0<head>
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta charset="UTF-8">
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta http-equiv="X-UA-Compatible" content="ie=edge">
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<title>My first AR app</title>
            \u00a0\u00a0\u00a0</head>
            \u00a0\u00a0\u00a0<body>
            `,
    "comments": {
        "code": `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// Тут будет наш код`,
        "connect": `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// Мы подключили библиотеку AR.js и фреймворк A-Frame`
    },
    "correct_meta": `
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">

    `,
    "uncorrect_meta": `
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    `,
    "connect_AR": `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>`,
    "end_code": `
    \u00a0\u00a0\u00a0</body>
        </html>`,
    "body_AR": `
    \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-scene embedded arjs>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-marker preset="hiro">
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-text value="My first AR app" color="#FFFB8F" position="-1 -1 -2.7" scale="1.5 1.5 1.5"></a-text>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</a-marker>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-entity camera></a-entity>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</a-scene>`,
    "git_commands": 
        `git add --all
        git commit -m "my first commit"
        git push`
}

const create_default_html_code = codes.head_code + codes.end_code;
const connect_ar_code = codes.head_code + codes.connect_AR + codes.end_code;
const writing_ar_code = codes.body_AR;
const final_code = codes.head_code + codes.connect_AR + codes.body_AR + codes.end_code;
const git_commands_code = codes.git_commands;

// -------------------------------------------- заполнение страницы кусками кода -----------------------------------

// (function filling_page_pieces_code() {
//     document.getElementById("create_default_html").textContent = create_default_html_code;
//     document.getElementById("connect_ar").textContent = connect_ar_code;
//     document.getElementById("writing_ar").textContent = writing_ar_code;
//     document.getElementById("final_code").textContent = final_code;
//     document.getElementById("git_commands").textContent = git_commands_code;
// })();

// ---------------------- добавляем значок иконки копирования всем иконкам копирования -----------------------------

Array.from(document.querySelectorAll('.copy_icon')).forEach(icon => {
    icon.src = "../common/pictures/icons/copy_icon.png"
});

// ------------------------------------------- копирование пользователем кода -------------------------------------

const copy_icon = `<img alt="copy icon" class="copy_icon" src="../common/pictures/icons/copy_icon.png">`;
const successful_copy_icon = `<img alt="successful copy icon" class="success_icon" src="../common/pictures/icons/success_icon.png">`;

function click_copy_handler(code, id_icon) {
    // копируем код
    navigator.clipboard.writeText(code);
    // меняем иконку копирования на иконку успеха
    document.getElementById(id_icon).innerHTML = successful_copy_icon;
    // возвращаем иконку копирования
    // setTimeout(() => {
    //     document.getElementById(id_icon).innerHTML = copy_icon;
    // }, 3000);

    setTimeout(() => document.getElementById(id_icon).innerHTML = copy_icon, 3000);
}

function copying(id) {
    switch (id) {
        case "code1":
            click_copy_handler(document.getElementById('code1').textContent, "code1");
            break;
//         case "connect_ar":
//             click_copy_handler(connect_ar_code, "connect_ar_icon");
//             break;
//         case "writing_ar": 
//             click_copy_handler(writing_ar_code, "writing_ar_icon");
//             break;
//         case "final_code": 
//             click_copy_handler(final_code, "final_code_icon");
//             break;
//         case "git_commands": 
//             click_copy_handler(git_commands_code, "git_commands_icon");
//             break;
    }
}