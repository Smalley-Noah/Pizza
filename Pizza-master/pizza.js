class pizza{
  //type constructor below
constructor(s,m,l,xl){
  this.size = s
  this.meattoppings = mt
  this.veggietoppings = vt
}
  //type instance functions below
  sizecost(){
  if(this.size == "small"){
    return 7.99
  }
  else if(this.size == "Medium"){
    return 9.99
  }
  else if(this.size == "Large"){
    return 12.99
  }
  else if(this.size == "Extra Large"){
    return 15.99
  }
}

this.toppingcost(top){
  if(top = "meat"){
    return(this.meattoppings*.length * .99);
  }
  if(top = "veggie"){
    return(this.veggietoppings*.length * .50);
  }
}
this.price(){
  this.price = this.sizecost() + this.toppingcost();
  return this.price;
}
  //type class functions below
this.promotionaldeal(Pizza, percent){

}

}
