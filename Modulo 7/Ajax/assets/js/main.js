//XMLHttpRequest
const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'url', true); // true para assincrono. e false para sincrono
    xhr.open(obj.method, obj.url, true);
    //OBS SE FOSSE POST TERIA QUE USAR xhr.send(); MAS ESTAMOS USANDO GET
    xhr.send();
    /*mesmo que onload*/ xhr.addEventListener("load", () => {
      /*mesmo que onload*/
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject({
          code: xhr.status,
          msg: xhr.statusText,
        });
      }
    });
  })
  
};

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href');
  try{
  const response = await request({
    method: 'GET',
    url: href,
  })
  carregaResultado(response);
} catch(e){
  console.log(e);
}
}

function carregaResultado(response){
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
