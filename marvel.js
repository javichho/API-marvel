//PRIVATEKEY = 'a641cf41140afb6787e624fdca6cdba89e2f7d00'
//PUBLICKEY = '34b816527915034dbaa7a8e6a9bae363'

//const apiKey = '34b816527915034dbaa7a8e6a9bae363';
//const ts = '27/05/2023, 22:24:51';
//const hash = 'c8a0886c1b9717e18442590afa925492 ';


//CARGA DOM
document.addEventListener('DOMContentLoaded',()=>{
     getApi();
})



//Selectores 
const container = document.querySelector('.pintarDatos');
const inputBuscar = document.getElementById('buscador');
const btnBuscar = document.getElementById('btnSearch');

//NAV
document.addEventListener("DOMContentLoaded", function() {
  var navLinks = document.querySelectorAll(".navbar-nav .link");

  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      var navbarCollapse = document.querySelector(".navbar-collapse");
      navbarCollapse.classList.remove("show");
    });
  });
});

/*=== Obtener API (principal) ===*/
const getApi = async ()  => {
    const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=34b816527915034dbaa7a8e6a9bae363&ts=27/05/2023, 22:24:51&hash=c8a0886c1b9717e18442590afa925492`);
       
    const respuesta = await res.json();
    console.log(respuesta.data.results);

    pintarApi(respuesta.data.results)
}
/*====== obtener API ("COMICS")*/
const getComic = async () => {
   /*Pendiente*/
}  
//Pintar data
const pintarApi = (data) => {
   const fragment = document.createDocumentFragment();

   data.forEach((personaje) => {
    const div = document.createElement('div');
    div.classList.add('personaje');
    const img = document.createElement('img');
    img.src =`${personaje.thumbnail.path + '.jpg'}`
    img.classList.add('img');
    const h3 = document.createElement('h3');
    h3.textContent = `${personaje.name}`
    h3.classList.add('titulo-personaje');

    div.appendChild(img);
    div.appendChild(h3);

    fragment.appendChild(div)

     container.appendChild(fragment)
   })   
};
/*======================*/ 






//Activacion api COMIC
const linkComic = document.querySelector('.comic');
linkComic.addEventListener('click',()=>{
    getComic();
});


/*======= BARRA DE BUSQUEDA =======*/
    
document.addEventListener('keyup', e =>{
  
    if(e.target.matches('#buscador')){

        if(e.key === 'Escape'){
            e.target.value = "";
        }
        
        inputBuscar.addEventListener('click',()=>{
            document.querySelectorAll('.personaje').forEach((personaje)=>{
                personaje.classList.remove('filtro');
            })
        })

         document.querySelectorAll('.personaje').forEach((personaje)=>{
            if(personaje.querySelector('.titulo-personaje').textContent.toLowerCase().includes(e.target.value.toLowerCase())){
               personaje.classList.remove('filtro')
            } else {
                personaje.classList.add('filtro')
            } 
        })
       
    }
});


