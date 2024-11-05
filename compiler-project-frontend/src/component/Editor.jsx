import { Box, Button, Flex, Image, Spacer, Stack, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoCodeSlashOutline } from "react-icons/io5";

import StickyHeader from "./StickyHeader";
import LanguageSelector from "./LanguageSelector";
import RunAndSubmit from "./RunAndSubmit";
import CodeEditor from "./CodeEditor";
import { MdInput } from "react-icons/md";
import { LuFileOutput } from "react-icons/lu";

const Editor = ({ minW, minH, maxH }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [currentCode, setCurrentCode] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("java");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const Type = () => {
    let index = 0;
    const codeText = `
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class TextAnalyzer {

    public static int wordCount(String text) {
        // Return number of words in the given text
        if (text == null || text.trim().isEmpty()) {
            return 0;
        }
        String[] words = text.trim().split("\\s+");
        return words.length;
    }

    public static int vowelCount(String text) {
        // Return number of vowels in the given text
        if (text == null || text.isEmpty()) {
            return 0;
        }
        int count = 0;
        for (char c : text.toLowerCase().toCharArray()) {
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                count++;
            }
        }
        return count;
    }

    public static String reverseText(String text) {
        // Return the reversed text for a given string
        if (text == null) {
            return null;
        }
        return new StringBuilder(text).reverse().toString();
    }

    public static boolean isPalindrome(String text) {
        /* Check if the given text is palindrome or not 
		   and return true or false*/
        if (text == null) {
            return false;
        }
		
        String cleanedText = text.replaceAll("\\s+", "").toLowerCase();
        String reversedText = new StringBuilder(cleanedText).reverse().toString();
        return cleanedText.equals(reversedText);
    }

    public static Map<String, Integer> wordFrequency(String text) {
        /* Check the number of times each word in the given text is 
		   present and return a hash map of its frequency */ 
		   
        Map<String, Integer> frequencyMap = new HashMap<>();
        if (text == null || text.trim().isEmpty()) {
            return frequencyMap;
        }
		
        String[] words = text.trim().toLowerCase().split("\\s+");
		
        for (String word : words) {
            frequencyMap.put(word, frequencyMap.getOrDefault(word, 0) + 1);
        }
        return frequencyMap;
    }

    public static int substringSearch(String text, String substring) {
        /* Return the starting index of the first occurrence of the substring 
		in the text, or -1 if the substring is not found */
		
        if (text == null || substring == null) {
            return -1;
        }
        return text.indexOf(substring);
    }
	
	// don't need to write main method
	// i was writing this for test output
	public static void main(String args[]){
		
		Scanner sc = new Scanner(System.in);

		String text = sc.nextLine();
    String substring = sc.nextLine();
    
    sc.close();
		
		System.out.println("Word Count: " + TextAnalyzer.wordCount(text));
        System.out.println("Vowel Count: " + TextAnalyzer.vowelCount(text));
        System.out.println("Reversed Text: " + TextAnalyzer.reverseText(text));
        System.out.println("Is Palindrome: " + TextAnalyzer.isPalindrome(text));

        System.out.println("Word Frequency:");
		
        Map<String, Integer> frequencyMap = TextAnalyzer.wordFrequency(text);
        for (Map.Entry<String, Integer> entry : frequencyMap.entrySet()) {
            System.out.println("   "+entry.getKey() + ": " + entry.getValue());
        }
		
		
        int index = TextAnalyzer.substringSearch(text, substring);
        if (index != -1) {
            System.out.println("Substring found at index: " + index);
        } else {
            System.out.println("Substring not found.");
        }

        
		
	}
	
}
`;

    const codeLength = codeText.length;
    const intervalId = setInterval(() => {
      setCurrentCode(codeText.slice(0, index));
      index++;

      // Stop the typing effect when the entire code is displayed
      if (index > codeLength) {
        clearInterval(intervalId);
      }
    }, 50); // Adjust the typing speed by changing the interval duration
  };

  return (
    <Box
      id="editor"
      minW={minW}
      minH={minH}
      border="3px solid #f0f0f0"
      borderRadius={5}
    >
      
        <StickyHeader icon={IoCodeSlashOutline} text="Code" />
      

      <Flex alignItems="center" borderBottom="1px solid #f0f0f0">
        <LanguageSelector setCurrentLanguage={setCurrentLanguage} />
        <Spacer />
        {/* <Button onClick={Type}>Type Code</Button> */}
        <RunAndSubmit
          currentCode={currentCode}
          input={input}
          setOutput={setOutput}
        />
      </Flex>

      <Box onFocus={Type} id="code" overflowY="auto">
        <CodeEditor
          currentLanguage={currentLanguage}
          currentCode={currentCode}
          setCurrentCode={setCurrentCode}
        />
      </Box>

      <Flex id="inputnoutput">
        <Box minW="450px">
          <StickyHeader icon={MdInput} text="Input"/>
          <Textarea onChange={handleInputChange} p={4} resize="none" cols={57} rows={7} placeholder="Enter input here..." />
        </Box>
        <Box minW="445px">
          <StickyHeader icon={LuFileOutput} text="Output"/>
          <Textarea p={4} defaultValue={output} resize="none" cols={57} rows={7} placeholder="Output is here..." />
        </Box>
      </Flex>
    </Box>
  );
};

export default Editor;
