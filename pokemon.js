const content = document.querySelector('#content')
const url = './json/gen1.json'
const hitAPI = async(url) => {
  const api = await fetch(url)
  const data = await api.json()
  return data
};
document.addEventListener('DOMContentLoaded', async () => {
  let data = await hitAPI(url)
  console.log(data)
  let dataHTML = ""
    data.forEach((e) => {
      dataHTML += `
      <ul>
        <li>
          <p>NoDex : ${e.id}</p>
          <p><img src="${e.img}"></p>
          <p>Nama : ${e.name}</p>
          <p>Type: ${e.type}</p>
        </li>
      </ul>`;
    })
    content.innerHTML = dataHTML
})