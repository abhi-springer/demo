import React from 'react'
import { RichText } from 'prismic-reactjs'
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

const TextBlock = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.title ?
        (
<Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                style={{fontFamily: 'IvyPresto Headline',
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
                Quality Engilsh
                <br />{' '}
               editing done faster
              </Text>
            </Heading>)
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
      <RichText render={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    <RichText render={slice.primary.myText} />
    <img src={slice.primary.backgroundImage.url} alt={slice.primary.backgroundImage.alt} />

    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default TextBlock