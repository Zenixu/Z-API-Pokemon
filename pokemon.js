<<<<<<< HEAD
const content = document.querySelector('#content')
const url = './json/gen3.json'
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
        <li class="card">
          <p>NoDex : ${e.id}</p>
          <p><img src="${e.img}"></p>
          <p>Nama : ${e.name}</p>
          <p>Type: ${e.type}</p>
        </li>
      </ul>`;
    })
    content.innerHTML = dataHTML
})
=======
const content = document.querySelector('#content');
const gens = [
  { url: './json/gen1.json', title: 'Generation 1' },
  { url: './json/gen2.json', title: 'Generation 2' },
  { url: './json/gen3.json', title: 'Generation 3' }
];

const fetchPokemonByGen = async () => {
  for (const gen of gens) {
    const res = await fetch(gen.url);
    const data = await res.json();

    let sectionHTML = `
      <section class="gen-section">
        <h2>${gen.title}</h2>
        <div class="grid">
    `;

    data.forEach((e) => {
      sectionHTML += `
        <div class="card">
          <img src="${e.img}" alt="${e.name}">
          <h3>${e.name}</h3>
          <p><strong>NoDex:</strong> ${e.id}</p>
          <p><strong>Type:</strong> ${e.type}</p>
        </div>
      `;
    });

    sectionHTML += `
        </div>
      </section>`;
    content.innerHTML += sectionHTML;
  }
};

document.addEventListener('DOMContentLoaded', fetchPokemonByGen);
>>>>>>> b957f45 (Update API)
