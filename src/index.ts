import promptSync from 'prompt-sync';

const prompt = promptSync();


// ULOHA O1: 
// Napiste program, ktery
// - se zepta uzivatele postupne na 3 cisla; kazde cislo uzivatel potvrdi odeslanim ENTER
// - program vypise:

function cislaO1(){
let cislaUzivatele1 : string = prompt("Zadejte cislo:");
let cislo1 : number = Number(cislaUzivatele1);
let cislaUzivatele2 : string = prompt("Zadejte cislo:");
let cislo2 : number = Number(cislaUzivatele2);
let cislaUzivatele3 : string = prompt("Zadejte cislo:");
let cislo3 : number = Number(cislaUzivatele3);






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
if (cislo1 < cislo2&&cislo1 < cislo3){
    nejmensiCislo = cislo1
}
if (cislo2 < cislo1&& cislo2 < cislo3){
    nejmensiCislo = cislo2
}
if (cislo3 < cislo1&&cislo3<cislo2){
    nejmensiCislo = cislo3
}
if (cislo1 > cislo2&&cislo1 > cislo3){
    nejvetsiCislo = cislo1
}
if (cislo2 > cislo1&& cislo2 > cislo3){
    nejvetsiCislo = cislo2
}
if (cislo3 > cislo1&&cislo3>cislo2){
    nejvetsiCislo = cislo3
}

let rozdil : number = nejvetsiCislo - nejmensiCislo;
console.log("Rozdil mezi nejvetsim a nejmensim cisel je: "+rozdil);
// 5. Pro kazde zadane cislo vetsi nez 100 vypise program hvezdicku.
let pocitani : string = "";
if (cislo1 > 100){
    pocitani = pocitani + "*";
}
if (cislo2 > 100){
    pocitani = pocitani + "*";
}
if (cislo3 > 100){
    pocitani = pocitani + "*";
}
console.log("Kazda hvezdicka znamena ze je tam cislo vetsi nez 100: "+pocitani);
}
//cislaO1();
// -  BONUS: hvezdicky vypise nakonec a na jeden radek, ne po kazdem cisle zvlast.
// Program potom uzavrete do funkce "cislaO1"


