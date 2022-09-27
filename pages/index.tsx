import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Text,
  Image,
  Divider,
  Heading,
  Flex,
  VStack,
  Box,
  Spacer
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import {IoSunny, IoMoon} from 'react-icons/io5';
import { useState } from 'react';

const Home: NextPage = () => {

  const {toggleColorMode} = useColorMode();
  const [toggle, setToggle] = useState(false);

  return (
    <VStack p={5}>
      <Head>
        <title>COVID in Malaysia</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight='semibold' >COVID In Malaysia</Heading>
        <Spacer></Spacer>
        <Box
        cursor={"pointer"}
        onClick={() => {
          toggleColorMode();
          setToggle(!toggle);
        }}
      >
        {toggle ? <IoMoon /> : <IoSunny />}
      </Box>
      </Flex>
    </VStack>
  )
}

export default Home