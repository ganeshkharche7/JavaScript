const addBtn = document.querySelector(".add_btn");

const main = document.querySelector("#main");

const saveNotes = () => {
  const notes = document.querySelectorAll(".box textarea");
  const data = [];

  notes.forEach((note) => {
    data.push(note.value);
  });
  if(data.length === 0){
    localStorage.removeItem("notes")
  } else{
    localStorage.setItem("notes", JSON.stringify(data))
  }
};

addBtn.addEventListener("click", function () {
  addNote();
});

const addNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="box">
            <div class="navbar">
                <i><img class="savebtn" style="height: 20px; margin: 2px;" src="images/diskette.png" alt=""></i>
                <i><img class="trashbtn" style="height: 20px; margin: 2px;" src="images/trash-can.png" alt=""></i>
            </div>
            <textarea>${text}</textarea>
    </div>`;

  note.querySelector(".trashbtn").addEventListener("click", function () {
    note.remove();
    saveNotes();
  });

  note.querySelector(".savebtn").addEventListener("click", function () {
    saveNotes();
  });

  note.querySelector("textarea").addEventListener("onfocusout", function () {
    saveNotes();
  });
  main.appendChild(note);
  saveNotes();
};

(function () {
  const lsnotes = JSON.parse(localStorage.getItem("notes"));
  if(lsnotes.length === null){
    addNote()
  } else{
    lsnotes.forEach((lsnote) => {
        addNote(lsnote)
    })
  }
})();
