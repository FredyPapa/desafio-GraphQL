var express = require('express');
var {graphqlHTTP} = require('express-graphql');
var { buildSchema } = require('graphql');

// Construimos el schema
var schema = buildSchema(`

  type Producto {
        id: Int
        title: String
        price: String
		thumbnail: String
	}

  type Query {
    	productos: [Producto]
    	producto(id: Int): Producto
  	}

  type Mutation {
    	addProducto(title: String, price: String, thumbnail: String): Producto
  	}

`);

var productos = [];
var counter=1;

// Función para resolver las peticiones
var root = {
	productos: () => { return productos; },

  producto: ( data ) => { 
	for ( var i=0; i<productos.length; i++ ) 
		if ( productos[i].id==data.id ) 
			return productos[i]; 

	return null; 
	},

  addProducto: ( data ) => { 
	var p={ 'id': counter, 'title':data.title, 'price':data.price, 'thumbnail':data.thumbnail }; 
	productos.push( p ); 
	counter++; 
	return p; 
	},
};

// Arrancamos el servidor web
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);
console.log('GraphQL API en http://localhost:4000/graphql');