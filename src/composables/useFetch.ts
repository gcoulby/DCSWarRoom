export const useFetch = async (endpoint: string, body: any, method: string) => {
  try {
    if (method === 'POST') {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      })
    } else {
      //add body as query parameters
      if (body) {
        const query = new URLSearchParams(body).toString()
        endpoint = endpoint + '?' + query
      }
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return response.json()
    }
  } catch (error) {
    console.error('Error fetching data', error)
    return null
  }
}
