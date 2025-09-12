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

var menu_content = `
    <a href="index.html">Acasa</a>
    <a href="index.html">Cauta</a>
    <a href="about_me.html">Despre mine</a>
    <a href="contact_me.html">Contact</a>
`
var list_menu = document.getElementById("list_menu")
    list_menu.innerHTML = menu_content