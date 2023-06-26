function animals(){
  fetch('http://localhost:3000/characters')
  .then(r => r.json())
  .then(data => {console.log(data);})
  .catch(error => {
      console.error(error);
    });
}
