import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={(s) => setSearch(s)} />
      <main>
        <Routes>
          <Route path="/" Component={LandingPage} exact />
          <Route path="/login" Component={LoginScreen} exact />
          <Route path="/register" Component={RegisterScreen} exact />
          <Route path="/createnote" Component={CreateNote} exact />
          <Route path="/note/:id" Component={SingleNote} exact />
          <Route path="/profile" Component={ProfileScreen} exact />
          <Route
            path="/mynotes"
            Component={() => <MyNotes search={search} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
