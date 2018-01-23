import { API } from 'aws-amplify'

async function getDataFromTaper(input) {
  const req = {
    band:    input.band,
    date:    input.date,
    venue:   input.venue,
    isValid: input.band  ? true : false
  }
  const resp = {
    request: req,
    response: {}
  }
  // if (req.isValid) {
  //   getData(req)
  //     .then((data) => {
  //       resp.response = data
  //       console.log('resp',resp)
  //       return resp
  //     })
  // }
  if (req.isValid) {
    return await getData(req)
  }
}

async function getData(request) {
  const apiName = 'bandsCRUD'
  const path    = `/bands/${request.band}`
  console.log('GET ' + apiName + path)

  return await API.get(apiName, path)
}

export default getDataFromTaper
