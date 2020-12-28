import Home from './views/Home.js';
import Tech from './views/Tech.js';

const root = null;
const useHash = true; // Defaults to: false
const hash = '#!'; // Defaults to: '#'
const router = new Navigo(root, useHash, hash);


console.log(router)
router.on({
    '/': Home,
    '/Technologie': Tech,
})
.resolve();