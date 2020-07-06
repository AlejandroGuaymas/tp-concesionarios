let fs = require('fs');

const concesionariasJson = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));

const marcas = {

		index:function(req,res){
 	 res.set({'content-type':'text/plain;charset=utf-8'});

     res.write("*****  Marcas en nuestras sucursales  *****\n\n")
     	res.write("Marcas: \n")	

     	let marcas = []
     	concesionariasJson.forEach(function(sucursal){
          sucursal.autos.forEach(function(auto){
          	if(!marcas.includes(auto.marca)){
        	marcas.push(auto.marca)
          	

          }

          })
            
      })
     	marcas.forEach(function(marca){
     		res.write(">" + marca + '\n')
     	})
     	
     	res.end()
     	
    },

    id:function(req,res){
      res.set({'content-type':'text/plain;charset=utf-8'});
      let idMarca = req.params.id
      concesionariasJson.forEach(function(sucursal){
        sucursal.autos.forEach(function(auto){
        if(auto.marca == idMarca){
        	res.write("Marca: " + auto.marca + '\n' + "Modelo: " + auto.modelo + '\n' + "Año: " + auto.anio + '\n\n')
        		
        		}
				
        })
    })
      	res.end()
  
  },  	



}

module.exports= marcas

