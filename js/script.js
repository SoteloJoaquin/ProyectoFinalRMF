
let productos = [

    {
        "id" : 9789878262031 ,
        "name" : "Fundamentos de economía",
        "price" : "$"+ 20000,
        "image": "img/fundamentosEconomia.jpg",
        "description" : "Este libro está en las antípodas de esta concepción. Su mérito es que, en pocas palabras, aborda la enseñanza de la economía de forma totalmente distinta al enfoque habitual que terminamos de describir. Se propone brindar un tratamiento de los conceptos básicos de la economía con una mirada crítica y que se apoye en la historicidad de las teorías, situándolas en el contexto en el que aparecieron. "
         
    } ,
    {
        "id": 9789874110091,
        "name" : "Constitución de la Nación Argentina",
        "price" : "$"+ 8400,
        "image": "img/laConstitucion.jpg",
        "description" : "Acercarnos a la constitución como una posibilidad de hacer política es un precioso incentivo para hacerla más nuestra, para dotarla de importancia y, consecuentemente, para apropiárnosla. Es por ello que la Universidad Nacional de José Clemente Paz ha lanzado la convocatoria “La constitución, importa”. Porque entendemos a la constitución como un asunto en común, necesitamos construir una agenda colectiva sobre problemas a resolver, derechos a incorporar e instituciones a reformar."
       
      },
    {
        "id": 9789878262468,
        "name" : "Estructuras organizacionales",
        "price" : "$"+ 18000,
        "image": "img/EstructurasOrganizadas.jpg",
        "description" : "Este libro propone acercar a estudiantes, empresarios y emprendedores a la comprensión y a la aplicación de los principios de diseño organizacional. Para ello, realiza una introducción clara y concisa al estudio de las configuraciones estructurales y al análisis de su impacto en el desempeño organizacional, así como en las personas que las integran, en virtud de que las decisiones que se adoptan en el proceso de diseño no solo tienen consecuencias en la productividad de las mismas, sino que también tienen implicancias en las personas que las habitan y llevan adelante las actividades definidas."
    },
    
];


let contenedorProductos = document.getElementById('productos');
let contenedorIndividual = document.createElement('div');

contenedorIndividual.classList.add('card_container');
  
  document.addEventListener("DOMContentLoaded", (event)=>{
    productos.forEach(producto => {
        contenedorIndividual.innerHTML += `
          <div class="card">
          <form id="my_form${producto.id}">
          <div>
          <img src="${producto.image}" alt="${producto.name}"  width="auto" height="300" class="imagen-encuadrada">
          <br> 
          <output id="nombre" name="nombre">${producto.name}</output>
            <br>
            <output id="precio" name="precio">${producto.price}</output>
            <br>
               <button id="btnMasInfo${producto.id}" class="button" onclick="masInfo(${producto.id})">+ info</button>
               <div id="botonera${producto.id}">
                <button onclick="comprar(${producto.id})" class="button" value="comprar">comprar</button>
              </div>
              <div>
              <output id="description${producto.id}" class="description">
                ${producto.description}
                <br>
                  <button onclick="comprar(${producto.id})" class="button" value="comprar">comprar</button>
             </output>
              </div>
            </div>
          </div>
        `;
        contenedorProductos.append(contenedorIndividual);
      });
    });

    function masInfo(id) {
      event.preventDefault();
      let idx = id.toString();
      
      let param = 'description' + idx;
      let btnMasInfo = 'botonera' + idx;
      let btnComprar = 'btnMasInfo' + idx;
      let btnComprarDesc = 'comprar' + idx;
    
      document.getElementById(param).style.display = "block";
      document.getElementById(btnComprar).style.display = "none";
      document.getElementById(btnMasInfo).style.display = "none";
    }
    
   
    
   







   