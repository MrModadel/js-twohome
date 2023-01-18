
let a = "aaa@bbb@ccc";
console.log(
a.replace(/@/g, "!")
);
let str  =  "HELLOWORLD";
let strf = str.slice(0,str.search("O") + 1).toLowerCase();
let strft = strf.charAt(0).toUpperCase() + strf.slice(1);
let strl = str.slice(str.search("O") + 1).toLowerCase();
console.log(strft,strl);
let hel = "Hello, it is HTML";
let hhh ="not JS"
console.log(
hel.slice(hel.search("H"),hel.search("s")+2) + hhh
);
let al = "alex"
console.log(
   al.charAt(0).toUpperCase() + al.slice(1)
);
let numder = Math.random()* 100000000000000000
console.log(
   numder
);
let text = "Lex Luter has a big suit"
let ax = text.slice(text.search("a"),text.search("a")+1).toUpperCase() + text.slice(text.search('Lex') , text.search('Lex')+ 3).toLowerCase();
console.log(
   ax
);