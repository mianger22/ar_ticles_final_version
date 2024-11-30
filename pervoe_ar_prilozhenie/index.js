
// ---------------------------------------------------- общее -----------------------------------------------------

const copy_icon = `<img alt="copy icon" class="copy_icon" src="../common/pictures/icons/copy_icon.png">`;
const successful_copy_icon = `<img alt="successful copy icon" class="success_icon" src="../common/pictures/icons/success_icon.png">`;

function click_copy_handler(code, id_icon) {
    // копируем код
    navigator.clipboard.writeText(code);
    // меняем иконку копирования на иконку успеха
    document.getElementById(id_icon).innerHTML = successful_copy_icon;
    // возвращаем иконку копирования
    setTimeout(() => document.getElementById(id_icon).innerHTML = copy_icon, 3000);
}

// ---------------------- добавляем значок иконки копирования всем иконкам копирования -----------------------------

Array.from(document.querySelectorAll('.copy_icon')).forEach(icon => {
    icon.src = "../common/pictures/icons/copy_icon.png"
});

// ------------------------------------------- копирование пользователем кода -------------------------------------

function copying(id) {
    switch (id) {
        case "create_default_html":
            click_copy_handler(document.getElementById('create_default_html').textContent, "create_default_html__icon");
            break;
        case "connect_ar":
            click_copy_handler(document.getElementById('connect_ar').textContent, "connect_ar__icon");
            break;
        case "ar_code": 
            click_copy_handler(document.getElementById('ar_code').textContent, "ar_code__icon");
            break;
        case "whole_code": 
            click_copy_handler(document.getElementById('whole_code').textContent, "whole_code__icon");
            break;
        case "git_commands": 
            click_copy_handler(document.getElementById('git_commands').textContent, "git_commands__icon");
            break;
    }
}