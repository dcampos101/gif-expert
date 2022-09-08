export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gBsQhcGWOzbnNKHFr9aRmTi8V9MxX9V1&q=${category}&limit=20`;
    //const url = `https://api.mercadolibre.com/sites/MLA/search?q=samsung&limit=5`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    //const { results } = await resp.json();
    //console.log(results);
    //console.log(data);
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    //console.log(gifs);
    return gifs;
}