import styled from "styled-components";
import { Colors } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Card = styled.div`
  background-color: ${Colors.gray};
  border-radius: 8px;
  padding: 8px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`;
