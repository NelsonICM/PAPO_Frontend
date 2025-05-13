const API_BASE = 'http://localhost:5000/api'

// Obtener películas por categoría (existente)
export const fetchMovies = async (category) => {
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(`${API_BASE}/movies?category=${category}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    return { data: [] }
  }
}

// Registrar usuario (existente)
export const registerUser = async (userData) => {
  return fetch(`${API_BASE}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  })
}

// Nuevas funciones añadidas:

// Login de usuario
export const loginUser = async (credentials) => {
  return fetch(`${API_BASE}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  })
}

// Búsqueda de películas por título
export const searchMovies = async (title) => {
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(`${API_BASE}/movies?title=${title}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    return { data: [] }
  }
}

// Enviar mensaje de contacto
export const sendContactMessage = async (messageData) => {
  return fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(messageData)
  })
}

// Obtener detalles de una película específica
export const getMovieDetails = async (movieId) => {
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(`${API_BASE}/movies/${movieId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}