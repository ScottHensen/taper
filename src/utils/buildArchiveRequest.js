const buildArchiveRequest = (input) => {

  const baseUrl = 'https://archive.org/services/search/v1/scrape?fields=dir,title,date,subject,venue,source&sorts=date&q=collection%3A'
  const request = {
    band:    validateAndEncodeURIComponent(input.band),
    date:    validateAndEncodeURIComponent(input.date),
    song:    validateAndEncodeURIComponent(input.song),
    venue:   validateAndEncodeURIComponent(input.venue),
    isValid: input.band  ? true : false,
    url:     ''
  }

  if (request.isValid) {
    const searchParams =
      [request.band, request.date, request.song, request.venue]
        .filter(n => n)
        .join('%20AND%20')

    request.url = baseUrl.concat(searchParams)
  }

  return request
}

const validateAndEncodeURIComponent = (inString) => {
  return inString  ? ( '(' +encodeURIComponent(inString)  +')' ) : ''
}

export default buildArchiveRequest
