export default function (params) {

    // console.log(params)
    const articleList = JSON.parse(sessionStorage.articleList).articles;
    let selectedArticle;
    $("#root").empty()

    articleList.forEach(element => {
        console.log(element.title)
        if (element.title === params) {
            console.log(element)
            selectedArticle = element;
        }
    });
    if(selectedArticle) {
        $("#root").append(`
        <h1>${selectedArticle.title}</h1>
        <img src="${selectedArticle.urlToImage}" alt="">
        `)
    }
}