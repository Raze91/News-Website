import { router } from '../router.js';
export default function () {

    sessionStorage.removeItem("articleList");
    $("#root").empty()

    $("#root").append(`
    <h1>Général</h1>
    <section id="ctnr"><h2>Loading ...</h2></section>
    `)

    $.ajax({
        url: 'http://newsapi.org/v2/top-headlines?country=fr&apiKey=20bd631a035141d1bb5cebb9b6529e1d',
        dataType: "json"
    })
        .then((result) => {
            $("#ctnr").empty()
            sessionStorage.setItem("articleList", JSON.stringify(result))
            $.each(result.articles, function (index, result) {
                $("#ctnr").append(
                    `<article id="${result.title}">
                        <img src="${result.urlToImage !== null ? result.urlToImage : "assets/imageNotFound.png"}" alt="">
                        <div>
                            <h2>${result.title}</h2>
                            <p>${result.description !== null ? result.description : "Pas de Description"}</p>
                        </div>
                    </article>`
                )
            })

            $("article").on("click", function () {
                console.log(this.id)
                router.navigate(`/article/${this.id}`);
            })
        })
        .catch((error) => {
            console.log(error);
            $("#ctnr").empty();
            $("#ctnr").append(`<h2>Une erreur est survenue ...</h2>`);
        })
}

