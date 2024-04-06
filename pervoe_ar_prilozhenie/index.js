// общее
const Codes = {
    "head_code": `<!DOCTYPE html>
        <html lang="ru">
            \u00a0\u00a0\u00a0<head>
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta charset="UTF-8">
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta http-equiv="X-UA-Compatible" content="ie=edge">
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<title>My first AR application</title>
            \u00a0\u00a0\u00a0</head>
            \u00a0\u00a0\u00a0<body>
            `,
    "comments": {
        "code": `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// Тут будет наш код`,
        "connect": `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// Мы подключили библиотеку AR.js`
    },
    "correct_meta": `
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">

    `,
    "uncorrect_meta": `
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    `,
    "connect_AR": `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>`,
    "end_code": `
    \u00a0\u00a0\u00a0</body>
        </html>`,
    "body_AR": `
    \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-scene embedded arjs>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-marker preset="hiro">
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-text value="My first AR application" color="blue" scale="2 2 1"></a-text>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</a-marker>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-entity camera></a-entity>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</a-scene>`,
    "git_commands": 
        `git add --all
        git commit -m "my first commit"
        git push`,
    "another_version_ar_text": `<a-entity text="value: My first AR application"></a-entity>`
}

const create_default_html_code = Codes.head_code + Codes.end_code;
const connect_ar_code = Codes.head_code + Codes.connect_AR + Codes.end_code;
const writing_ar_code = Codes.body_AR;
const another_version_ar_text_code = Codes.another_version_ar_text;
const final_code = Codes.head_code + Codes.connect_AR + Codes.body_AR + Codes.end_code;
const git_commands_code = Codes.git_commands;

const copy_icon = `<img width="20" height="20" src="https://img.icons8.com/ios/50/copy--v1.png" alt="copy icon" />`;
const success_copy_icon = `<img width="32" height="32" src="https://img.icons8.com/fluency/48/ok--v1.png" alt="success copied icon"/>`;

function common_copy_function(code, id_icon) {
    // копируем код
    navigator.clipboard.writeText(code);
    // меняем иконку копирования на иконку успеха
    document.getElementById(id_icon).innerHTML = success_copy_icon;
    // возвращаем иконку копирования
    setTimeout(() => {
        document.getElementById(id_icon).innerHTML = copy_icon;
    }, 3000);
}

// стартовое заполнение блоков кодом 
function filling_divs() {
    document.getElementById("create_default_html").textContent = create_default_html_code;
    document.getElementById("connect_ar").textContent = connect_ar_code;
    document.getElementById("writing_ar").textContent = writing_ar_code;
    document.getElementById("another_version_ar_text").textContent = another_version_ar_text_code;
    document.getElementById("final_code").textContent = final_code;
    document.getElementById("git_commands").textContent = git_commands_code;
}

filling_divs();

// копирование пользователем кода
function copy(id) {
    switch (id) {
        case "create_default_html":
            common_copy_function(create_default_html_code, "create_default_html_icon");
            break;
        case "connect_ar":
            common_copy_function(connect_ar_code, "connect_ar_icon");
            break;
        case "writing_ar": 
            common_copy_function(writing_ar_code, "writing_ar_icon");
            break;
        case "another_version_ar_text": 
            common_copy_function(another_version_ar_text_code, "another_version_ar_text_icon");
            break;
        case "final_code": 
            common_copy_function(final_code, "final_code_icon");
            break;
        case "git_commands": 
            common_copy_function(git_commands_code, "git_commands_icon");
            break;
    }
}

// затемнение ссылки в меню ссылок, если она активна
function muteLinkActive() {
    let link = document.getElementById("pervoe_ar_prilozhenie");

    if (window.location.pathname === "/pervoe_ar_prilozhenie/index.html") {
        link.style.color = "gray";
        link.style.textDecoration = "none";
        link.disabled = true;
    }
}

muteLinkActive();