let fs = require('fs');

const concesionariasJson = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));


const autos = {
index:function(req,res){
 	 res.set({'content-type':'text/plain;charset=utf-8'});

     res.write("*****  Todos los autos disponibles  *****\n\n")

     	concesionariasJson.forEach(function(sucursal){
          sucursal.autos.forEach(function(auto){
          		res.write("-->" + "	Auto: \n" + "	Marca: " + auto.marca + '\n'+ "	Modelo: " + auto.modelo + '\n' + "	Año: " + auto.anio + '\n' + "	Color: " + auto.color +'\n\n')

         })
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

module.exports= autos
