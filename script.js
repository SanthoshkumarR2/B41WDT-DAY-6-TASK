// 1. write a person class to hold all the details


class person{
    constructor(FirstName,LastName,Age,City,Country,Job){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Age = Age;
        this.City = City;
        this.Country = Country;
        this.Job = Job;
    }
    getFullName(){
        return `The Fullname is : ${this.FirstName} ${this.LastName}`;
    }
    getdetails(){
return `Firstname : ${this.FirstName}
Lastname : ${this.LastName}
Age : ${this.Age}
City : ${this.City}
Country : ${this.Country}
Job : ${this.Job}`;
    }

}

let person1 = new person("Santhosh","Kumar",20,"Tiruvannamalai","India","Full-stack-developer");
let person2 = new person("Sathish","Kumar",23,"Chennai","India","Software Developer");

console.log(`${person1.getFullName()}`);
console.log(`${person1.getdetails()}`);

console.log(`${person2.getFullName()}`);
console.log(`${person2.getdetails()}`);


// 2. write a class to calculate the Uber price...


class uberPrice{
constructor(distance,time){
    this.distance = distance;
    this.time = time;
}
getPrice(km_price,base_price,minute_price,minimum_price)
{
   const kmrate = this.distance*km_price;
   const minute =  (this.time * minute_price);
   let result = base_price+kmrate+minute;

   if(result<minimum_price){
    result = minimum_price;
   }
   return `For a ${this.distance} km ride spanning ${this.time} minutes fare is : ${result}`;
}
}

let price1 = new uberPrice("10","30");
let price2 = new uberPrice("20","50");

console.log(price1.getPrice(14.7,48,1,85));
console.log(price2.getPrice(14.7,48,1,85));


// 3. class Movie


class Movie{
constructor(title,studio,rating="PG"){                                                                                                                                                                             
this. title=title;
this. studio=studio;
this. rating=rating;
}
getPG(movie=[]){
movie=[this.title,this.studio,this.rating]   
let result=[];
console.log("Print only films with rating PG ");
if(movie[2]=="PG"){
for(var i=0;i<movie.length;i++){
result=result+movie[i]+"  ";
}
}
return result;                          
}
}

let movie;                                                                          
                                 
let film= new Movie("Casino Royale","Eon Productions","PG13"); 

let film1= new Movie("BIGIL","AGS Productions");

let film2= new Movie("MASTER","7 Screen Studios");

console.log(film.getPG(movie));        
console.log(film1.getPG(movie));
console.log(film2.getPG(movie));


// 4. Class Circle ...


class circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }

    getradius(){
        return this.radius;
    }
    setradius(){
        this.radius = this.radius;
    }
    getcolor(){
        return this.color;
    }
    setcolor(){
        this.color = this.color;
    }
    toString(){
        `return radius : ${this.radius} color : ${this.color}`;
    }
    getArea(){
       return 3.14159*(this.radius*this.radius)  //area of circle= pi=3.14159
    }

    
    getCircumference(){
        return (2*(Math.PI)*this.radius)
    }
}

let c1 = new circle()
console.log("Constructor with no params: "+ c1.toString());


let c2 = new circle(3.5)
console.log("Constructor with one param: "+ c2.toString());


let c3 = new circle(2.2, 'Green');
console.log("getRadius: "+c3.getradius());
c3.setradius(3.3);
console.log("Radius value after setRadius: " +c3.getradius());
console.log("getColor: "+c3.getcolor());
c3.setcolor("Blue");
console.log("Color Value after setColor: " + c3.getcolor());
console.log(c3.toString());
console.log("Area: "+c3.getArea());
console.log("Circumference: "+c3.getCircumference());
