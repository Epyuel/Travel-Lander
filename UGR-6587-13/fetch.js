let search=document.getElementById("input__button");
let dest=document.getElementById("input__destination");

async function get() {
     const response= await fetch(
        'http://localhost:3333/search/get',
        {
            method:'POST',
            headers: {
                'content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title:document.getElementById("input__destination").value,
                departure:document.getElementById("input__departure").value
            })
        }
    )
    const data= await response.json();
    return location.replace(data.link)
}
