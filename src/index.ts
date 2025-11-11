import promptSync from 'prompt-sync';

const prompt = promptSync();


// ULOHA O1: 
// Napiste program, ktery
// - se zepta uzivatele postupne na 3 cisla; kazde cislo uzivatel potvrdi odeslanim ENTER
// - program vypise:


let cislaUzivatele1 : string = prompt("Zadejte cislo:");
let cislo1 : number = Number(cislaUzivatele1);
let cislaUzivatele2 : string = prompt("Zadejte cislo:");
let cislo2 : number = Number(cislaUzivatele2);
let cislaUzivatele3 : string = prompt("Zadejte cislo:");
let cislo3 : number = Number(cislaUzivatele3);





function cislaO1(){
// 1. Soucet vsech zadanych cisel
let odpoved1 : number = cislo1 + cislo2 + cislo3;
console.log("Soucet techto cisel je: "+odpoved1);
// 2. Soucin vsech zadanych cisel
let odpoved2 : number = cislo1 * cislo2 * cislo3;
console.log("Soucin techto cisel je: "+odpoved2);
// 3. Aritmeticky prumer vsech zadanych cisel
let odpoved3 : number = (cislo1 + cislo2 + cislo3)/3;
console.log("Aritmeticky prumer techto cisel je: "+odpoved3);
// 4. Rozdil mezi nejvetsim a nejmensim zadanym cislem
    let nejvetsiCislo : number = cislo1;                                  
    let nejmensiCislo : number = cislo2;
if (cislo1 < cislo2||cislo1 < cislo3){
    nejmensiCislo = cislo1
}
if (cislo2 < cislo1|| cislo2 < cislo3){
    nejmensiCislo = cislo2
}
if (cislo3 < cislo1||cislo3<cislo2){
    nejmensiCislo = cislo3
}
if (cislo1 > cislo2||cislo1 > cislo3){
    nejmensiCislo = cislo1
}
if (cislo2 > cislo1|| cislo2 > cislo3){
    nejmensiCislo = cislo2
}
if (cislo3 > cislo1||cislo3>cislo2){
    nejmensiCislo = cislo3
}

let rozdil : number = nejvetsiCislo - nejmensiCislo;
console.log("Rozdil mezi nejvetsim a nejmensim cisel je: "+rozdil);
// 5. Pro kazde zadane cislo vetsi nez 100 vypise program hvezdicku.
let pocitani : string = "";
if (cislo1 >= 100){
    pocitani = pocitani + "*";
}
if (cislo2 >= 100){
    pocitani = pocitani + "*";
}
if (cislo3 >= 100){
    pocitani = pocitani + "*";
}
console.log("Kazda hvezdicka znamena ze je tam cislo vetsi nez 100: "+pocitani);
}
cislaO1();
// -  BONUS: hvezdicky vypise nakonec a na jeden radek, ne po kazdem cisle zvlast.
// Program potom uzavrete do funkce "cislaO1"


// ULOHA O2:
// Napiste program, ktery
// - se zepta uzivatele na 3 texty; kazdy text uzivatel potvrdi odeslanim ENTER
// - program vypise:
// 1. Zadane texty v OPACNEM poradi, nez jak byly zadany, vsechny na jeden radek
// 2. Souhrnnou delku vsech textu, ktere uzivatel zadal. Bonus: nezapocitavejte pripadne uvodni, nebo koncove mezery v zadanych textech.
// 3. Celkovy pocet PISMEN (zakladni US abecedy) je v zadanych textech, a celkovy pocet SAMOHLASEK.
// 4. Urci, kolik PROCENT samohlasek je v zadanych textech. Mezery vubec nepocitame.
// 5. Vypise nejvetsi text v LEXIKOGRAFICKEM usporadani.
// Program potom uzavrete do funkce "textyO2"

// ULOHA O3:
// Zadani je totozne, jako u ulohy O1, ALE
// - program se nepta na 3 cisla, ale nechava uzivatele zapisovat cisla, kazde potvrdi ENTERem
// - zadavani cisel se ukonci zadanim cisla 0, nebo zaporneho cisla
// - BONUS: pri zadani neciselneho udaje se vypise zprava o chybnem vstupu a vyzva k opetovnemu zadani cisla
// - PO zadani vsech cisel (tzn. po zadani 0 nebo zaporneho cisla) program vypocita a vypise vsechny udaje O1-1 .. O1-5.
// Pro reseni teto ulohy NEPOUZIVEJTE pole.
// Program potom uzavrete do funkce "cislaO3"

// ULOHA O4:
// Zadani je totozne, jako u ulohy O2, ALE
// - program se nepta na 3 texty, ale nechava uzivatele zapisovat texty, kazdy potvrdi ENTERem
// - zadavani se ukonci zadanim PRAZDNEHO textu
// PO zadani vsech textu program vypocita a vypise vsechny udaje O2-1 .. O2-5
// Pro reseni teto ulohy NEPOUZIVEJTE pole.
// Program potom uzavrete do funkce "cislaO4"

// ULOHA O5 - bonusova:
// V predchozich ulohach se MOHLY vyskytnout opakujici se kusy kodu. Pokuste se tato opakovani nahradit funkcemi, a v puvodnich
// mistech tyto funkce jen vyvolat. Teziste ukolu je najit duplikovana mista, vymyslet, jake bude funkce dostavat parametry, a jaky
// bude vydavat vysledek (a samozrejme spravne napsat implementaci)
