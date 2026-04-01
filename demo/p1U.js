const sm=require ('./Sum.js');
const ml=require('../Multi.js');
const dv=require('./Divi.js')
const mo=require('./Mod.js')
let c=sm.sum(12,3);
console.log(c);
let d=ml.multiply(12,3);
console.log(d);
let e=dv.divison(12,3);
console.log(e);
let f=mo.modulus(15,2)
console.warn(f);