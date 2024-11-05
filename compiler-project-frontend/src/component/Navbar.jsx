import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { IoIosBug } from "react-icons/io";
import Problem from "./Problem";
import Editor from "./Editor";
import StickyHeader from "./StickyHeader";
import { FaCompress, FaExpand, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const conref = useRef(null);
  const handleFullScreen = () => {
    if (!isFullScreen) {
      if (conref.current.requestFullscreen) {
        conref.current.requestFullscreen();
      } else if (conref.current.mozRequestFullScreen) {
        conref.current.mozRequestFullScreen();
      } else if (conref.current.webkitRequestFullscreen) {
        conref.current.webkitRequestFullscreen();
      } else if (conref.current.msRequestFullscreen) {
        conref.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <Box
      ref={conref}
      minW={isFullScreen ? "100vw" : "900px"}
      minH={isFullScreen ? "100vh" : "480px"}
      position={isFullScreen ? "fixed" : "relative"}
      top={isFullScreen ? 0 : "auto"}
      left={isFullScreen ? 0 : "auto"}
      zIndex={isFullScreen ? 9999 : "auto"}
      backgroundColor={isFullScreen ? "white" : "transparent"}
      border={isFullScreen ? "none" : "3px solid #f0f0f0"}
      borderRadius={isFullScreen ? 0 : 5}
    >
      <Box
        as="nav"
        position="sticky"
        zIndex={1}
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
        bgColor="#e3f2fd"
        height="62px"
        color="white"
      >
        <Flex className="container-fluid">
          <Logo />
          
          <Flex gap={20}>
            <Flex gap={4}>
              {/* <Icon rounded={10} bg ="linear-gradient(to right, #F58529, #DD2A7B, #8134AF, #515BD4)" as={FaInstagram} boxSize={40} /> */}
              <Image boxSize={40} src="/insta.svg" />
              <Stack spacing={0}>
                <Text fontSize="x-small" mt={10} lineHeight={0}>
                  Follow
                </Text>
                <Text as="b" fontSize="large" lineHeight={0}>
                  codingchakida
                </Text>
              </Stack>
            </Flex>
            <Flex gap={4}>
              {/* <Icon rounded={10} bg ="linear-gradient(to right, #F58529, #DD2A7B, #8134AF, #515BD4)" as={FaInstagram} boxSize={40} /> */}
              <Image boxSize={40} src="/teligram.png" />
              <Stack spacing={0}>
                <Text fontSize="x-small" mt={10} lineHeight={0}>
                  Join Group
                </Text>
                <Text as="b" fontSize="large" lineHeight={0}>
                  Coding Cha Kida
                </Text>
              </Stack>
            </Flex>
          </Flex>

          <Button border="none" bg="transparent" onClick={handleFullScreen}>
            <Icon
              color="green"
              mr={4}
              as={isFullScreen ? FaCompress : FaExpand}
            />
            {/* {isFullScreen ? "Exit Full Screen" : "Full Screen"} */}
          </Button>
        </Flex>
      </Box>
      <HStack m={4}>
        <Problem
          minW={isFullScreen ? "330px" : "300px"}
          minH={isFullScreen ? "650px" : "640px"}
          maxH={isFullScreen ? "615px" : "500px"}
        />
        <Editor
          minW={isFullScreen ? "900px" : "900px"}
          minH={isFullScreen ? "650px" : "480px"}
          maxH={isFullScreen ? "400px" : "100px"}
        />
      </HStack>
    </Box>
  );
};

export default Navbar;
