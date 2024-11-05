import { Box, HStack, Icon, Stack, Text, useToast } from "@chakra-ui/react";
import { CiPlay1 } from "react-icons/ci";
import axios from "axios";

const RunAndSubmit = ({currentCode, input, setOutput}) => {

    const toast = useToast();
    
    const handleRunCode = async () => {
        try {
          const response = await axios.post("http://localhost:8080/api/execute", { code: currentCode, input, lang:"java" });
          console.log(response.data)
          setOutput(response.data.output)
        } catch (error) {
          setOutput("Error")
          console.log("Error in hadling run code")
        }
      };
    

  return (
    <Stack _hover={{ cursor: 'pointer' }}
     onClick={handleRunCode} border="1px solid black" rounded="5px" padding="2px 2px 2px 2px" m={4} >
      <HStack >
        <Text as="span">Run</Text>
        <Icon as={CiPlay1} />
      </HStack>
    </Stack>
  );
};

export default RunAndSubmit;
