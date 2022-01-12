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
  postear({ name, price, image }) {
    const productService = {
      id: faker.datatype.uuid(),
      name,
      price,
      image,

      //tambien se puede enviando a data como paremetro y dejando en esta parte  ...data
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
  update(id, changes) {
    // para saber si esta el elemento buscado se busca el index
    const index = this.arrayProductos.findIndex(elemento => elemento.id === id)
    // si no se encuentra va a retornar -1
    if (index === -1) {
      throw new Error('El indice no se encuentra en el arrayProduct')
    }
    const product = this.arrayProductos[index];
    // este this.arrayProductos[index] representa el producto en el index que psamos como paramtro para buscar
    this.arrayProductos[index] = {
      // de esta manera persisten los datos preexitentes y tambien los changes que este aplicando
      ...product,
      ...changes
    }
    return this.arrayProductos[index];

  }


  delete(id) {
    const index = this.arrayProductos.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    this.arrayProductos.splice(index, 1);
    return  { message: `Id de producto borrado: ${id}` };
  }

}

module.exports = productService;