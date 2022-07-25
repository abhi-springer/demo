import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  StylesProvider,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import heroStyles from '../../styles/hero.module.css'

const HeroWithFeatureLogo = ({ slice }) => {
  console.log(slice.primary.featuredImage)
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
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
                color: '#003D77'
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
          <Text className={heroStyles.herotext}>
            {slice.primary.description ? slice.primary.description[0].text : "We know how much effort goes into publishing. Our team of PhD experts provide English language editing, translation, and manuscript preparation services backed by a 100% satisfaction guarantee."}
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'6px'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              {slice.primary.ctaOrder ? slice.primary.ctaOrder : "Order Now"}
            </Button>
            <Button rounded={'6px'}>{slice.primary.ctaGetQuote ? slice.primary.ctaGetQuote : "Get A Quote"}</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            slice.primary.featuredImage ? slice.primary.featuredImage.url : 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}

export default HeroWithFeatureLogo