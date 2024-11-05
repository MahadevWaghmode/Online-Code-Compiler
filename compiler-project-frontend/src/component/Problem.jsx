import { Box, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { IoDocumentTextOutline } from "react-icons/io5";

const Problem = ({ minH, minW, maxH }) => {
  return (
    <Box
      minW={minW}
      minH={minH}
      border="3px solid #f0f0f0"
      borderRadius={5}  
    >
      {/* Sticky Header */}
      <HStack
        bgColor="#f0f0f0"
        p={4}
        spacing={2}
        position="sticky"
        top={0}
        zIndex={1}
      >
        <Icon color="blue" as={IoDocumentTextOutline} />
        <Text as="span" fontWeight="bold" fontSize="md">
          Description
        </Text>
      </HStack>

      {/* Scrollable Content */}
      <Box p={4} maxH={maxH} overflowY="auto">
      <Heading as="h4" size="md" mb={4}>
          Text Analyzer
        </Heading>
        <Text>
          Write a Java program that performs various operations on a given text input. The program should have the following features:
          <br /><br />
          <strong>Input Text:</strong> The program should allow the user to input a text (a sentence or a paragraph).
          <br /><br />
          <strong>Word Count:</strong> Implement a function `wordCount` that takes the input text as a parameter and returns the total number of words in the text.
          <br /><br />
          <strong>Vowel Count:</strong> Implement a function `vowelCount` that takes the input text as a parameter and returns the total number of vowels (a, e, i, o, u, both uppercase and lowercase) in the text.
          <br /><br />
          <strong>Reverse Text:</strong> Implement a function `reverseText` that takes the input text as a parameter and returns the reversed version of the text.
          <br /><br />
          <strong>Palindrome Check:</strong> Implement a function `isPalindrome` that takes the input text as a parameter and checks if the text is a palindrome (reads the same backward as forward, ignoring spaces and punctuation). The function should return true if the text is a palindrome, and false otherwise.
          <br /><br />
          <strong>Word Frequency:</strong> Implement a function `wordFrequency` that takes the input text as a parameter and returns a Map or Dictionary data structure containing the frequency of each word in the text. The keys of the Map should be the unique words, and the values should be the corresponding frequencies.
          <br /><br />
          <strong>Substring Search:</strong> Implement a function `substringSearch` that takes the input text and a substring as parameters.
        </Text>
      </Box>
    </Box>
  );
};

export default Problem;
