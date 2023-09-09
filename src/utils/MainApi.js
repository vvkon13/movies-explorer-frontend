class MainApi {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    };

    _request(endPoint, options) {
        return fetch(`${this.baseUrl}${endPoint}`, options).then(this._checkResponse);
    };

    getUserInformation() {
        const token = localStorage.getItem('token');
        return this._request('/users/me', {
            method: 'GET',
            headers: Object.assign(this.headers, { "Authorization": `Bearer ${token}` })
        });
    };

    getMovies() {
        const token = localStorage.getItem('token');
        return this._request('/movies', {
            method: 'GET',
            headers: Object.assign(this.headers, { "Authorization": `Bearer ${token}` })
        });
    };

    setUserInformation({ name, email }) {
        const token = localStorage.getItem('token');
        return this._request('/users/me', {
            method: 'PATCH',
            headers: Object.assign(this.headers, { "Authorization": `Bearer ${token}` }),
            body: JSON.stringify({
                name,
                email
            })
        });
    };

    addMovie({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbnail,
        owner,
        movieId,
        nameRU,
        nameEN
    }) {
        const token = localStorage.getItem('token');
        return this._request('/cards', {
            method: 'POST',
            headers: Object.assign(this.headers, { "Authorization": `Bearer ${token}` }),
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image,
                trailerLink,
                thumbnail,
                owner,
                movieId,
                nameRU,
                nameEN
            })
        });
    };

    deleteMovie(movieId) {
        const token = localStorage.getItem('token');
        return this._request(`/cards/${movieId}`, {
            method: 'DELETE',
            headers: Object.assign(this.headers, { "Authorization": `Bearer ${token}` })
        });
    };

    signUp({ password, email, name }) {
        return this._request('/signup', {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                password: password,
                email: email,
                name: name
            })
        });
    }

    signIn({ password, email }) {
        return this._request('/signin', {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                password: password,
                email: email
            })
        });
    }

    keyAuthentication(token) {
        return this._request('/users/me', {
            method: 'GET',
            headers: Object.assign(this.headers, { "Authorization": `Bearer ${token}` })
        });
    }

    _checkResponse = (res) => {
        if (res.ok) {
            return res.json();
          }
          return res.json().then(res=>Promise.reject(res));
        }
    }

export const api = new MainApi({
    baseUrl: 'https://api.groundhogday.nomoreparties.co',
    headers: {
        'Content-Type': 'application/json'
    }
});
