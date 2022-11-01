window.onload=()=>{
    let searchBtn = document.querySelector("#searchBtn");
    let searchField = document.querySelector("#searchField");

    searchBtn.onclick = (event)=>{
        event.preventDefault();
        fetch("superheroes.php")
        .then(response => {
            if (response.ok) {
                return response.text()
            } else {
                return Promise.reject('something went wrong!')
            }
        }).then(data=> {
            alert(data);
        })
    }
}