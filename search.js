
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

//btn search
search_btn.addEventListener("click", function()
{   
    //input value
    const input_value = search_bar.value.toLowerCase();
    //show what user want to search
    if (input_value != "")
    {
        to_find.innerHTML = input_value;
    }

    //result found
    let count_found = 0;

    //for each element
    list_element.forEach(elm => 
    {
        //get title and text value
        const title = elm.querySelector("h1")?.textContent.toLowerCase() || "";
        const text = elm.querySelector("p")?.textContent.toLowerCase() || "";

        //if title or text have input_value
        if (title.includes(input_value) || text.includes(input_value))
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
