import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
// background-color: lightgreen;
color:white;
`
const Heading = styled.div`
font-family: Archivo;
font-size: 24px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0em;
text-align: center;
margin-bottom: 80px;
`
const Image = styled.img`
//center the image
display: block;
margin-left: auto;
margin-right: auto;


`
const TextArea1 = styled.div`
position: absolute;
top: 145%;
  left: 27%;
  transform: translateX(-50%);
  width:150px;
`
const TextArea2 = styled.div`
position: absolute;
top: 171%;
  left: 27%;
  transform: translateX(-50%);
  width:160px;
`
const TextArea3 = styled.div`
position: absolute;
top: 145%;
  left: 76%;
  transform: translateX(-50%);
  width:170px;
`
const Text = styled.p`

font-family: Archivo;
font-size: 25px;
font-weight: 500;
line-height: 29px;
letter-spacing: 0em;
text-align: left;

`
const Text2 = styled.p`
font-family: Archivo;
font-size: 12px;
font-weight: 500;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
margin-top: -24px;

`


function Foundation() {
    return (
      <SectionContainer>
        <Heading>
             FOUNDATION OF OUR WORK
        </Heading>
        <Image src="https://s3-alpha-sig.figma.com/img/4412/672c/caf10c05aa4d9ffda0c47c535127642d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kK0klTfxUcxGvh35hPNdEX~nREifN~PKI7T5nlzyRikcPOSbpvGzMSmYEC4ZUuzlKwuVz~~tD1L5K~enH~oaBxqsM-4Qq3U3mHtD-ubuSv7RGWW1LFa3tHuSDfTMWmmDpzrc~JFKAZfPVxLqN5BxAhqrx0IkAL-I~M~hjN8T4TJ4j2vEQP2QXxmA-mRnN-COHeAB0j-3kJB8MX0wjA6vL4zw9P7RMSl7KJ-f1xHfEzHs14f4fMLEbG7ZMfa7J-AGzsGiqVm-WHWQTJGUm4wKI73oRXDtKto-Xp9U9TAyexUtzXc-agLON~jMjJ0YaklvYoNidHzojFfR3QvPqqHyxA__" />
       <TextArea1>
       <Text>
       Functionality
       </Text>
       <Text2>Designs that serve a purpose</Text2>
       </TextArea1>
       
       <TextArea2>
       <Text>
       Simplicity
       </Text>
       <Text2>Complexity surfaced only when necessary</Text2>
       </TextArea2>

       <TextArea3>
       <Text>
       Emotion
       </Text>
       <Text2>Products with a character & solutions optimized for emotion</Text2>
       </TextArea3>
        
      </SectionContainer>
    );
  }
  
  export default Foundation;