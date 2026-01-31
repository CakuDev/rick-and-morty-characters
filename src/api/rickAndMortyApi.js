const BASE_URL = 'https://rickandmortyapi.com/api'

export async function getCharacters(page) {
    const response = await fetch(`${BASE_URL}/character/?page=${page}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error fetching characters data: ${res.error}`)
            }
            return res.json()
        })
        .then(data => data)

    return {
        results: response.results,
        pages: response.info.pages
    }
}