// ULOHA O2:
// Napiste program, ktery
// - se zepta uzivatele na 3 texty; kazdy text uzivatel potvrdi odeslanim ENTER
function textO2(){
let textUzivatele1 : string = prompt("Zadejte text: ");
let textUzivatele2 : string = prompt("Zadejte text: ");
let textUzivatele3 : string = prompt("Zadejte text: ");
textUzivatele1 = textUzivatele1.trim();
textUzivatele2 = textUzivatele2.trim();
textUzivatele3 = textUzivatele3.trim();
let text1reversed : string = "";
let text2reversed : string = "";
let text3reversed : string = "";

// - program vypise:

// 1. Zadane texty v OPACNEM poradi, nez jak byly zadany, vsechny na jeden radek
for (let index1 : number = textUzivatele1.length - 1; index1 >= 0 ; index1--){
    text1reversed += textUzivatele1[index1];
}
console.log("Vami prvni zadany text pozpatku: "+ text1reversed);
for (let index2 : number = textUzivatele2.length - 1; index2 >= 0 ; index2--){
    text2reversed += textUzivatele2[index2];
}
console.log("Vami druhy zadany text pozpatku: "+ text2reversed);
for (let index3 : number = textUzivatele3.length - 1; index3 >= 0  ; index3--){
    text3reversed += textUzivatele3[index3];
}
console.log("Vami treti text pozpatku: "+ text3reversed);    
// 2. Souhrnnou delku vsech textu, ktere uzivatel zadal. Bonus: nezapocitavejte pripadne uvodni, nebo koncove mezery v zadanych textech.
let celkovaDelka : string = "";
celkovaDelka = celkovaDelka + textUzivatele1 + textUzivatele2 + textUzivatele3;
celkovaDelka.trim();
let celkovaDelkaCisla : number = celkovaDelka.length;
console.log("Vsechny texty za sebou: " + celkovaDelka +" a jejich delka: " + celkovaDelkaCisla);
// 3. Celkovy pocet PISMEN (zakladni US abecedy) je v zadanych textech, a celkovy pocet SAMOHLASEK.
let pocetSamohlasek1 : number = 0;
let pocetSamohlasek2 : number = 0;
let pocetSamohlasek3 : number = 0;
let samohlasky: string[] = ["a","e","i","o","u","á","é","í","ó","ú","ý","y","ě"];
for (let index1 : number = textUzivatele1.length - 1; index1 >= 0; index1--){
    if (samohlasky.includes(textUzivatele1[index1])){
        pocetSamohlasek1++;
    }
}
console.log("Vami prvni zadany text ma: " + pocetSamohlasek1 + " samohlasek");
for (let index2 : number = textUzivatele2.length - 1; index2 >= 0; index2--){
    if (samohlasky.includes(textUzivatele2[index2])){
        pocetSamohlasek2++;
    }
}
console.log("Vami druhy zadany text ma: " + pocetSamohlasek2 + " samohlasek");
for (let index3 : number = textUzivatele3.length - 1; index3 >= 0; index3--){
    if (samohlasky.includes(textUzivatele3[index3])){
        pocetSamohlasek3++;
    }
}
let celkovyPocetSamohlasek : number = pocetSamohlasek1 + pocetSamohlasek2 + pocetSamohlasek3;
console.log("Vami treti zadany text ma: " + pocetSamohlasek3 + " samohlasek");
console.log("Vsechny vase texty dohromady maji: " + celkovyPocetSamohlasek + " samohlasek");
// 4. Urci, kolik PROCENT samohlasek je v zadanych textech. Mezery vubec nepocitame.
let delkaTextu1 : number = textUzivatele1.length;
let delkaTextu2 : number = textUzivatele2.length;
let delkaTextu3 : number = textUzivatele3.length;
let procenta1 : number = (pocetSamohlasek1 / delkaTextu1)*100;
let zaokrouhleni1 : number = Math.floor(procenta1);
let procenta2 : number = (pocetSamohlasek2 / delkaTextu2)*100;
let zaokrouhleni2 : number = Math.floor(procenta2);
let procenta3 : number = (pocetSamohlasek3 / delkaTextu3)*100;
let zaokrouhleni3 : number = Math.floor(procenta3);
let procentaCelkem : number = (celkovyPocetSamohlasek / celkovaDelkaCisla)*100;
let zaokrouhleniCelkem : number = Math.floor(procentaCelkem);
console.log("Samohlasky tvori: " + zaokrouhleni1 + "% vami zadaneho prvniho textu");
console.log("Samohlasky tvori: " + zaokrouhleni2 + "% vami zadaneho druheho textu");
console.log("Samohlasky tvori: " + zaokrouhleni3 + "% vami zadaneho tretiho textu");
console.log("Samohlasky tvori: " + zaokrouhleniCelkem + "% vasich textu dohromady");
// 5. Vypise nejvetsi text v LEXIKOGRAFICKEM usporadani.
let nejdelsiText : string = textUzivatele1;
if (delkaTextu1 < delkaTextu2){
    nejdelsiText =  textUzivatele2;
}
if(delkaTextu2 < delkaTextu3){
    nejdelsiText = textUzivatele3;
}
if(delkaTextu1 < delkaTextu3){
    nejdelsiText = textUzivatele3;
}
console.log("Nejdelsi text je: " + nejdelsiText);

// Program potom uzavrete do funkce "textyO2"
}
//text02();
function cislaO3() {
// ULOHA O3:
let nejvetsiO3 : number = 0;
let nejmensiO3 : number = Number.MAX_VALUE;
let soucinO3 : number = 1;
let soucetO3 : number = 0;
let aritmetickyPrumerO3 : number = 0;
let pocetCykluO3 : number = 0;
for ( ; ; ){
    let cislaO3 : string = prompt('Zadej cisla: ');
    let cisloO3 : number = Number(cislaO3);
    if (cisloO3 <= 0){
        break;
    }
    if (nejmensiO3 > cisloO3){
        nejmensiO3 = cisloO3;
    }
    if (nejvetsiO3 < cisloO3){
        nejvetsiO3 = cisloO3;
    }
    soucetO3 = soucetO3 + cisloO3;
    soucinO3 = soucinO3 * cisloO3;
    pocetCykluO3++;
}
aritmetickyPrumerO3 = soucetO3 / pocetCykluO3;
console.log('Nejvetsi cislo z tech ktere jste zadal je: ' + nejvetsiO3);
console.log('Nejmensi cislo z tech ktere jste zadal je: ' + nejmensiO3);
console.log('Soucin vsech cisel je: ' + soucinO3);
console.log('Soucet vsech cisel je: ' + soucetO3);
console.log('Aritmeticky prumer vsech cisel je: ' + aritmetickyPrumerO3);
// Zadani je totozne, jako u ulohy O1, ALE
// - program se nepta na 3 cisla, ale nechava uzivatele zapisovat cisla, kazde potvrdi ENTERem
// - zadavani cisel se ukonci zadanim cisla 0, nebo zaporneho cisla
// - BONUS: pri zadani neciselneho udaje se vypise zprava o chybnem vstupu a vyzva k opetovnemu zadani cisla
// - PO zadani vsech cisel (tzn. po zadani 0 nebo zaporneho cisla) program vypocita a vypise vsechny udaje O1-1 .. O1-5.
// Pro reseni teto ulohy NEPOUZIVEJTE pole.
// Program potom uzavrete do funkce "cislaO3"
}
//cislaO3()
function cislaO4(){
// ULOHA O4:
// Zadani je totozne, jako u ulohy O2, ALE
// - program se nepta na 3 texty, ale nechava uzivatele zapisovat texty, kazdy potvrdi ENTERem
// - zadavani se ukonci zadanim PRAZDNEHO textu
// PO zadani vsech textu program vypocita a vypise vsechny udaje O2-1 .. O2-5
// Pro reseni teto ulohy NEPOUZIVEJTE pole.
// Program potom uzavrete do funkce "cislaO4"
}

// ULOHA O5 - bonusova:
// V predchozich ulohach se MOHLY vyskytnout opakujici se kusy kodu. Pokuste se tato opakovani nahradit funkcemi, a v puvodnich
// mistech tyto funkce jen vyvolat. Teziste ukolu je najit duplikovana mista, vymyslet, jake bude funkce dostavat parametry, a jaky
// bude vydavat vysledek (a samozrejme spravne napsat implementaci)
