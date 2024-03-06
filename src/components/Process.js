import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color:white;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 130px; /* Adjust the space between logos as needed */
`;

const LogoImage = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 10px; /* Adjust the space between image and text */
`;

const LogoText = styled.p`
font-family: Archivo;
font-size: 16px;
font-weight: 300;
line-height: 26px;
letter-spacing: 1px;
text-align: left;

`;


function Process() {
  return (
    <SectionContainer>
      <LogoWrapper>
        <LogoImage src="https://i.ibb.co/vv5GMT1/653bbc627f31f69f95e8f63e-Icon-1-svg.png" alt="Start" />
        <LogoText> START</LogoText>
      </LogoWrapper>
      <LogoWrapper>
        <LogoImage src="https://i.ibb.co/FWj6JdV/653bbc61cbe9639e1d9897d0-Icon-2-svg-fill.png" alt="Execute" />
        <LogoText> EXECUTE</LogoText>
      </LogoWrapper>
      <LogoWrapper>
        <LogoImage src="https://i.ibb.co/5Lkypz0/653bbc6207d0ab085c0fbec9-Icon-4-svg-fill.png" alt="Launch" />
        <LogoText> LAUNCH</LogoText>
      </LogoWrapper>
    </SectionContainer>
  );
}

export default Process;
