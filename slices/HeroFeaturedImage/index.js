import React from 'react'
import { RichText } from 'prismic-reactjs'
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";

const HeroFeaturedImage = ({ slice }) => {
    const backgroundImage = slice.primary.backgroundImage;
    console.log(slice.primary.description)
      return (
        <Flex
          w={'full'}
          h={'100vh'}
          backgroundImage={
            'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
          }
          backgroundSize={'cover'}
          backgroundPosition={'center center'}>
          <VStack
            w={'full'}
            justify={'center'}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
            <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              style={{
                fontFamily: 'IvyPresto Headline',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '60px',
                lineHeight: '100%',
                color: '#FAFAF9'
              }}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}>
              {slice.primary.title ? slice.primary.title[0].text : "Quality Engilsh : editing done faster"}
            </Text>
          </Heading>
              <Text
                style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '18px',
                lineHeight: '28px',
                textAlign: 'center',
                color: '#FAFAF9'}}>
                  {slice.primary.description}
              </Text>
              <Stack direction={'row'}>
                <Button
                 rounded={'6px'}
                 bg={'blue.400'}
                 color={'white'}
                 _hover={{
                   bg: 'blue.500',
                 }}>
                  {slice.primary.ctaOrder ? slice.primary.ctaOrder : "Order English Language Editing"}
                </Button>
                <Button
                  bg={'#FAFAF9'}
                  rounded={'6px'}
                  color={'#247AB9'}
                  _hover={{ bg: 'whiteAlpha.500' }}>
                  Show me more
                </Button>
              </Stack>
            </Stack>
          </VStack>
        </Flex>
      );
  };

export default HeroFeaturedImage