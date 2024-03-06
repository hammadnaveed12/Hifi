import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
    align-items: center;
  margin-right: 7.125rem;
  margin-left: 7.125rem;
  margin-top: 50px;
  color: #fff;
`;

const LeftHalf = styled.div`
  flex: 0.7;
  width:100%;
  
  
  
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
const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
    margin-right:16rem;
    margin-left: 16rem;
`;

const Image = styled.img`
width: 128px;
height: 64px;

`;


function GreatBrands() {
  return (
    <>
    

      <SectionContainer>
        <LeftHalf>
        <Heading>Trusted By</Heading>
          <Heading1> Great Brands</Heading1>
        </LeftHalf>
        <RightHalf>
            <Text>OUR CLIENTS</Text>
        <Paragraph>
        The client is paramount, and we prioritize dedicated support for our clients. Welcome to the forefront of exceptional service at Reset Digital.
          </Paragraph>
          
        </RightHalf>
      </SectionContainer>

      <ImagesContainer>
      <Image src="https://s3-alpha-sig.figma.com/img/5743/2a37/67e90abef77f7cbace64afba845acd59?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FV6AgmUh9RUq7PV4rtn3DXhfTzdqJXLsZyz8up-Jiel7Um19DKWXjY6Urs5BGz2L2tBpm6AtXMbgcMooqwqjgs8Pw9JsLpV3jpdh6Cl3c40ZkbxEOqFFtUqZ1uKTzYgmlBtH5lhj6kI9NRAn4h8uTeHpHaT~fRd-baMpmUZQ1H99lL7GTh8YxzkEYH3yOH82ImQ~m4rFin96wedJuHKwTGWhfzkskwIjIebd9~O-LvIU77CESZgBEhmX3ZALnjpMXjzwsx5sJbm74wDVcoUAn142BW7aElkZDKZBN5Zc9c9ELNzA-P8MMTK46LikGfI9hRcOTmFDUOomtwi6C4Jn4g__" alt="Image 1" />
      <Image src="https://s3-alpha-sig.figma.com/img/1704/55ad/e399c7b5742eda4867c06719215d954b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FnUjFIDt0gFn8ixIU3RwTqLVSgfi1niSaipSAn8jYCY7b8cIIHIuYscfzPm-kxxAKKsSG4rRNX-oTrm2KsQVbLzOh9eJx069kYN5ugDthQBESxeX8ZImV7Dvwk0NdHJ7GGjWcp-qikAZ22RdNz~zHV0uSxuOhfNlqsdKXCkcbspbVYQakqIvm42fwYjneIS0acgrDeMMwIB4fLSz8bfRC5RK8q6O83sWbLjewpsLgW4c-3UStTEPW8JJpux15u1MYuT9en5IExKF1andDDbHmvQdMqDWf-YK5-iTfLq1kxdMNDv~1PcbYa0FdYPKgzMT-XVQqJB4kGrp9OMssmfiGw__" alt="Image 2" />
      <Image src="https://s3-alpha-sig.figma.com/img/ac13/8b57/ab2f752502d35044fce2e81cb56ce368?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mAiHrqtDKhDO0-IvYGlXbQWAfx3-IEbbqqhDBy5~1FWZKajRETo02obc5JkHrGyshN3~JVw~P2V0gJ9x5lmA6F8Paomv8uRG5qikd-2gyyXJlg2S0yd-1LPRT4EsAvaZY~igP-arY5E4yQC043G-vL34xwErajd2cntwUVGKwL~SdAOryK9PH3bKyUhV9E8jQllQ8-JQPmbvA0ikpVgaVlKodc5545mopPwyAiryGw6xNPeWZ~73c0MIixZmqFQb1IcRdwqFF20FaxDxKXPNAfELkXZqdUtZf7izB8NCezr~XDZHRHrvsu4MkrQeegni59XDfoT07-T5UwEKnI12vw__" alt="Image 3" />
      <Image src="https://s3-alpha-sig.figma.com/img/a945/5138/31e2ed6db72c0d660e114edd722cdfba?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G6DjpE4Qsq0Dd3o9yKA8MP8lysFzHPN1JgCJhE5j4OBrbXFZb72eQtVoyJ6CQcNX8ePRF-rh~kGsQnGB4DLv1IEQ2lEnKsglLjGMtuPwsfykIT8bXJR8qfdcjnKUOtkw00EqPU3q4OETmFlWeUPJyFhxO43GfHgwMVWTX6ztH2x5iMwfqrrJVuDeJ9TXD9R5gUSJCO6vVc4crUkl9VeI9734DVrO2fbise5SdrOOouc7N2a7rSccdwq0rmiUP9BPceHSz9H7Xo8jRaSKGjCKtZrI58bDwCjXLuo~CH3QlENFLgUmzcP3mKduFv2ATPLF3HpxDWu4ni1~jcKenhKlbQ__" alt="Image 4" />
    </ImagesContainer>
    <ImagesContainer>
      <Image src="https://s3-alpha-sig.figma.com/img/5743/2a37/67e90abef77f7cbace64afba845acd59?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FV6AgmUh9RUq7PV4rtn3DXhfTzdqJXLsZyz8up-Jiel7Um19DKWXjY6Urs5BGz2L2tBpm6AtXMbgcMooqwqjgs8Pw9JsLpV3jpdh6Cl3c40ZkbxEOqFFtUqZ1uKTzYgmlBtH5lhj6kI9NRAn4h8uTeHpHaT~fRd-baMpmUZQ1H99lL7GTh8YxzkEYH3yOH82ImQ~m4rFin96wedJuHKwTGWhfzkskwIjIebd9~O-LvIU77CESZgBEhmX3ZALnjpMXjzwsx5sJbm74wDVcoUAn142BW7aElkZDKZBN5Zc9c9ELNzA-P8MMTK46LikGfI9hRcOTmFDUOomtwi6C4Jn4g__" alt="Image 1" />
      <Image src="https://s3-alpha-sig.figma.com/img/1704/55ad/e399c7b5742eda4867c06719215d954b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FnUjFIDt0gFn8ixIU3RwTqLVSgfi1niSaipSAn8jYCY7b8cIIHIuYscfzPm-kxxAKKsSG4rRNX-oTrm2KsQVbLzOh9eJx069kYN5ugDthQBESxeX8ZImV7Dvwk0NdHJ7GGjWcp-qikAZ22RdNz~zHV0uSxuOhfNlqsdKXCkcbspbVYQakqIvm42fwYjneIS0acgrDeMMwIB4fLSz8bfRC5RK8q6O83sWbLjewpsLgW4c-3UStTEPW8JJpux15u1MYuT9en5IExKF1andDDbHmvQdMqDWf-YK5-iTfLq1kxdMNDv~1PcbYa0FdYPKgzMT-XVQqJB4kGrp9OMssmfiGw__" alt="Image 2" />
      <Image src="https://s3-alpha-sig.figma.com/img/ac13/8b57/ab2f752502d35044fce2e81cb56ce368?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mAiHrqtDKhDO0-IvYGlXbQWAfx3-IEbbqqhDBy5~1FWZKajRETo02obc5JkHrGyshN3~JVw~P2V0gJ9x5lmA6F8Paomv8uRG5qikd-2gyyXJlg2S0yd-1LPRT4EsAvaZY~igP-arY5E4yQC043G-vL34xwErajd2cntwUVGKwL~SdAOryK9PH3bKyUhV9E8jQllQ8-JQPmbvA0ikpVgaVlKodc5545mopPwyAiryGw6xNPeWZ~73c0MIixZmqFQb1IcRdwqFF20FaxDxKXPNAfELkXZqdUtZf7izB8NCezr~XDZHRHrvsu4MkrQeegni59XDfoT07-T5UwEKnI12vw__" alt="Image 3" />
      <Image src="https://s3-alpha-sig.figma.com/img/a945/5138/31e2ed6db72c0d660e114edd722cdfba?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G6DjpE4Qsq0Dd3o9yKA8MP8lysFzHPN1JgCJhE5j4OBrbXFZb72eQtVoyJ6CQcNX8ePRF-rh~kGsQnGB4DLv1IEQ2lEnKsglLjGMtuPwsfykIT8bXJR8qfdcjnKUOtkw00EqPU3q4OETmFlWeUPJyFhxO43GfHgwMVWTX6ztH2x5iMwfqrrJVuDeJ9TXD9R5gUSJCO6vVc4crUkl9VeI9734DVrO2fbise5SdrOOouc7N2a7rSccdwq0rmiUP9BPceHSz9H7Xo8jRaSKGjCKtZrI58bDwCjXLuo~CH3QlENFLgUmzcP3mKduFv2ATPLF3HpxDWu4ni1~jcKenhKlbQ__" alt="Image 4" />
    </ImagesContainer>
 
    </>
  );
}

export default GreatBrands;
