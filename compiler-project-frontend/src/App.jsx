import { useRef, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { Box, HStack, Button } from "@chakra-ui/react";
import Problem from "./component/Problem";
import Editor from "./component/Editor";
import { Route, Routes } from "react-router-dom";
import Working from "./component/Working";

function App() {
  
   

  return (
    <Box>
          
      <Routes >
      <Route path='/' element={<Navbar />} />
				<Route path='/working' element={<Working />} />
			</Routes>
    </Box>
  );
}

export default App;
