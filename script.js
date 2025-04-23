let theme = "light";
const textarea = document.querySelector("#note");

const savedClr = localStorage.getItem("colour");
if (savedClr) {
  textarea.style.color = savedClr;
  document.querySelector("#clrPicker").value = savedClr;
}

const savedNote = localStorage.getItem("usrNote");
if (savedNote) {
  textarea.value = savedNote;
}

const toggleTheme = () => {
  textarea.classList.toggle("dark");
  document.querySelector(".full").classList.toggle("dark");
  if (theme === "light") {
    theme = "dark";
    document.querySelector("#theme").innerHTML =
      '<i class="fa-solid fa-moon fa-xl"></i>';
  } else {
    theme = "light";
    document.querySelector("#theme").innerHTML =
      '<i class="fa-solid fa-sun fa-xl"></i>';
  }
};

function changeTheme() {
  const selectedTheme = document.querySelector("#themeselector").value;
  const bg = document.querySelector("#bg");
  textarea.classList.remove("light", "dark", "sky", "dream");
  bg.classList.remove("light", "dark", "sky", "dream");
  textarea.classList.add(selectedTheme);
  bg.classList.add(selectedTheme);
}

function clrChange() {
  const color = document.querySelector("#clrPicker").value;
  textarea.style.color = color;
  localStorage.setItem("colour", color);
}

function saveNote() {
  localStorage.setItem("usrNote", textarea.value);
  alert("Saved");
}

function clearNote() {
  localStorage.removeItem("usrNote");
  textarea.value = "";
  alert("Cleared");
}

window.copy = () => {
  navigator.clipboard.writeText(textarea.value);
  alert("Text Copied!");
};

window.paste = async () => {
  const pasteText = await navigator.clipboard.readText();
  textarea.value += pasteText;
};


