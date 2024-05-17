const cup = {
    color: 'red',
    size:'small',
    texture:'smooth',
    shape:'round',
    functionality:{
        drinkType:'tea',
        temperature:'hot'
    },

    drink: function(){
        console.log('use me to drink');
        console.log(`My main purpose is to drink ${this.functionality.temperature} ${this.functionality.drinkType}`)
    }
}

console.log({color: cup.color});
console.log('size', cup.size);
console.log("temperature", cup.functionality.temperature);
console.log("texture", cup["texture"]);

cup.model = 'glass'
console.log([cup]);
delete cup.model


cup.color= 'green';
console.log({cup});

cup.drink(); 

// getting all the keys in the object
const keys = Objects.keys(cup)
console.log({keys});

const values = Objects.values(cup);
console.log({values})

const loop =Objects.keys(cup).map(item =>{
    return({key:item, value:cup[item]});
})

console.log({loop});

Objects.key(cup).forEach(item=>{
    console.log({key:item, value:})
})