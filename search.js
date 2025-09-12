
//search-elements
const search_bar = document.getElementById("search_bar")
const search_btn = document.getElementById("search_btn")
const search_reset = document.getElementById("search_reset")

//list 
const list_element = document.querySelectorAll(".elm")

//search info 
var to_find = document.getElementById("to_find") //what to find
var fined = document.getElementById("finded") //nr of results
var total_results = document.querySelectorAll(".total_result") //total result in list

//total result
total_results.forEach(elm => 
{
    elm.innerHTML = list_element.length;
});

function normalizeText(str) {
    //normalizam text-ul
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

//btn search
search_btn.addEventListener("click", function()
{   
    //input value
    const input_value = normalizeText(search_bar.value.toLowerCase().trim());
    //show what user want to search
    if (input_value != "")
    {
        to_find.innerHTML = input_value;
    }

    //result found
    let count_found = 0;
    const words = input_value.split(/\s+/);

    //for each element
    list_element.forEach(elm => 
    {
        //get title and text value
        const title = normalizeText(elm.querySelector("h1")?.textContent || "");
        const text = normalizeText(elm.querySelector("p")?.textContent || "");

        const matchesAny = words.some(word => title.includes(word) || text.includes(word));

        //if title or text have input_value
        if (matchesAny)
        {
            //show
            elm.style.display = "";
            //+1
            count_found++;
        }else 
        {
            //hide
            elm.style.display = "none";
        }

    })

    if (count_found === 0) {
        to_find.innerHTML = "Nimic gasit!";
    }

    fined.innerHTML = count_found;

})

//reset bar
search_reset.addEventListener("click", function() 
{
    search_bar.value = "";
    to_find.innerHTML = "Nimic";
    fined.innerHTML = "0"

    list_element.forEach(elm => 
    {
        elm.style.display = "";
    })
})
