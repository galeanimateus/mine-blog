function abrirMenu() {

    document.getElementById("menuConta").classList.toggle("mostrar");
}

 
window.onclick = function(event) {

    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropbtn')) {

      let dropdowns = document.getElementsByClassName("dropdown-content");

        for (let i = 0; i < dropdowns.length; i++) {

            let openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('mostrar')) {

            openDropdown.classList.remove('mostrar');

            }
        }
    }
}
