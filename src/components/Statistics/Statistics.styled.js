import styled from 'styled-components';

export const CardDiv = styled.div`
  display: block;

  background-color: lightgray;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 550px;
  padding: 100px;
  align-items: center;
`;

export const StatisticsStyleSection = styled.section`
  background-color: white;

  width: 450px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleH2 = styled.h2`
  text-transform: uppercase;
  color: rgb(112, 112, 112);
  align-self: center;
`;
export const ListUl = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 100px;
  background-color: #f8f1ee;
  border: 1px gray solid;
  justify-content: center;
  align-items: center;
`;

export const LabelSpan = styled.span`
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 20px;
  font-weight: 500;
`;

export const PercentageSpan = styled.span`
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 24px;
  font-weight: 700;
`;
