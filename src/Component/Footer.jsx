import styled from "styled-components";
import Github from "/images/github.svg";
import FaceBook from "/images/facebook.svg";

const FooterDiv = styled.div.attrs({
  className:
    "text-[#607B96] flex justify-between px-4 border-t-2 border-[#1E2D3D] font-fira",
})``;

const SubDiv = styled.div.attrs({
  className: "border-r-2 border-[#1E2D3D] p-2 cursor-pointer",
})``;

export default function Footer() {
  return (
    <FooterDiv>
      <div className="flex w-5/12">
        <SubDiv>find me in:</SubDiv>
        <SubDiv>
          <img src={FaceBook} alt="facebook-logo" />
        </SubDiv>
        <SubDiv>
          <img src={FaceBook} alt="insta-logo" />
        </SubDiv>
      </div>
      <div className="flex w-1/12 border-l-2 border-[#1E2D3D] p-2 text-center">
        <span className="flex">
          @sanket17 <img src={Github} alt="github_logo" />
        </span>
      </div>
    </FooterDiv>
  );
}
