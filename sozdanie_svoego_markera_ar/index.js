
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
        case "whole_code__ssma": 
            click_copy_handler(document.getElementById('whole_code__ssma').textContent, "whole_code__ssma__icon");
            break;
    }
}