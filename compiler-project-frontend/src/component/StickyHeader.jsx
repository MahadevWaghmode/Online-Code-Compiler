import { HStack, Icon, Text } from "@chakra-ui/react"


const StickyHeader = ({icon,text}) => {
  return (
    <HStack
        bgColor="#f0f0f0"
        p={4}
        spacing={4}
        position="sticky"
        top={0}
        zIndex={1}
      >
        <Icon color="green" as={icon} />
        <Text as="span" fontWeight="bold" fontSize="md">
          {text}
        </Text>
      </HStack>

  )
}

export default StickyHeader