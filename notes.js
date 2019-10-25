const fs = require("fs");
const chalk = require("chalk");

const addNotes = (title, body) => {
  const loadedNotes = loadNotes();
  // const duplicateNotes = loadedNotes.filter(note => note.title === title);

  const findNotes = loadedNotes.find(note => note.title === title);

  if (!findNotes) {
    loadedNotes.push({
      title: title,
      body: body
    });

    console.log(chalk.bgGreen("note added"));
    saveNotes(loadedNotes);
  } else {
    console.log(chalk.bgGreen("note title taken"));
  }
};

const saveNotes = arr => {
  const data = JSON.stringify(arr);
  fs.writeFileSync("notes.json", data);
};

const loadNotes = () => {
  try {
    const allNotes = fs.readFileSync("notes.json");
    const bufferedNotes = allNotes.toString();
    return JSON.parse(bufferedNotes);
  } catch (e) {
    return [];
  }
};

const removeNote = title => {
  const loadedNotes = loadNotes();
  const remove = loadedNotes.filter(notes => notes.title !== title);

  if (loadedNotes.length !== remove.length) {
    console.log(chalk.bgGreen("NoteRemoved"));
    saveNotes(remove);
  } else {
    console.log(chalk.bgRed("No note found"));
  }
};

const listNotes = () => {
  const loadedNotes = loadNotes();
  console.log(chalk.bgBlue("Your notes"));
  loadedNotes.forEach(note => console.log(note.title));
};

const readNote = title => {
  const loadedNotes = loadNotes();
  const note = loadedNotes.find(note => note.title === title);

  if (note) {
    console.log(chalk.green.inverse(note.title) + ": " + note.body);
  } else {
    console.log(chalk.red("error"));
  }
};

module.exports = {
  addNotes,
  removeNote,
  listNotes,
  readNote
};
