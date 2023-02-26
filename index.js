// Fonction de création de div à chaque entrée
function createDivMember(member) {
  const memberList = document.querySelector(".member-list");
  const memberElement = document.createElement("div");
        memberElement.classList.add("member");
        memberElement.textContent = member;
        memberList.appendChild(memberElement);
}


document.addEventListener("DOMContentLoaded", function(event) {

  const form = document.querySelector("form");
  const myInput = document.querySelector("#name");

  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = myInput.value;
  
    fetch("/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({input : value}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("insertion OK", myInput.value)
        createDivMember(myInput.value);
        console.log(data.message);

      })
      .catch((error) => {
        console.error(error);
      });
  });

  fetch("/extract")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      data.forEach(member => {
        createDivMember(member.name);
      });
    })
    .catch(error => console.error(error));
});
