//  stringify method
const user ={id:11,name:'Gorip Amir',job:'Actor'};
const stringfied=JSON.stringify(user);
// const p=prompt("Enter your name: ");
// console.log(p);
// console.log(stringfied);
// console.log(user);

const shop={

    name:"alia store",
    address:"Rnvir road",
    products:['laptop','mobile','pepsi'],
    isexpensive:false,
    profit:15000,
    owner:{
        name:"alia batt",
        profession:"actor"
    }

};

// const shopstringify=JSON.stringify(shop);

//  str=JSON.stringify(shop);

// log(shopstringify);

// ===================== array parameter========================
const log=console.log;
let str;
str=JSON.stringify(shop,["name","profit","products"]);


// log(str);
// const parsefied=JSON.parse(shopstringify);
// log(parsefied);


// ====================function() parameter========================


function ok(k,v){
if(typeof v ==="string"){
    // return undefined;
    return "String";
}
else{
    return v;
}

}

str=JSON.stringify(shop,ok);
// log(str);
// =================space beginning=========================


str=JSON.stringify(shop,null,5);
// log(str);


// =================tab beginning=========================


str=JSON.stringify(shop,null,'\t\t\t\t');
log(str);



str=JSON.stringify(shop,null,'\tX\tX\tX\tX');
log(str);

