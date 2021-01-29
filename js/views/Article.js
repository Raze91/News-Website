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
            <img src="${selectedArticle.urlToImage !== null ? selectedArticle.urlToImage : "assets/imageNotFound.png"}" alt="">
            <p>${selectedArticle.content !== null ? selectedArticle.content : "Pas de contenu pour cet article"}</p>
            <p>${selectedArticle.description !== null ? selectedArticle.description : "Pas de Description pour cet article"}</p>
            <a href="${selectedArticle.url}" target="_blank">Lien vers l'article original</a>
        </section>
        `)
    }
}