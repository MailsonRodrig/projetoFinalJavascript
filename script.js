
const pexelsApiKey = 'lRMMRGLYMsruFCUfsHg4p0ySkKrCPjqnWbb357C5W3Sg2hHdq2kWRiar';


function buscarImagens(query) {

    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=250`;


    fetch(url, {
        headers: {
            Authorization: pexelsApiKey
        }
    })
    .then(response => {

        if (!response.ok) {
            throw new Error('Erro ao buscar imagens');
        }

        return response.json();
    })
    .then(data => {

        data.photos.forEach(imagem => {
            console.log(imagem);
            console.log('Fotógrafo:', imagem.photographer);
            console.log('URL da imagem:', imagem.src.original);
            console.log('-------------');
        });
    })
    .catch(error => {
        console.error('Erro ao buscar imagens:', error);
    });
}


buscarImagens('nature');
