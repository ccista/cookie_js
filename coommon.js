$(document).ready(function () {
    const cookieBlock = $('.cookie');
    const cookieAccepted = localStorage.getItem('cookieAccepted');

    // Проверяем, было ли принято согласие
    if (cookieAccepted && Date.now() < Number(cookieAccepted)) {
        cookieBlock.hide();
    }

    // Нажатие на кнопку «Принять»
    cookieBlock.find('button').on('click', function () {
        // Срок хранения — 30 дней
        const expires = Date.now() + 30 * 24 * 60 * 60 * 1000;

        localStorage.setItem('cookieAccepted', expires);

        cookieBlock.fadeOut(300);
    });
});
