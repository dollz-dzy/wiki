var menu_btn = document.getElementById("menu_icon")
var menu = document.getElementById("menu")


menu_btn.addEventListener("click", function()
{
    if (menu.style.display === "none" || menu.style.display === "") 
    {
        menu.style.display = "block"; 
    } else 
    {
        menu.style.display = "none"; 
    }
})

window.addEventListener("scroll", function() 
{
    menu.style.display = "none";
});

document.addEventListener('click', function(event) {
  document.querySelectorAll('details[open]').forEach(details => {
    if (!details.contains(event.target)) {
      details.open = false; 
    }
  });
});

var menu_content = `
    <a href="index.html">Acasa</a>
    <a href="index.html">Cauta</a>
    <a href="about_me.html">Despre mine</a>
    <a href="contact_me.html">Contact</a>
`
var list_menu = document.getElementById("list_menu")
    list_menu.innerHTML = menu_content




function RaportFunc() 
{
    let page = document.title || window.location.pathname;

    let email = "malx.personal@gmail.com";
    let subject = "Am gasit o eroare la pagina : " + page;
    let body = "Descrierea erorii:\n\n";

    let mailtoLink = "mailto:" + email
                    + "?subject=" + encodeURIComponent(subject)
                    + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoLink;
}



// deschidem imaginile intr-un tab nou
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    window.open(img.src, '_blank');
  });
});