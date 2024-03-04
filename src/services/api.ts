const BASE_URL = 'https://fakestoreapi.com'

const api = {
  get: async <T>(endpoint: string): Promise<T> => {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`)
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      return (await response.json()) as T
    } catch (error) {
      console.error('API error:', error)
      throw error
    }
  },
}

export default api
