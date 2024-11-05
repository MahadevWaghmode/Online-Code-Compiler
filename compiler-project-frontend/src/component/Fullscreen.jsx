import React, { useRef } from 'react';
import Navbar from './Navbar';
import { HStack } from '@chakra-ui/react';
import Problem from './Problem';
import Editor from './Editor';

const Fullscreen = () => {

    const examContentRef = useRef(null);

  const enterFullscreen = () => {
    if (examContentRef.current.requestFullscreen) {
      examContentRef.current.requestFullscreen();
    } else if (examContentRef.current.mozRequestFullScreen) {
      examContentRef.current.mozRequestFullScreen();
    } else if (examContentRef.current.webkitRequestFullscreen) {
      examContentRef.current.webkitRequestFullscreen();
    } else if (examContentRef.current.msRequestFullscreen) {
      examContentRef.current.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };


  return (
    <div>
      <button onClick={enterFullscreen}>Enter Fullscreen</button>
      <button onClick={exitFullscreen} style={{ marginLeft: '10px' }}>Exit Fullscreen</button>

      <div ref={examContentRef} style={{ border: '1px solid black', marginTop: '20px', padding: '10px' }}>
      <Navbar />
      <HStack m={4}>
        <Problem />
        <Editor />
      </HStack>
        
      </div>
    </div>
  )
}

export default Fullscreen