import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";

const LanguageSelector = ({ setCurrentLanguage }) => {
  const selectLanguage = (e) => {
    const selectedLanguage = e.target.value;
    setCurrentLanguage(selectedLanguage);
  };

  return (
    <Box m={4}>
      <FormControl>
        <FormLabel htmlFor="language-select" srOnly>
          Language
        </FormLabel>
        <Select onChange={selectLanguage} id="language-select" defaultValue="Java">
          <option value="java">Java</option>
          <option value="cpp">Cpp</option>
          <option value="python">Python</option>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSelector;
