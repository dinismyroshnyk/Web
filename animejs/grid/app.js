const wrapper = document.getElementById('tiles');

let clickCount = 1;

let columns = 0,
    rows = 0;

const handleOnClick = index => {
    if (clickCount % 2 === 0) {
        anime({
            targets: ".tile",
            translateX: 0,
            translateY: 0,
            rotate: 0,
            scale: 1,
            duration: 3000,
            easing: "easeOutElastic(1, .8)",
        })
        clickCount++;
    } else {
        anime({
            targets: ".tile",
            translateX: () => anime.random(-100, 100),
            translateY: () => anime.random(-100, 100),
            rotate: () => anime.random(-360, 360),
            scale: () => anime.random(0.5, 1.5),
            duration: 2000,
            easing: "easeOutElastic(1, .8)",
            delay: anime.stagger(3),     
        })
        clickCount++;
    }
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