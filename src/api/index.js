/**
 * Mocking client-server processing
 */
const _products = [
  { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
  { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
  { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 }
]

export const signup = (creds, cb) => {
  console.log(creds)
  // var data = new FormData();
  // data.append( "json", JSON.stringify( creds ) );

  fetch('https://bookr-api-alpha.herokuapp.com/auth/signup', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(creds)
  })
  .then(res => res.json())
  .then(cb)
}

export const buyProducts = (products, cb, errorCb) => {
  setTimeout(() => {
    // simulate random checkout failure.
    Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1
      ? cb()
      : errorCb()
  }, 100)
}
