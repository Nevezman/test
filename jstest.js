/*const time = 20;
if (time<12) {
    console.log("Доброе утро");
}
else if (time>=12 & time<18 ){
    console.log ("Добрый день");
}
else {
    console.log ("Добрый вечер")
}
*/
/*let time = 19;
let priv = (time<12) ? "Доброе утро" : 
(time>=12 & time<=18) ? "Добрый день": "Добрый вечер";
console.log(priv);*/
//const name = "Витя";
//console.log(`Привет! ${name}, как ты?`)
/*function SayHi (name) {
    console.log(`Привет! ${name}, как ты?`)
};
SayHi ("timi");
SayHi ("antoni");*/

/*function sasi (a,b) {
    let sosi = a + b;
    return sosi;
};

let sis = sasi(12,12);
console.log (sis);*/
  /*function sun (a,b){
    return a+b;
  };
  let sec = sun(sun(15,15),sun(30,30));
  console.log (sec);*/
  /*function sun (a,b){
    return a+b;
  };

  function sen (xexe){
    x=15;
    y=15;
    return xexe(x,y);
    
  }
  console.log(sen(sun))*/
  /*let sayHi = (name) =>{
    console.log(`Привет! ${name}, как ты?`)
  }
  sayHi("Timi")*/
  /*let sen = (a,b) => a+b;
  console.log (sen(10,15));*/
  /* const kolektion = ["mazda","audi","toyota","lada","mazerrrati"];

   console.log (kolektion);
   console.log (kolektion[3]);
  
let kotletka = kolektion;
console.log (kotletka)
kolektion.push("zill");
console.log (kolektion)
kolektion.splice(0,3,"mitsybisi","honda");
console.log(kolektion)*/

/*console.log("start")
for (let i = 0; i<10; i++){
console.log(i)
}
console.log("finish")*/
/*const kolektion = ["mazda","audi","toyota","lada","mazerrrati"];
for (let i =0;i<kolektion.length; i++){
  console.log (kolektion[i]);
}

for (let item of kolektion){
  console.log(item)
}
kolektion.forEach (function(item,index){
  console.log (`${item} = ${index}`)
});
kolektion.forEach ((item,index) => console.log (`${item} = ${index}`));*/
class person {
  constructor(userName,age,prof){
    this.userName=userName;
    this.age=age;
    this.prof=prof;
  }
}
const pers = new person ("Витя",34, "Заводской");
console.log(p