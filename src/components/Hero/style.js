import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { colors } from "../../style/colors";
import { fonts, typography } from "../../style/typography";

export const HeroWrapper = styled.div`
  background-color: #232323;
  width: 100%;
  scroll-behavior: smooth;
  color: #fff;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.img});
`;

export const HeroContainer = styled.div`
  background-color: rgba(11, 37, 69, 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeroSearchBar = styled(motion.form)`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  height: 72px;
  width: 65%;
  background-color: ${colors.white};
  color: ${colors.grays.dark};
  border-radius: 8px;
  padding: 0.5rem 1rem;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

export const InputHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  border-right: 1px solid ${colors.grays.light};
  margin-left: 4px;
  position: relative;
`;

export const InputLabelHero = styled.label`
  width: 95%;
  border: none;
  box-sizing: border-box;
  color: ${colors.grays.dark}
  font-family: ${fonts.secondary};
  ${typography.others.overline}
  ${typography.weight[400]}
`;

export const InputHero = styled.input`
  width: 95%;
  border: none;
  padding: 0.35rem 0;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const SugestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.white};
  z-index: 1;
  position: absolute;
  margin-top: 60px;
  border-radius: 0 0 8px 8px;
`;

export const SugestionsItem = styled.div`
  width: 100%;
  border: none;
  box-sizing: border-box;
  color: ${colors.grays.dark}
  font-family: ${fonts.secondary};
  ${typography.body.xs}
  ${typography.weight[400]}
  cursor: pointer;
  &:hover {
    background-color: ${colors.blues.dark};
    color: ${colors.white};
  }
`;
