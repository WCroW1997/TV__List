const apiConfig = {
    API_KEY: 'cd8c616ed6b25eb05fd6fd488ec8ee4e',
    API_URL: 'https://api.themoviedb.org/3/' ,
    category: ['movie', 'tv'],
    popular: 'popular',
    language: 'en',
    page: '1',
    // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig