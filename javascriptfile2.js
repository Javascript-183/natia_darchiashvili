// 1. ნებისმიერ HTML ელემენტს,
// რომელიც Id სელექტორით იქნება მონიშნული მიეცით ყვითელი გარეკანის(background) ფერი.
const specialElement = document.getElementById("special");  //აქ getElementById იმ ელემენტისთვის გამოვიყენეთ, რომელსაც აქ Id ატრიბუტი. ეს უნდა გავხადოთ ყვოთელი
if (specialElement) {
    specialElement.style.backgroundColor = "yellow";
}

// 2. ნებისმიერ ელემენტს, რომელსაც alert კლასი ექნება გაწერილი,
//  მიანიჭეთ 1px ნაცრისფერი (gray) კედელი(border).
const alertElements = document.querySelectorAll(".alert"); // აქ querySelectorAll გამოიყენება ყველა ელემენტის მოსაძებნად, რომელსაც alert კლასი აქვს. ამ ელემენტებს ენიჭებათ ნაცრისფერი საზღვარი 
alertElements.forEach((element) => {
    element.style.border = "1px solid gray";
});

// 3. თუ რომელიმე HTML ელემენტს კლასს alert-თან ერთად ექნება კლასი stop გაწერილი,
//  გახადეთ მისი გარეკანის (background) ფერი წითელი.
const alertStopElements = document.querySelectorAll(".alert.stop"); // querySelectorAll ით ყველა ელემენტი მოიძებნება , რომელსაც alert და stop კლასები აქვთ. ესენი გახდება წითელი ფერის
alertStopElements.forEach((element) => {
    element.style.backgroundColor = "red";
});

// 4. თუ რომელიმე HTML ელემენტს კლასს alert-თან ერთად ექნება კლასი go გაწერილი,
//  გახადეთ მისი გარეკანის (background) ფერი მწვანე.
const alertGoElements = document.querySelectorAll(".alert.go"); // erySelectorAll ით მოიძებნება alert და go კლასების მქონე ელემენტები და ესენი გახდებიან მწვანე 
alertGoElements.forEach((element) => {
    element.style.backgroundColor = "green";
});