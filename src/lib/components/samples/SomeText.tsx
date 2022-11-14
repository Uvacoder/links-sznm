import { Grid, Heading, Text } from "@chakra-ui/react";

const SomeText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="lg">
        sznm.link
      </Heading>

      <Text fontSize="xs" color="gray.500">
        This is a Next.js app with Chakra-UI and TypeScript setup.
      </Text>
    </Grid>
  );
};

export default SomeText;
