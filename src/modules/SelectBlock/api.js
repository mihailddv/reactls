export const loadData = path => fetch(`https://loft-taxi.glitch.me/${path}`)
  .then(res => res.json())
  .catch(error => console.log(error));