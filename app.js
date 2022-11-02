window.onload=()=>{
    let searchBtn = document.querySelector("#searchBtn");
    let results = document.querySelector("#result");

    searchBtn.onclick = (event)=>{
        event.preventDefault();
        let searchData = document.querySelector("#searchField").value;
        let query = `superheroes.php?query=${searchData}`;
        if (searchData==0) {}
        fetch(query, {
            method: 'GET'
        })
        .then(response => {
            if (response.ok) {
                return response.text()
            } else {
                return Promise.reject('something went wrong!')
            }
        }).then(data=> {
            let headerEle = document.createElement("h2");
            let breakElement = document.createElement("hr");
            let headerContent = document.createTextNode("RESULT");
            headerEle.appendChild(headerContent);
            results.innerHTML='';
            results.innerHTML = data;
            results.prepend(headerEle, breakElement);
        })
    }
}