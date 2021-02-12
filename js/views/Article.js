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
            <p>Par ${(selectedArticle.author != null ? selectedArticle.author : "Auteur inconnu")} le ${selectedArticle.publishedAt}</p>
            <img src="${selectedArticle.urlToImage !== null ? selectedArticle.urlToImage : "assets/imageNotFound.png"}" alt="">
            <p>${selectedArticle.content !== null ? selectedArticle.content : "Pas de contenu pour cet article"}</p>
            <p>${selectedArticle.description !== null ? selectedArticle.description : "Pas de Description pour cet article"}</p>
            <a href="${selectedArticle.url}" target="_blank">Lien vers l'article original</a>
        </section>
        `)
        $("#root").append(`<section id="disqus_thread"></section>`)
    }

    var disqus_config = function () {
        this.page.url = `/article/${params.title}`;  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = params.title; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    (function () { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://newswebsite-1.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
}