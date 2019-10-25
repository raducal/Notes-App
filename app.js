const notes = require("./notes");
const yargs = require("yargs");

// add command
yargs.command({
  command: "add",
  desribe: "add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOptions: true,
      type: "string"
    },
    body: {
      describe: "note description",
      demandOptions: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

// remove command
yargs.command({
  command: "remove",
  desribe: "remove note",
  builder: {
    title: {
      describe: "note title",
      demandOptions: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: "list",
  desribe: "list notes",
  handler: function() {
    notes.listNotes();
  }
});

yargs.command({
  command: "read",
  desribe: "read notes",
  builder: {
    title: {
      describe: "note title",
      demandOptions: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

yargs.parse();
