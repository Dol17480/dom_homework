window.onload = function() {

  var addCats = function(name, food, img){
   var catSection = createCatSection();
   var ul = createUl;
   var nameLi = createLi(name);
   var foodLi = createLi(food);
   var img = createImg(img);
   appendCatToList(catSection, nameLi, foodLi, img);
 };

 var createCatSection = function(){
  var  catSection = document.createElement('section');
  catSection.classList.add('cat');
  return catSection;

};

var createUl = function(){
  var ul = document.createElement('ul');
  ul.classname = "cat";
}

var createLi = function(food){
  var foodLi = document.createElement('li');
  foodLi.innerText = food;
  return foodLi;
};

var createSecondLi = function(name){
  var nameLi = document.createElement('li');
  nameli.innerText = name;
  return nameLi;
};

var createImg = function(img){
  var img = document.createElement('img');
  catImage.src = "https://i.ytimg.com/vi/IaVIRqHBM3k/hqdefault.jpg";
  img = catImage.src;
  return img;
}

var appendCatToList = function(nameLi, foodLi, img){
  foodli.appendChild(img);
  nameLi.appendChild(foodLi);
  ul.appendChild(nameLi);
  catSection.appendChild(ul);
  var cats = document.querySelector('#cats');
  cats.appendChild(catSection);
};

addCats('Name: Simba', "Favourite Food: Burritos", img);
}