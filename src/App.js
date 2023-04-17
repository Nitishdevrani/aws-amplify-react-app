import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";
import {
  Button,
  Flex,
  Image,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
  AmplifyProvider 
} from "@aws-amplify/ui-react";
import { listTodos} from "./graphql/queries";
import {
  createTodo as createNoteMutation,
  deleteTodo as deleteNoteMutation,
} from "./graphql/mutations";
import NavBar from "./ui-components/NavBar";
import {
  MycardCollection 
 } from './ui-components';
 

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listTodos });
    const notesFromAPI = apiData.data.listTodos.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name);
          note.image = url;
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name,
    };
    if (!!data.image) await Storage.put(data.name, image);
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await Storage.remove(name);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <AmplifyProvider>
    <View className="App">
      <NavBar overrides={{"NavBar": { width: "100vw" } }}/>
      <Heading level={1}>My Notes App</Heading>

      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
        
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <View
              name="image"
              as="input"
              type="file"
              style={{ alignSelf: "end" }}
            />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Notes</Heading>
      <View margin="3rem 0">
      <MycardCollection items={notes} overrides={{"image": { display: "none" } }}/>
        {/* {notes.map((note) => (
        
          <Frame1 cardTodo={note}/>
        ))} */}
      </View>
    </View>
    </AmplifyProvider>
  );
};

export default withAuthenticator(App);