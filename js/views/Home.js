export default function () {

    $("#root").append(`
    <h1>Général</h1>
    <section id="ctnr"></section>
    `)

    $.ajax({
        url: 'http://cors-anywhere.herokuapp.com/' + 'http://newsapi.org/v2/top-headlines?country=fr&apiKey=20bd631a035141d1bb5cebb9b6529e1d',
        dataType: "json"
    })
        .then((result) => {
            console.log("resultats=", result.articles)

            $.each(result.articles, function (index, result) {
                $("#ctnr").append(
                    `<article>
                        <img src="${result.urlToImage}" alt="">
                        <div>
                            <h2>${result.title}</h2>
                            <p>${result.description}</p>
                        </div>
                    </article>`
                )
            })
        })
}

