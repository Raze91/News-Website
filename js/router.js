import Home from './views/Home.js';
import Tech from './views/Tech.js';
import Divertissement from './views/Divertissement.js';
import Article from './views/Article.js';

const root = null;
const useHash = true; // Defaults to: false
const hash = '#!'; // Defaults to: '#'
const router = new Navigo(root, useHash, hash);

router.on({
    '/': Home,
    '/Technologie': Tech,
    '/Divertissement': Divertissement,
    '/article/:title': function(params) {
        Article(params.title)
    }
})
.resolve();

export {router};