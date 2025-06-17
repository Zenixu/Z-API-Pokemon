
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
