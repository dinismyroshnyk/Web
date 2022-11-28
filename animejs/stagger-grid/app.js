const wrapper = document.getElementById('tiles');

let clickCount = 1;

let columns = 0,
    rows = 0;

const colors = [
    '#FF0000',
    '#FF7F00',
    '#FFFF00',
    '#00FF00',
    '#0000FF',
    '#4B0082',
    '#8B00FF'
];

let count = -1;

const handleOnClick = index => {
    count++;

    anime({
        targets: ".tile",
        backgroundColor: colors[count % colors.length],
        delay: anime.stagger(50, {grid: [columns, rows], from: index}),
    })
}

const createTile = index => {
    const tile = document.createElement('div');

    tile.classList.add('tile');

    tile.onclick = e => handleOnClick(index);

    return tile;
};

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    });
}

createTiles(columns * rows);

const createGrid = () => {
    wrapper.innerHTML = '';

    columns = Math.floor(document.body.clientWidth / 50),
    rows = Math.floor(document.body.clientHeight / 50);

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

    createTiles(columns * rows);
}

createGrid();

window.onresize = () => createGrid();