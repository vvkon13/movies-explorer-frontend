class MoviesApi {
    constructor(options) {
      this.baseUrl = options.baseUrl;
    };
  
    _request(endPoint, options) {
      return fetch(`${this.baseUrl}${endPoint}`, options).then(this._checkResponse);
    };
  
    getMovies() {
      return this._request('/', {
        method: 'GET',
      });
    };
  
    _checkResponse = (res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Error');
    }
  }
  
 export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  });
  