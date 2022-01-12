const faker = require('faker');
const id = require('faker/lib/locales/id_ID');


// Se va a utilizar programacion orientada a objetos

// se construye una clase para de esta capa exportarla a otra y en esta crear las instancias (objetos basados en esta clase)


class productService {
  // como no tenemos por ahora fuente datos creamos un  constructor con un array de productos

  constructor() {


    this.arrayProductos = [];
    // esta instancia va a correr directamente en el constructor, cuando se llame se hara con find para que returne el array que se creoe
    // cuando inicie la instancia va a crear el numero e productos que se le haya indicado
    this.crear();
  }


  // emézamos a definir las funcionalidades que vamos a ofrecer
  crear() {

    const limit = 6;
    for (let index = 0; index < limit; index++) {
      this.arrayProductos.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        id: faker.datatype.uuid(),

      });
    }

  }
  postear(data){
    const  productService = {
    
    price,
    image,
    name,
 
    id: faker.datatype.uuid(),
    // ...data
        }
    this.arrayProductos.push(productService);
    return productService;
  }


  find() {
    return this.arrayProductos;
  }
  findOne(id) {
    // si el array contiene un elemento con el id que produce el faker se pasa como parametro lo filtra y retorna
    return this.arrayProductos.filter(elemento => elemento.id === id);


  }
  delete() {

  }

}

module.exports = productService;