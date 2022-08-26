const apiConfig = 
{
    baseUrl : 'https://api.themoviedb.org/3/' , 
    apiKey : '29c93a6b6852444c0513338d7cea7958',
    originalImage:(imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image:(imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,

}

 export default apiConfig