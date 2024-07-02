let left_btn = document.getElementsByClassName("fa-chevron-left")[0];
let right_btn = document.getElementsByClassName("fa-chevron-right")[0];
let cards = document.getElementsByClassName("cards")[0];
let search = document.getElementsByClassName("search")[0];
let search_input = document.getElementById("search_input");

left_btn.addEventListener("click", () => {
    cards.scrollLeft -= 140;
});
right_btn.addEventListener("click", () => {
    cards.scrollLeft += 140;
});

let json_url = "movie.json";

fetch(json_url)

.then(Response => Response.json())
.then((data) => { 
    console.log(data[1]);
    data.forEach((ele, i) => {
        let {name, imdm, date, sposter, bposter, genre, url} = ele;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
        <img class="poster" src="${sposter}" alt="${name}">
                    <div class="rest-card">
                        <img src="${bposter}" alt="">
                        <div class="cont">
                            <h4>${name}</h4>
                            <div class="sub">
                                <p>${genre} , ${date}</p>
                                <h3><span>IMDB</span><i class="fa-solid fa-star"></i>${imdm}</h3>
                            </div>
                        </div>
                    </div>
        `
        cards.appendChild(card);
    });
    document.getElementById('title').innerText = data[0].name;
    document.getElementById('gen').innerText = data[0].genre;
    document.getElementById('date').innerText = data[0].date;
    document.getElementById('rate').innerHTML = `
    <span>IMDB</span><i class="fa-solid fa-star"></i>${data[0].imdb}`;

    //search data load
    data.forEach(element => {
        let {name, imdm, sposter, genre, url} = element;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
                        <img src="${sposter}" alt="${name}">
                        <div class="cont">
                            <h3>${name}</h3>
                            <p>${genre}, ${date}, <span>IMDB</span><i class="fa-solid fa-star"></i>${imdm}</p>
                        </div>
              
        `
        search.appendChild(card);
    });

    // search filter
    // search_input.addEventListener("keyup" ,() => {
    //     let filter = search_input.value.toUpperCase();
    //     lat a = search

    // })
});

    

    





let p = document.getElementsByClassName("para");
