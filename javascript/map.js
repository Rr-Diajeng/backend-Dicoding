const couple = new Map(
    [["Diajeng", "Donghae"], ["Barbie", "Ken"], ["Bujang", "Maria"]]
);

console.log(couple.size);
console.log(couple.get("Diajeng"));

couple.set("Ji Chang Wook", "Im Yoona");
console.log(couple.size);
console.log(couple.get("Ji Chang Wook"));

couple.delete("Barbie", "Ken");
console.log(couple);