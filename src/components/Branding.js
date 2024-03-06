import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 8.125rem;
  margin-left: 8.125rem;
  margin-top: -10px;
  color: #fff;
`;

const LeftHalf = styled.div`
  flex: 0.42;
`;

const RightHalf = styled.div`
  flex: 0.58;
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
  margin-left: 130px;
  margin-top: 50px;
  color: #fff;
`;

const titleStyle = {
  fontFamily: "Archivo",
  fontSize: "32px",
  fontWeight: "500",
  lineHeight: "42px",
  letterSpacing: "-1px",
  textAlign: "left",
  color: "#F5F5F5",
};

const textStyle = {
  fontFamily: "Archivo",
  fontSize: "16px",
  fontWeight: "300",
  lineHeight: "26px",
  letterSpacing: "1px",
  textAlign: "left",
  color: "#D0D0D0",
};
const CardStyle = {
  backgroundColor: "#292D32",
  height: "30rem",
  borderRadius: "32px",
  width: "22.5rem",
};
const cardBodyStyle = {
  display: "flex",
  padding: "2rem",
  flexDirection: "column",
  justifyContent: "flex-end",
  height: "26.5rem",
};
function Branding() {
  return (
    <>
      <Text>Imagine & Design</Text>

      <SectionContainer>
        <LeftHalf>
          <Paragraph>
            From brand development to captivating user experiences, we
            specialize in turning concepts into compelling realities.
          </Paragraph>
        </LeftHalf>
        <RightHalf>
          <Heading>WE CREATE </Heading>
          <Heading1>EXPERIENCES</Heading1>
        </RightHalf>
      </SectionContainer>
      <div
        style={{
          display: "flex",

          justifyContent: "space-between",
          marginLeft: "8.125rem",
          marginRight: "8.125rem",
          marginTop: "3rem",
        }}
      >
        <Card style={CardStyle}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body style={cardBodyStyle}>
            <Card.Title style={titleStyle}>DESIGN</Card.Title>
            <Card.Text style={textStyle}>
              A passion for design that leaves a lasting impact with your
              audience.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={CardStyle}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body style={cardBodyStyle}>
            <Card.Title style={titleStyle}>BRANDING</Card.Title>
            <Card.Text style={textStyle}>
              The art of shaping perceptions, emotions, and experiences.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={CardStyle}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body style={cardBodyStyle}>
            <Card.Title style={titleStyle}>SEO</Card.Title>
            <Card.Text style={textStyle}>
              Showcasing the core features and improving your idea's visibility
              and performance
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Branding;
