import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
`;
const Text = styled.div`
  font-family: Archivo;
  font-size: 12px;
  font-weight: 300;
  line-height: 22px;
  letter-spacing: 8px;
  text-align: center;

  color: #fff;
`;
const Heading1 = styled.span`
  font-family: Archivo;
  font-size: 50px;
  font-weight: 500;
  line-height: 58px;
  letter-spacing: -1px;

  color: #fff;
`;
const Heading2 = styled.span`
  font-family: Archivo;
  font-size: 50px;
  font-style: italic;
  font-weight: 100;
  line-height: 58px;
  letter-spacing: -1px;

  color: #82e8f2;
`;
const SectionHeading = styled.div``;
const Section = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;

`;
const Section1 = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  width: 788.55px;
  height: 300px;
//   padding: 60px 60px 45px 61px;
  border-radius: 30px;
  border: 0px 0px 0px 1px;
  background: #292d32;
 

`;
const TextReview = styled.p`
font-family: Archivo;
font-size: 16px;
font-weight: 300;
line-height: 26px;
letter-spacing: 1px;
text-align: left;
padding-left: 30px;
color:#D0D0D0;
width: 532px;
height: 78px;


`
const Section2 = styled.div`

justify-content: center;
align-items: center;
width: 240.2px;
height: 300px;
padding: 127px 26.91px 127px 32.91px;
gap: 8px;

`
const Section3 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 84px;
height: 300px;
border-radius: 10px;
background: #292D32;
margin-right: 10px;
color: #fff;


`
const Section4 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 300px;
border-radius: 10px;
background: #292D32;
color: #fff;


`
const Plus =styled.p`
font-family: Archivo;
font-size: 25px;
font-weight: 300;
line-height: 25px;
letter-spacing: 0em;
text-align: center;

`

const Testimonials = () => {
  return (
    <div>
      <SectionContainer>
        <Text>Testimonials</Text>
        <SectionHeading>
          <Heading1>Client </Heading1>
          <Heading2>Reviews </Heading2>
        </SectionHeading>

        <Section>
          <Section1>
            <img
              src="https://s3-alpha-sig.figma.com/img/73f1/2070/14a2f910099bd1d64c961777d33e58d0?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=im1RVTa0I3MA41it0nleyf5lh6CdIWkQk8ijNliMRzagWFfeYRoH6gL-gdXQtDan58Qoem3bzc4Rve8yrgJOeaNaU7zUs6iSK4jyJquynrm2qV8p-yO5rGUrtrz2f3j-NNW4552nv2Im7unvsDNBoQLQ6JnPmeKcVmmSxvTIcG6IzEqfRO~1tgTMy~RS5s3sMD7eyFEjcxz04S8VqASfofSvWNVGkoCz1A-HjUBrvqN5deKo4EKa3jR7VU72n4poRT6B0nUg8BSArIbHhxvoRDv3-DoFki9-5hFNlempM-p46NVa1Ht~ZkwFzNH~Dg4EgshzbS~PuHUWpD-a7mQyQg__"
              style={{ width: "100px", height: "100px", borderRadius: "100px" }}

            />
            <TextReview>Collaborating with Reset Digital has been a fantastic journey.
 They simplified the creative process remarkably and offered pricing 
that was fair and competitive.</TextReview>
          </Section1>
          <Section2>
            <Text style={{color:"#292D32"}}>JAMES BLACK</Text>
            <Text style={{color:"##82E8F2"}}>CLIENT REVIEW</Text>

          </Section2>
          

          <Section3>
          <Plus>+</Plus>
          </Section3>
          <Section4>
          <Plus>+</Plus>
          </Section4>
        </Section>
      </SectionContainer>
    </div>
  );
};

export default Testimonials;
