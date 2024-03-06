import React from "react";
import styled from "styled-components";
//import { Card } from "react-bootstrap";

const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 7.125rem;
  margin-left: 7.125rem;
  margin-top: 150px;
  color: #fff;
`;

const LeftHalf = styled.div`
  flex: 0.7;
  width: 100%;
`;

const RightHalf = styled.div`
  flex: 0.29;
`;

const Paragraph = styled.p`
  font-family: Archivo;
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 1px;
  text-align: left;
`;

const Heading = styled.span`
  font-family: Archivo;
  font-size: 50px;
  font-weight: 500;
  line-height: 58px;
  letter-spacing: -1px;
  text-align: left;
`;

const Heading1 = styled.span`
  font-family: Archivo;
  font-size: 50px;
  font-style: italic;
  font-weight: 100;
  line-height: 58px;
  letter-spacing: -1px;
  text-align: left;
  color: #82e8f2;
`;
const Text = styled.p`
  font-family: Archivo;
  font-size: 12px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 8px;
  text-align: left;

  margin-top: 50px;
  color: #fff;
`;


function Projects() {
  return (
    <>
      <SectionContainer>
        <LeftHalf>
          <Heading>Explore Our </Heading>
          <Heading1>Projects</Heading1>
        </LeftHalf>
        <RightHalf>
          <Text>Artistry & Functionality</Text>
          <Paragraph>
            Crafting unique, innovative solutions that transcend the ordinary.{" "}
          </Paragraph>
        </RightHalf>
      </SectionContainer>
      
    </>
  );
}

export default Projects;
