const BASE_URL = 'https://rickandmortyapi.com/api'

export async function getCharacters(page, filters = []) {
    const strFilters = filters.map(f => `${f.key}=${f.value}`).join('&')
    let url = `${BASE_URL}/character/?page=${page}`
    if (strFilters) {
        url += '&' + strFilters
    }
    const response = await fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error fetching characters data: ${res.error ?? 'No error in response'}`)
            }
            return res.json()
        })
        .then(data => data)
        .catch(err => {
            console.log(err)
            return {results: [], info: {pages: 1}}
        })

    return {
        results: response.results,
        pages: response.info.pages
    }
}

export async function getCharactersById(characterId) {
    const url = `${BASE_URL}/character/${characterId}`
    return await fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error fetching characters data: ${res.error}`)
            }
            return res.json()
        })
        .then(data => data)
        .catch(err => {
            console.log(err)
            return []
        })
}


export async function getLocationById(locationId) {
    const url = `${BASE_URL}/location/${locationId}`
    return await fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error fetching characters data: ${res.error}`)
            }
            return res.json()
        })
        .then(data => data)
        .catch(err => {
            console.log(err)
            return []
        })
}

export async function getCharactersByLocation(locationId) {
    // locationId might be the url, so the id has to be extracted from it
    if (typeof locationId == 'string') {
        locationId = getLastSplit(locationId, '/')
    }
    const location = await getLocationById(locationId)
    if (!location || !location.residents) return []

    const charactersId = location.residents.map(r => getLastSplit(r, '/')).join(',')
    return await getCharactersById(charactersId)
}

function getLastSplit(str, separator) {
    const splitStr = str.split(separator)
    return splitStr.length == 1 ? str : splitStr[splitStr.length - 1]
}