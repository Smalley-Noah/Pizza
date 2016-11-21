class pizza{
  //type constructor below
constructor(s,mt,vt){
  this.size = s; //array ["s","m","L","xL"]
  this.meatToppings = mt;
  this.veggietoppings = vt;
}
sizeCost(){
  this.size(S) = 7.99
  this.size(M) = 9.99
  this.size(L) = 12.99
  this.size(XL) = 15.99
}
toppingCost(top){
  if(top == this.meatToppings){
    return top.length*.99;
  }
  if(top == this.veggieToppings){
    return top.length*.5;
  }
  price(){
    return sizeCost + toppingCost[0] + toppingCost[1];
  }
  static promotionalDeal(pizza,percent){
    var precent = 1-(percent/100);
    return pizza.price()*percent;
  }
}
