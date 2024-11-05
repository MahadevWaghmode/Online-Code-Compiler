import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";


const Logo = () => {
  return (
    <Box>
      <Flex alignItems="center" gap={4}>
        <Text fontSize="x-large" color="yellow">{"{"}</Text>
        {/* <Icon rounded={10} bg ="linear-gradient(to right, #F58529, #DD2A7B, #8134AF, #515BD4)" as={FaInstagram} boxSize={40} /> */}
        <Stack alignItems="end" spacing={0} mt={4}>
          <Text fontWeight="bold" fontSize="large" lineHeight={0}>
            Coding
          </Text>
          <Text as="b" fontSize="large" lineHeight={0}>
            Cha
          </Text>
        </Stack>
        <Image ml={-10} boxSize={45} src="/bug.svg" />
        <Text color="yellow" ml={-10} mt={12} fontSize="xxx-large">
          {"}"}
        </Text>
      </Flex>
    </Box>
  );
};

export default Logo;
