let fs = require('fs');

const concesionariasJson = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));

const home = {
	index:function(req,res){
			res.set({'content-type':'text/plain;charset=utf-8'});
			res.write("************************************************* \n")				
			res.write("Bienvenido a los concesionarios de Buenoas Aires \n")
			res.write("************************************************* \n\n\n")
			res.write("nuestras sucursales: \n")
			
			concesionariasJson.forEach(function(concesionarias){
    			 res.write(concesionarias.sucursal + '\n')
    	
   			// Aca le puedo pedir al auto cualquiera de sus propiedades
    })
		
			res.end() 
	},
	
	}
		

module.exports= home