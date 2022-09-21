
    const api = 'https://francazumbi-default-rtdb.firebaseio.com/ranking.json';


    export async function Api() {
          var arrayItem = []
          var NewArray = [] 
          arrayItem = await fetch(api)
          .then(res => res.json())
    
    
          // transformando em Json
          for(var key in arrayItem) {
              NewArray.push({name:key.toUpperCase(), point:arrayItem[key]})
          }        
    
          return NewArray;
      }
    