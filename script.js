var inputButton = document.querySelector(".inputButton");
var list = document.querySelector(".list");
var msg = document.querySelector(".msg");

completedScore = "0";
document.querySelector(".scoreA").textContent = completedScore;

inputButton.addEventListener("click", function () {
  //sparar det man skrivit i input rutan i en variabel
  var inputText = document.querySelector(".inputText").value;
  //jag kollar så att inte input rutan är tom med en if sats
  if (!inputText.length < 1) {
    //skapar ett li object som heter nyToDo och sen använder jag appenchild för att lägga till den i en ul som heter lista och sen lägger jag till classen nyToDo med classtlist.add
    const newToDo = document.createElement("li");
    list.appendChild(newToDo);

    //skapar ett span som heter newSpan som jag lägger till i newTodo med appendchild. Lägger även till class med classlist.add
    const newSpan = document.createElement("span");
    newSpan.innerText = inputText;
    newToDo.appendChild(newSpan).classList.add("newSpan");

    //här lägger jag till papperskorgs symbolen som en span med appendchild och samtidigt får den klassen papperskorg med classlist.add
    const trashcan = document.createElement("span");
    trashcan.innerHTML = "🗑️";
    newToDo.appendChild(trashcan).classList.add("trashcan");

    //Här nollställer jag input rutan och felmeddelandet man får om fältet är tomt genom att sätta värdet eller innehållet till "". Jag tar även bort error msg classen med classlist.remove
    document.querySelector(".inputText").value = "";
    document.querySelector(".msg").textContent = "";
    document.querySelector(".msg").classList.remove("errorMsg");

    //Här skapar jag en click eventlistener för papperskorgs symbolen och en function
    trashcan.addEventListener("click", function () {
      //Här kollar jag om den todo man ska ta bort innehåller klassen complete och om den gör det så drar jag bort 1 ifrån avklaradscore så att det inte blir fel i totalen och står att man avklarat 5 när det bara finns 1 todo

      if (newSpan.classList.contains("completed")) {
        completedScore--;
      }
      newToDo.remove();
      //Här uppdaterar jag domen med antalet avklarade todos
      document.querySelector(".scoreA").textContent = completedScore;
    });

    //Här lägger jag till en click eventlistener med en function på newSpan spanen
    newSpan.addEventListener("click", function () {
      //Här kollar jag om spanen har classen completed med en if sats och isåfall tar jag bort den och därmed stylingen, samtidigt som jag tar bort ett ifrån avklarat scoren och uppdaterar domen
      if (newSpan.classList.contains("completed")) {
        newSpan.classList.remove("completed");
        completedScore--;
        document.querySelector(".scoreA").textContent = completedScore;
      } else {
        // om spanen inte har classen fardig så får den klassen fardig vid ett klick och avklarat scoren och domen uppdateras
        newSpan.classList.add("completed");
        completedScore++;
        document.querySelector(".scoreA").textContent = completedScore;
      }
    });
  } else {
    //Här skriver jag ut felmeddelandet med en else sats om inout fältet är tomt och då sätter jag textcontent i min h4 med klassen meddelande och lägger till classen errorMsg med classlist.add
    document.querySelector(".msg").textContent = "Input must not be empty";
    document.querySelector(".msg").classList.add("errorMsg");
  }
});
