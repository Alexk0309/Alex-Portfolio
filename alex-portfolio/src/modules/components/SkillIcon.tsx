import styled from "styled-components";
import { FC } from "react";

interface SkillIconProps {
    img: string;
}

const SkillIcon: FC<SkillIconProps>= (props) => {
    const {img} = props;
  return (
    <SkillIconContainer>
      <SkillsIconContainer>
        <SkillIconImg src={img} />
      </SkillsIconContainer>
    </SkillIconContainer>
  );
};

export default SkillIcon;

const SkillsIconContainer = styled.div``;

const SkillIconImg = styled.img`
  width: 70px;
`;

const SkillIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background-color: #ffffff;
  border-radius: 20px;
`;
