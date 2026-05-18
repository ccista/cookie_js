/******  *******/
// Функция для установки куки
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Функция для получения значения куки
function getCookie(name) {
  const cookieName = `${name}=`;
  const cookies = document.cookie.split(';');
  
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  
  return null;
}

// Проверяем наличие куки для таблички
const notificationCookie = getCookie('notificationShown');
if (!notificationCookie) {
    document.querySelector('.cookie').style.display = "flex"
}else{
    document.querySelector('.cookie').style.display = "none"
}
document.getElementById('closeNotification').addEventListener('click', function() {
    // Устанавливаем куки на 30 дней
    setCookie('notificationShown', 'true', 150);
    document.querySelector('.cookie').style.display = "none"
});
/******  *******/
