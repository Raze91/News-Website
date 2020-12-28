import Home from './views/Home.js';
import Tech from './views/Tech.js';
import Divertissement from './views/Divertissement.js'

const root = null;
const useHash = true; // Defaults to: false
const hash = '#!'; // Defaults to: '#'
const router = new Navigo(root, useHash, hash);

router.on({
    '/': Home,
    '/Technologie': Tech,
    '/Divertissement': Divertissement
})
.resolve();