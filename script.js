let selectedGender = "";

function selectGender(gender) {
  selectedGender = gender;
  console.log("Selected gender:", gender);
}

function generateName() {
  //1. Get Input
  let day = Number(document.getElementById("Day").value);
  let month = Number(document.getElementById("month").value);
  let year = Number(document.getElementById("year").value);

  //2. Separate the year
  let CC = Math.floor(year / 100);
  let YY = year % 100;

  //3. Calculate the day of the week
  let d =
    Math.floor(
      4 / CC - 2 * CC - 1 + (5 * YY) / 4 + (26 * (month + 1)) / 10 + day,
    ) % 7;
    if (d < 0) {
      d += 7; // Ensure d is non-negative
    }

  //4. Akan Names by day of week
  let maleNames = [
    "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",
  ];
  let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  //6. Get the Akan Name
  let akanName = selectedGender === "male" ? maleNames[d] : femaleNames[d];

  //7. Display the result
  const displaySection = document.getElementById("display");
  displaySection.innerHTML = `
    <div class="result">
      <h2>Your Akan Name is: <span class="akan-name">${akanName}</span></h2>
      <p>Day of birth: ${getDay(d)}</p>
      <p>Gender: ${selectedGender.charAt(0).toUpperCase() + selectedGender.slice(1)}</p>
    </div>
  `;
}

function getDay(dayIndex) {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[dayIndex];
}
