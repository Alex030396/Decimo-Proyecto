document.addEventListener("DOMContentLoaded", function() {
    eventListeners();
});
function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResponsive);
}
function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');
   navegacion.classList.toggle('mostrar');   //Lo de abajo es lo mismo con mas pasos y mas seguro para comenzar-
    // if(navegacion.classList.contains('mostrar')) {
    //     navegacion.classList.remove('mostrar');
    // } else {
    //     navegacion.classList.add('mostrar');
    // }
}