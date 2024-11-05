import React, { useState, useEffect } from "react";

const Working = () => {
  const [currentCode, setCurrentCode] = useState("");

  useEffect(() => {
    let index = 0;
    const code = ["public class Main { \n\n }","public static void main(String[] args){}"]
    const codeText = `
public class Main
{
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
`;
    const codeLength = code[0].length;

    const intervalId = setInterval(() => {
      setCurrentCode(code[0].slice(0, index));
      index++;
        
      // Stop the typing effect when the entire code is displayed
      if (index > codeLength) {
        clearInterval(intervalId);
      }
    }, 50); // Adjust the typing speed by changing the interval duration

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <pre>
      <code>{currentCode}</code>
    </pre>
  );
};

export default Working;
