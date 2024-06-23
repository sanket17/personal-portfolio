import styled from "styled-components";

const HeaderDiv = styled.div.attrs({
  className:
    "text-[#607B96] flex justify-between px-4 border-b-2 border-[#1E2D3D] font-fira h-[50px]",
})``;

const FirstSubDiv = styled.div.attrs({
  className: "border-r-2 border-[#1E2D3D] text-center py-2 w-2/12",
})``;

export default function Header() {
  return (
    <HeaderDiv className="font-fira">
      <div className="w-5/12 flex justify-between">
        <FirstSubDiv className="w-4/12">sanket-tikam</FirstSubDiv>
        <FirstSubDiv>_hello</FirstSubDiv>
        <FirstSubDiv>_about-me</FirstSubDiv>
        <FirstSubDiv>_projects</FirstSubDiv>
      </div>
      <div className="w-1/12 border-l-2 border-[#1E2D3D] text-center py-2">
        _contact-me
      </div>
    </HeaderDiv>
  );
}
