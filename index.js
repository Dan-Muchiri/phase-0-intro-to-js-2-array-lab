// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
    return (cats);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return (cats);
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return (cats);
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return (cats);
}
function prependCat(name){
    let copyOfCats = [name, ...cats];
    return(copyOfCats);
}
function appendCat(name){
    let copyOfCats = [...cats, name];
    return(copyOfCats);
}
function removeLastCat(){
    const removeLastCat = cats.slice(0, cats.length -1);
    return(removeLastCat);
}
function removeFirstCat(){
    const removeFirstCat = cats.slice(1);
    return(removeFirstCat);
}