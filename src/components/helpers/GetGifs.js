export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=nXHC2uCJ5qkEK1tCfUCa9ChQbwYXx1iW&q=${category}&limit=10`
    const resp = await fetch (url)
    const { data = [] } = await resp.json() //aca crea la variable con desestructuracion de la respuesta
    
    const gifs = data.map( img => ({  //aca mapeo el arreglo que tiene todas las imagenes de lo que busco
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
    
}