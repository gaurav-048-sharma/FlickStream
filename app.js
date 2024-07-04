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
    // console.log(data[1]);
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
    search_input.addEventListener("keyup" ,() => {
        let filter = search_input.value.toUpperCase();
        let a = search.getElementsByTagName('a');
        for (let i = 0; i < a.length; i++) {
            let b = a[i].getElementsByClassName('cont')[0];
            let textValue = b.textContent || a.textContent;
            if(textValue.toUpperCase().indexOf(filter) > -1) {
                // a[i].style.display = "";
                a[i].style.display = "flex";
                search.style.visibility = "visible";
                search.style.opacity = 1;
            } else {
                a[i].style.display = "none";
            }
            if(search_input.value == 0){
                search.style.visibility = "hidden";
                search.style.opacity = 0;
            }
            // console.log(b);
        }

    });

    let video = document.getElementsByTagName('video')[0];
    let play = document.getElementById('play');
    play.addEventListener('click', () => {
        if(video.paused) {
            video.play();
            play.innerHTML = `Play <i class="fa-solid fa-pause"></i>`
        } else {
            play.innerHTML = `Play <i class="fa-solid fa-play"></i>`
            video.pause();
        }
    });

    let series = document.getElementById("series");
    let movies = document.getElementById("movies");
    series.addEventListener('click', () => {
        cards.innerHTML = '';
        // window.location.href = "series.html";
        let series_arr = data.filter(element => {
            return element.type === "series";
        });

        series_arr.forEach((ele, i) => {
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
    });

    movies.addEventListener('click', () => {
        cards.innerHTML = '';
        // window.location.href = "series.html";
        let movies_arr = data.filter(element => {
            return element.type === "movie";
        });

        movies_arr.forEach((ele, i) => {
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
    });
    
         
       
});
