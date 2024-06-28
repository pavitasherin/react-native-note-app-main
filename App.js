import React, { useState } from "react";
import Home from "./src/screens/home";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  deleteNote,
  setDataNote,
  dataNote,
  editNote,
}) => {
  switch (currentPage) {
    case "home":
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          setDataNote={setDataNote}
        />
      );
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return (
        <EditNote
          setCurrentPage={setCurrentPage}
          dataNote={dataNote}
          editNote={editNote}
        />
      );
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note Pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ]);
  const [dataNote, setDataNote] = useState();

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const editNote = (id, title, desc) => {
    setNoteList(
      noteList.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            title: title,
            desc: desc,
          };
        } else {
          return note;
        }
      })
    );
    setCurrentPage("home");
  };

  const deleteNote = (id) => {
    setNoteList(noteList.filter((note) => note.id !== id));
  };

  return (
    <CurrentPageWidget
      noteList={noteList}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
      deleteNote={deleteNote}
      dataNote={dataNote}
      editNote={editNote}
      setDataNote={setDataNote}
    />
  );
};

export default App;
