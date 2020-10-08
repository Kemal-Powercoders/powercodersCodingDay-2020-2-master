var Books = {
  name:"Heredot",
  sold:"available",
  price:"100 chf",
  information: function(){
    return this.name+" - "+ this.sold+ " - "+this.price;}
  }

  document.write(Books.information());