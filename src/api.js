const BASE_URL = '/api'

const api = {
  getPart: (id) => fetch(`${BASE_URL}/part?id=${id}`),
  getCatalog: (id) => fetch(`${BASE_URL}/catalog?id=${id}`),
  postCatalog: (data) =>
    fetch(`${BASE_URL}/catalog`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  postQuote: (data) =>
    fetch(`${BASE_URL}/quote`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }),
}

export default api
