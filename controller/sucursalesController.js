let fs = require('fs');

const concesionariasJson = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));

const sucursales = {

  index:function(req,res){
  res.set({'content-type':'text/plain;charset=utf-8'});

      res.write("********  Nuestras SUCURSALES  ********\n")

          concesionariasJson.forEach(function(concesionarias){
           res.write(concesionarias.sucursal + '\n' + concesionarias.direccion + '\n' + concesionarias.telefono + '\n\n')


       

         })
        res.end()
},

id:function(req,res){
      res.set({'content-type':'text/plain;charset=utf-8'});
      let idSucursales = req.params.id
       concesionariasJson.forEach(function(sucursal){
        
        if(sucursal.sucursal==idSucursales){
          
          res.write("*****SUCURSAL*****\n\n"+ sucursal.sucursal + '\n' + sucursal.direccion + '\n' + sucursal.telefono + '\n\n')
          res.write("Autos en sucursal: " + sucursal.autos.length + '\n\n')

        sucursal.autos.forEach(function(auto){
          
          res.write("Marca: " + auto.marca + '\n' + "Modelo: " + auto.modelo + '\n' + "Año: " + auto.anio + '\n' + "Color: " + auto.color + '\n\n')
        })
           res.end()
      }
        
    });

  },
}

module.exports= sucursales