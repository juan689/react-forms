import React from 'react';
import ListaLicores from './componentes/lista-licores/lista-licores.comp';


const LicoresPage = () => {
    
    let licoresListas = [
     
      {
        id:"cat",
        name: "",
        licores:[
            {
                id:"cat1",
                name:"CLIENTE", 
                telefono:"TELEFONO",
                unidad:"UNIDAD",
                precio:"PRECIO"
            }
          ]
              },
            
        
            {
                id:"cat1",
                name: "AGUARDIENTE",
                licores:[
                    {
                        
                        id:"cat1licor1",
                        
                        name:"Juan David",
                        telefono:88888,
                        unidad:2,
                        precio:200,
                    },
                    {
                        id:"cat1licor2",
                        name:"Leonor",
                        telefono:99999,
                        unidad:1,
                        precio:100
                      },
                      {
                        id:"cat1licor3",
                        name:"Roger",
                        telefono:33333,
                        unidad:3,
                        precio:300
                        
                      },

                ]
            },
            {
                id:"cat2",
                name: "RON",
                licores:[
                    {

                        id:"cat2licor1",
                        name:"Juan David",
                        telefono:88888,
                        unidad:1,
                        precio:150
                      },
                      {
                        
                        id:"cat2licor2",
                        name:"Oscar",
                        telefono:5555,
                        unidad:5,
                        precio:750
                      },
                      {
                        id:"cat2licor3",
                        name:"Roger",
                        telefono:33333,
                        unidad:2,
                        precio:300
                      },
                ]
            },
            {
                id:"cat3",
                name: "GALLETAS",
                licores:[
                    {
                        id:"cat3licor1",
                        name:"Adriana", 
                        telefono:9876,
                        unidad:2,
                        precio:100
                        
                      },

                      {
                        id:"cat3licor2",
                        name:"Luisa",
                        telefono:123456,
                        unidad:10,
                        precio:50
                      },

                      {
                        id:"cat3licor3",
                        name:"Angelica",
                        telefono:4567,
                        unidad:1,
                        precio:50
                      },

                    

                ]

            }
          

        ];
     
        
    return (
        
        <>
        <ListaLicores licoresListas={licoresListas}
        
        />
    
        </>
        
    );  
}

export default LicoresPage;


