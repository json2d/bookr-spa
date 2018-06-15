const API = "https://bookr-api-alpha.herokuapp.com"
export const signup = (creds, cb) => {

  fetch(API+'/auth/signup', {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(creds)
  })
    .then(res => res.json())
    .then(cb)
}

export const allBooks = (token, cb) => {

  fetch(API+'/books', {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    },
  })
    .then(res => res.json())
    .then(cb)
}

export const contributedBooks = async (cb) => {

  fetch(API+'/books/contributed', {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json())
    .then(cb)
}
