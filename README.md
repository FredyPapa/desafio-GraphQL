# Reformar para usar GraphQL

## Validaciones:

### Insertamos el primer producto
~~~
mutation {
  addProducto( title:"Producto 1", price:"500", thumbnail:"https://image.shutterstock.com/image-vector/vector-illustration-set-rulers-flat-260nw-1052690225.jpg") {
    id
    title
    price
    thumbnail
  }
}
~~~

### Insertamos el segundo producto
mutation {
  addProducto( title:"Producto 2", price:"300", thumbnail:"https://image.shutterstock.com/image-vector/vector-illustration-set-rulers-flat-260nw-1052690225.jpg") {
    id
    title
    price
    thumbnail
  }
}


### Consultamos el listado de productos
{
  productos {
    id
    title
    price
    thumbnail
  }
}

### Consultamos el producto 1
{
  producto(id: 1) {
    id
    title
    price
    thumbnail
  }
}
