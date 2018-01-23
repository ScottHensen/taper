const buildArchiveRequest = (input) => {

  const baseUrl = 'https://archive.org/services/search/v1/scrape?fields=dir,title,date,subject,venue,source&sorts=date&q=collection%3A'
  const request = {
    band:    validateAndEncodeURIComponent(input.band),
    date:    validateAndEncodeURIComponent(input.date),
    // song:    validateAndEncodeURIComponent(input.song),
    venue:   validateAndEncodeURIComponent(input.venue),
    isValid: input.band  ? true : false,
    url:     ''
  }

  if (request.isValid) {
    const searchParams =
    // [request.band, request.date, request.song, request.venue]
      [request.band, request.date, request.venue]
        .filter(n => n)
        .join('%20AND%20')

    request.url = baseUrl.concat(searchParams)
  }

  //temp patch
  //request.url = 'https://archive.org/advancedsearch.php?q=Grateful+Dead+Iko+Iko+Riverport&fl%5b%5d=dir,title,date,venue,source&rows=50&output=json&callback=dercallback'
  request.url = 'https://api.archivelab.org/search?q=collection%3A(GratefulDead)'
  return request
}

const validateAndEncodeURIComponent = (inString) => {
  return inString  ? ( '(' +encodeURIComponent(inString)  +')' ) : ''
}

export default buildArchiveRequest
