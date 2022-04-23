
console.log("Welcome to INDIAN SHATABDI NEWS");

let Key = "cd4ddf4862884d72a56b1ce3bdd97865";
let source = "country=us";
let newsContainer = document.getElementById("accordionNews");

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?${source}&apiKey=${Key}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        console.log(JSON.parse(this.responseText) );
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        for (news in articles) {
            // console.log(articles[news].title);
            // let finalNews = news.replace("Accordion Item #1",` ${articles[news].title}`)
            // console.log(finalNews);
            newsContainer.innerHTML += `<div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading${news+1}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapse${news+1}" aria-expanded="false" aria-controls="flush-collapse${news+1}">
                    ${articles[news].title}
                </button>
            </h2>
            <div id="flush-collapse${news+1}" class="accordion-collapse collapse" aria-labelledby="flush-heading${news+1}"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">${articles[news].description} <a href = "${articles[news].url}" target="_blank">Read more</a> </div>
            </div>
            </div>`;
        }
    }
    else {
        console.log("Some error occured");
    }
}

xhr.send();