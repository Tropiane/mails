import express from "express";

const App = express();

App.use(express.urlencoded({ extended: true }));
App.use(express.json());

export default App;