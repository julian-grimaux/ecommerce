 const productos = [
        {
          "Id":1,
          "Name":"AK-47",
          "Type":"rifles",
          "Image":"https://img.dsncdn.net/full/011/jqB/HEq.jpg",
          "Description":"descripcion1",
          "Price":"59.99",
          "Stock":"5",
        },
        {
            "Id":2,
            "Name":"M4A4",            
            "Type":"rifles",
            "Image":"https://steamuserimages-a.akamaihd.net/ugc/397834442114554521/E27ED190E13DF6BB1B52A166405963E6A725CA06/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
            "Description":"descripcion2",
            "Price":"49.99",
            "Stock":"10"
          },
          {
            "Id":3,
            "Name":"AWP",           
            "Type":"rifles",
            "Image":"https://steamuserimages-a.akamaihd.net/ugc/938331559640166570/098730A57286A2118D2D1F96D739B68D06C04D61/",
            "Description":"descripcion3",
            "Price":"59.99",
            "Stock":"3"
          },
          {
            "Id":4,
            "Name":"SCAR 20",
            "Type":"rifles",
            "Image":"https://i.imgur.com/WvQU96p.png",
            "Description":"descripcion4",
            "Price":"29.99",
            "Stock":"10"
          },
          {
            "Id":5,
            "Name":"USP-S",
            "Type":"pistols",
            "Image":"https://steamuserimages-a.akamaihd.net/ugc/548681523287989076/82B01BE571CD658FAD1139FE54929AE39AFED711/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            "Description":"descripcion5",
            "Price":"19.99",
            "Stock":"8"
          },

          {
            "Id":6,
            "Name":"P250",            
            "Type":"pistols",
            "Image":"https://i.imgur.com/6C653Oj.jpeg",
            "Description":"descripcion8",
            "Price":"14.99",
            "Stock":"12"
          }, 
          {
            "Id":7,
            "Name":"MP9",           
            "Type":"smg",
            "Image":"https://i.imgur.com/5Ov9kPY.jpeg",
            "Description":"descripcion7",
            "Price":"9.99",
            "Stock":"20"
          },
          {
            "Id":8,
            "Name":"MP5 50",
            "Type":"smg",
            "Image":"https://steamuserimages-a.akamaihd.net/ugc/970978854187768464/1BB82DE31288889444085065618A504929E91627/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
            "Description":"descripcion6",
            "Price":"9.99",
            "Stock":"30"
          } 
    ];


const GetProducts = new Promise ((resolve) =>{
    setTimeout(() => {
        resolve(productos)
    }, 2000)
})

export default GetProducts

