import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from 'prismic-reactjs'
import {
  background,
    Button,
    Flex,
    Heading,
    Stack,
    StylesProvider,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import heroStyles from '../../styles/hero.module.css'

const Image = ({ slice, index }) => {
  const image = slice.primary.image;
  const title = slice.primary.title[0]
 console.log(title)
  return (
      <div>
        {prismicH.isFilled.image(image) && (
        <div className= {heroStyles.heroText} style = {{backgroundImage : "url(" + image.url + ")",height:'482px'}}>
          <p></p>
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
                {title.text}
              </Text>
            </Heading>
        </div>
      )}
      </div>
  );
};

export default Image;

// import React from 'react'
// import { RichText } from 'prismic-reactjs'

// const Image = ({ slice }) => (
//   <section>
//     <span className="title">
//       {
//         slice.primary.title ?
//         <RichText render={slice.primary.title}/>
//         : <h2>Template slice, update me!</h2>
//       }
//     </span>
//     {
//       slice.primary.description ?
//       <RichText render={slice.primary.description}/>
//       : <p>start by editing this slice from inside Slice Machine!</p>
//     }
//     <style jsx>{`
//         section {
//           max-width: 600px;
//           margin: 4em auto;
//           text-align: center;
//         }
//         .title {
//           color: #8592e0;
//         }
//     `}</style>
//   </section>
// )

// export default Image