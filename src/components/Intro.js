import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 130px;
  margin-left: 130px;
  padding: 24px 0 80px 0;
  color: #fff;
`;

const LeftHalf = styled.div`
  flex: 1;
  padding-right: 80px;
  margin-top: -50px;
`;

const RightHalf = styled.div`
  flex: 1;
  padding-left: 10px;
`;

const Heading = styled.h2`
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 800;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: left;
  width: 500px;
`;

const Paragraph = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  //margin-top: 30px;
  margin-bottom: 50px;
  width: 400px;
  color: #82e8f2;
`;

const Button = styled.button`
  background-color: #82e8f280;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.1px;
  text-align: center;
  border: 1px solid #786dff4d; /* Specify border color and width */
  color: #fff;
  width: 140.61px;
  height: 38px;
  border-radius: 4px;
`;

const Image = styled.img`
  width: 517px;
  height: 536px;
  top: 72.66px;
  left: 285.11px;
  border-radius: 258.5px;
  angle: 0 deg;
`;

const Para = styled.p`
  font-family: Archivo;
  font-size: 20px;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 1px;
  text-align: left;
  color: #d0d0d0;
  width: 520px;
`;

const Box = styled.div`
  width: 400px;
  align-items: left;
`;

function Intro() {
  return (
    <SectionContainer>
      <LeftHalf>
        <Box>
          <hr style={{ width: "24px", height: "2px", background: "#82E8F2",marginLeft:'0px' }} />
          
          <Heading>
            Reset Digital, your premier Toronto-based web consultancy firm.
          </Heading>
          <Paragraph>
            A leading web consultancy firm specializing in crafting exquisite
            website designs and impactful branding solutions since 2023
          </Paragraph>
        </Box>
        <Button>VIEW OUR WORK</Button>
        <Para>
          An innovative consultancy firm committed to transforming your ideas
          into reality, seamlessly blending - creativity with purpose.
        </Para>
      </LeftHalf>
      <RightHalf>
        <Image
          src="https://s3-alpha-sig.figma.com/img/2d1e/ce7d/c9868be375adcd1924b33f10611c218d?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k4IHQ1rUo2pJSpjVlJ8zUU5KIlbmZHe5MjGLbVphL36VC5p3eTixan0Ar7LiSJFT~mCLERRhCtQ3IRj9~DOAjYatUGQ4X006PC7gTQls3BSuH4JSIBM1zhDMySZzJmF8PRVx9xShHtbssxxf7hEPBwgPEz4Hci1l9qm5-050dXpej4gVn~hSdyn-GMlDEzDqgymzaU9egdnK46Qz6CgLRpUm7fyFu9IPHYwD15wFcCPw72dItu0Kr-eXKy~U6S8RBJ2-mN-h6Zrdatjdcx2OSvaVrJmurD93Pn79aBmKrJtOc4BztJfyG3D1ce9krx0CfuCmNqLQklKmES97Vs5Ukw__"
          alt="Image Description"
        />
      </RightHalf>
      

    </SectionContainer>

  );
}

export default Intro;
