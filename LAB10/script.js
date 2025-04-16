const imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';
const imgSizes_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&format=json&nojsoncallback=1';

async function getimg() {
    const res = await fetch(imglist_Url);
    const data = await res.json();
    const photos = data.photos.photo;
    add_new_img(photos);
}

async function add_new_img(photos) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = ""; 

    for (let photo of photos) {
        const res = await fetch(imgSizes_Url + '&photo_id=' + photo.id);
        const sizeData = await res.json();
        const medium = sizeData.sizes.size.find(size => size.label === 'Medium');

        if (medium) {
            const img = document.createElement("img");
            img.src = medium.source;
            gallery.appendChild(img);
        }
    }
}
