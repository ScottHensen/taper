import { API } from 'aws-amplify';

const getArchiveSearchResults = (input) => {

  const request = {
    band:    input.band,
    date:    input.date,
    venue:   input.venue,
    isValid: input.band  ? true : false,
    url:     ''
  }
  if (request.isValid) {
    const searchParams =
    // [request.band, request.date, request.song, request.venue]
      [request.band, request.date, request.venue]
        .filter(n => n)
        .join('%20AND%20')

    // request.url = baseUrl.concat(searchParams)
  }

}

const validateAndEncodeURIComponent = (inString) => {
  return inString  ? ( '(' +encodeURIComponent(inString)  +')' ) : ''
}

export default getArchiveSearchResults
