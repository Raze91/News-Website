export default function (params) {

    // console.log(params)
    const articleList = JSON.parse(sessionStorage.articleList).articles;
    let selectedArticle;
    $("#root").empty()

    articleList.forEach(element => {
        if (element.title.substring(0, 20) === params.substring(0, 20)) {
            console.log(element)
            selectedArticle = element;
        }
    });
    if (selectedArticle) {
        $("#root").append(`
        <section class="article">
            <h1>${selectedArticle.title}</h1>
            <p>Par ${(selectedArticle.author != null? selectedArticle.author : "Auteur inconnu")} le ${selectedArticle.publishedAt}</p>
            <img src="${selectedArticle.urlToImage}" alt="">
            <p>${selectedArticle.content}</p>
            <p>${selectedArticle.description}</p>
            <a href="${selectedArticle.url}" target="_blank">Lien vers l'article original</a>
        </section>
        `)
    }
}