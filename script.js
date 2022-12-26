const burger = document.getElementById('burger');
const close = document.getElementById('close');
const navlist = document.getElementById('navlist');

if (burger) {
    burger.addEventListener('click', () => {
        navlist.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        navlist.classList.remove('active')
    })
}