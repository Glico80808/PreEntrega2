let carrito = []

const productos = [
    {id: 1, nombre: "Pantalón",categoria: "Moda", stock: 10, precio: 12000},
    {id: 2, nombre: "Crema humectante",categoria: "Salud",stock: 15,precio: 700},
    {id: 3, nombre: "cafetera",categoria: "Electrodomésticos",stock: 20,precio: 15000},
    {id: 4, nombre: "Chaqueta", categoria: "Moda",stock: 15,precio: 20000},
    {id: 5, nombre: "Televisor",categoria: "Electrodomésticos",stock: 10,precio: 200000},
    {id: 6, nombre: "Crema dental",categoria: "Salud",stock: 25,precio: 1000},
    {id: 7, nombre: "Aspiradora",categoria: "Electrodomésticos",stock: 15,precio: 70000},
    {id: 8, nombre: "Licuadora",categoria: "Electrodomésticos",stock: 15,precio: 80000},
    {id: 9, nombre: "Air Fryer",categoria: "Electrodomésticos",stock: 15,precio: 30000},
    {id: 10, nombre: "Lavarropas",categoria: "Electrodomésticos",stock: 15,precio: 300000}]


    let mensaje = "1 - Ver nuestro catálogo \n2 - Ver producto \n3 - Agregar al carrito \n4 - Buscar por categoria \n5 - Finalizar compra \n0 - Para salir "
    
    function filtrarPorCategoria(categoria) {
        const productosFiltrados = productos.filter(producto => producto.categoria.toLowerCase() === categoria.toLowerCase());
      
        if (productosFiltrados.length === 0) {
          alert("No se encontraron productos en esa categoría.");
        } else {
            const productosListados = productosFiltrados.map(producto => `ID: ${producto.id} - Nombre: ${producto.nombre} - Precio: $${producto.precio}`).join("\n");
            alert("Productos en la categoría '" + categoria + "':\n" + productosListados);
          }
        }
    function listar(productos){
        let salida = productos.map(producto => `ID: ${producto.id} - Nombre: ${producto.nombre} - Categoria: ${producto.categoria}`).join ("\n")
        return salida
    }

    function verProducto(id){
        let productoBuscado = productos.find(producto => producto.id === id)
        alert( `nombre: ${productoBuscado.nombre} - precio: ${productoBuscado.precio} - categoria: ${productoBuscado.categoria}`)
    }

    function agregarAlCarrito(carrito, id){
        let productoBuscado = productos.find(producto => producto.id === id )
        let productoAgregado = carrito.find(producto => producto.id === id )
        if (productoAgregado){
            productoAgregado.unidades++
            productoAgregado.subtotal = productoAgregado.precio * productoAgregado.unidades;
        }else{
           carrito.push({
            id: productoBuscado.id,
            nombre: productoBuscado.nombre,
            unidades: 1,
            precio: productoBuscado.precio,
            subtotal : productoBuscado.precio
        })
        }
        console.log(carrito)
    } 


    do{
        opcion =  parseFloat(prompt("Hola, usted ha ingresado a Gecko 69\n" + mensaje))
        if (opcion === 1){
           alert(listar(productos))
        } else if (opcion=== 2){
            let id = parseFloat(prompt("Ingrese el id del producto\n" + listar(productos)))
            verProducto(id)
        } else if (opcion===3){
            let id = parseFloat(prompt("Ingrese el id del producto\n" + listar(productos)))
            agregarAlCarrito(carrito, id)
        } else if (opcion===4){
            let categoria = prompt("Ingrese el nombre de la categoría:");
            filtrarPorCategoria(categoria);

        } else if (opcion===5){
            const total = carrito.reduce((acc,el) => acc + el.subtotal,0)
            alert("El total a pagar es de :  " + total)
            break
        }

    } while (opcion != 0)

   


    


