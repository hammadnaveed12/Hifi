import React, { useRef,useEffect } from "react";
import styled from "styled-components";


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
const Section = styled.div`
display: flex;
align-items: center;
justify-content: center;

`

function Projects() {
    const containerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
          if (containerRef.current) {
            containerRef.current.scrollBy({
              left: 200, 
              behavior: "smooth",
            });
            if (
                containerRef.current.scrollLeft + containerRef.current.clientWidth >=
                containerRef.current.scrollWidth
              ) {
                containerRef.current.scrollLeft = 0;
              }
          }
        }, 4000); // Adjust the interval (in milliseconds) as needed
    
        return () => clearInterval(interval);
      }, []);
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

      <Section>
      <div style={{ overflow: "hidden", position: "relative",marginLeft:'8.1725rem',marginRight:'8.1725rem' }}>
      <div
        ref={containerRef}
        style={{
          width: "100%",
          display: "flex",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          transition: "transform 0.3s ease",
        }}
      >
        {data.map((item) => (
          <Container key={item.id} item={item} />
        ))}
      </div>
    
    </div>

      </Section>
      
    </>
  );
}
const Container = ({ item }) => {
    return (
      <div style={{ height: "480px", width: "640px", margin: "16px"}}>
        <div style={{ backgroundImage: `url(${item.img})`,
        backgroundSize: "cover", // Adjust to your preference
        backgroundRepeat: "no-repeat",height: "480px", width: "640px",borderRadius:'20px'}}>
          <text>{item.tag1}</text>
          <text>{item.tag2}</text>
        </div>
      </div>
    );
  };
  const data = [
    { id: 1,
     img:"https://s3-alpha-sig.figma.com/img/561a/92ac/63065dd3746a051b1c220938a87df80a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJvo4hGzVXWh4W0oBKiJZYZXn8uIxtJeIWrzBEF~izvE4eEY6bmQ~kfP4POMY1oribCf~jMPnZQkfbYxMTHU95zckfFPD9WcQSbbBRctwuxHpR2L84~QApHuLd3sCTmG10GP2Q7r700r~PO8op2IcujH5TORaDSGpcVh7kEIvLwjVT5d-oSOaKf68zB8KMBpHW~93hJcIf5vF057c4IQrkdLrvnrm0JObSI--ux3ZdXZZfB1VMhhgvksMJcR0sf-vqllyXEbkqcLZ0hwEkrd9rxjQ-WQFRab2gSAh7rv7YEyym3WGiTO6~eWgeKFxDY0B1Mgx6Zn812rqfTWZBJKqA__",
    tag1:"Branding",
    tag2:"Design",
    heading:"Innovative Design Portfolio",
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{ id: 2,
    img:"https://s3-alpha-sig.figma.com/img/52be/be10/e5da25ca96a19c368538253de2fb38dc?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UiP9AFBQqKN6YNJeihXIoI~x2ThjMuoXGUx6c5Gxe~MTnS79O3lTbWFRJVVJtoMLfZV4WqMIj8UDmyb63yNNkPZthDiQk~183xF7Tp8TIG6fKHykrtSEVluz32r9dctpfJV9OFmDoPxHH4mhb03sbkiMRpH7FejJ-aB2m0~gO32jLUp-3y1-H3ojzfkHxqhFUrzYMMISiHIVvNTwhf3HGhfKID-SCWg53TBI02mLIBaWDB0zZxlOSbMxv1lZCu6FPdCQ5CzT4BCg24sdo8oztIs5KCI07ve9EhA3o1gfBIkxSU48xCeBnR-YyZDptPvsE~KJVat4CCEmFZTk5C4wcg__"
    ,tag1:"Marketing",
   tag2:"Prototype",
   heading:"Innovative Design Portfolio",
   text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{ id: 3,
img:"https://s3-alpha-sig.figma.com/img/c9a2/4006/15b6670bab0396789dba05b2cf755a90?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EACL5tJdtXAzGEUq~OrFfPBDo-8g9prAEOuVks5MEctCm9tCxSZrBwCTXiIlkLh8mqF2fzUr8eMzwidq6uktvBUcSzz1aj9HjGctQiQDzRy4fIqnVUnxlyQ3OZwOdohzyoSFN~S9f~1CDT5ZpvIKhoUhw42xLWNFKMjYIgfQCwbXu26Eh2avm~mTC5nyy44M58hNJTyO-e7pigbcZQ6qd51X8bpxdTWqixQuihwDQv6jBoD56AKVy0WXAgrx~relgzhak7GcAmxim~omOrw1-W~BinpvIlwKjd4Z7FqkTf92TMOW51AT3DL7-KW~q3uF-hVPLDw7xV~7HMAF4ZSqMg__",
   tag1:"Branding",
   tag2:"Design",
   heading:"Innovative Design Portfolio",
   text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
    
  ];
    

export default Projects;
