const form = document.querySelector('#searchForm');
const container = document.createElement('div')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config)
    container.innerHTML = ''
    makeImages(res.data)
    form.elements.query.value = '';

})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            container.append(img);
            document.body.append(container);
        }

    }
}
