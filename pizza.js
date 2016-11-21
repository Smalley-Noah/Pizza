class pizza{
  //type constructor below
constructor(s,mt,vt){
  this.size = s; //array ["s","m","L","xL"]
  this.meatToppings = mt;
  this.veggietoppings = vt;
}
this.sizeCost = function(){
  if(this.size == "Small";){
    return 7.99
  if(this.size == "Medium";){
    return 9.99
  if(this.size == "Large";){
      return 12.99
  if(this.size == "Extra Large";){
    return 15.99
  }
}
this.toppingCost == function(top){
  if(top == "Meat"){
    return(this.meatToppings.length * .99);
  }
  if(top == "Veggie"){
    return(this.veggietoppings.length * .50);
  }
  this.price == function(){
    return(this.sizeCost() + this.toppingCost("meat","Veggie"));
  }
  static promotionalDeal(pizza,percent){
    let precent = 1-(percent/100);
    return this.price()*percent;
  }
}
