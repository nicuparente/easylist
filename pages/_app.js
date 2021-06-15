import "../styles/globals.css";
import { useState } from "react";

import {
  ChakraProvider,
  Container,
  Flex,
  Avatar,
  Badge,
  Heading,
  Accordion,
  AccordionItem,
  Box,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Center,
  Text,
  Button,
  ColorModeScript,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import Head from "next/head";

import theme from "../styles/theme"
import TaskList from "../component/TaskList";
import Footer from "../component/Footer";

import { preListingTaskInitialData, listedTaskInitialData, closingTasksInitialData } from "../data/testData.js";

const totalTask = preListingTaskInitialData.length + listedTaskInitialData.length + closingTasksInitialData.length;



function MyApp({ Component, pageProps }) {

  const [preListingTask, setPreListingTask] = useState(preListingTaskInitialData)
  const [listedTask, setList] = useState(listedTaskInitialData)
  const [closingTask, setclosingTask] = useState(closingTasksInitialData)

  return (
    <>
      <Head>
        <title>Easy List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <body>
          <Center marginY="2.5%" minWidth="1080px">
            <Flex  minWidth="1080px" maxWidth="1440px" direction="column">
              {/* Main Container */}
              <Flex padding="1.5%" minHeight="900px" maxWidth="1080px" >
                {/* Container Info Right */}
                <Box width="25%" backgroundColor="gray.700" padding="20px" borderRadius="10px">
                  <Flex
                    minHeight="100%"
                    justifyItems="center"
                    justifyContent="center"
                    flexGrow="1"
                    flexDirection="column"
                  >
                    <Flex flexDirection="column" marginBottom="40px">
                      <Center>
                        <Heading>
                          Easylist
                        </Heading>
                      </Center>
                      <Center>
                        <Text>by Home Magnet</Text>

                      </Center>


                    </Flex>

                    <Center>
                      <Avatar
                        size="xl"
                        name="Nicu"
                        src="https://avatars.githubusercontent.com/u/7001751?v=4"
                      />
                    </Center>
                    <Center marginTop="10px">
                      <Text>Hello, <strong>Nicu</strong> !</Text>
                    </Center>

                    <Center borderY="1px" borderRadius="3px" padding="5px" flexDir="column" marginTop="20px">
                      <Heading size="sm">Property</Heading>
                      <Text >1234 Yellow Brick Road</Text>
                      <Text>Wonderland, KS, 99999</Text>
                    </Center>

                    <Button variant="ghost" marginTop="50px">
                      Overview
                    </Button>
                    <Button marginTop="5px">
                      Task
                    </Button>
                    <Button variant="ghost" marginTop="5px">
                      Support
                    </Button>

                    <Spacer />
                      <Button variant="ghost" colorScheme="red">Logout</Button>
                  </Flex>
                </Box>

                {/* Container Task Right */}
                <Box marginY="10%" width="75%" padding="20px">

                  <Flex flexDir="row-reverse">
                    <Heading size="md"># of Task : {totalTask}</Heading>
                  </Flex>

                  <Center marginTop="10px">
                    <Heading size="md">Pre-Listing Task</Heading>
                  </Center>
                  <TaskList taskList={preListingTask} handleCompleted={() => console.log("hello")} />
                  <Center marginTop="40px">
                    <Heading size="md">Listed Task</Heading>
                  </Center>
                  <TaskList taskList={listedTask} handleCompleted={() => console.log("hello")} />
                  <Center marginTop="40px">
                    <Heading size="md">Closing Task</Heading>
                  </Center>
                  <TaskList taskList={closingTask} handleCompleted={() => console.log("hello")} />
                </Box>
              </Flex>
              <Divider marginTop="2.5%" />
              <Footer/>
            </Flex>

          </Center>
        </body>
        
      </ChakraProvider>
    </>
  );
}

export default MyApp;