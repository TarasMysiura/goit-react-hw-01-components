import styled from 'styled-components';

export const CardDiv = styled.div`
  display: block;

  background-color: grey;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 550px;
  padding: 100px;
  align-items: center;
`;

export const ProfileStyleDiv = styled.div`
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

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;
// export const Box = styled.div`
//   position: relative;
//   overflow: hidden;
//   width: 300px;
//   height: 300px;
//   border-radius: 150px;
//   border: 1px gray solid;
// `;

export const AvatarImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  border: 1px gray solid;
`;

export const NameP = styled.p`
  font-family: 'Roboto', sans-serif;
  color: black;
  font-size: 32px;
  font-weight: 700;
`;

export const TagP = styled.p`
  font-family: 'Roboto', sans-serif;
  color: grey;
  font-size: 24px;
  font-weight: 500;
`;

export const LocationP = styled.p`
  font-family: 'Roboto', sans-serif;
  color: grey;
  font-size: 24px;
  font-weight: 600;
`;

export const StatsUl = styled.ul`
  margin-top: 30px;
  display: flex;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(100% / 3);
  height: 150px;
  background-color: #f8f1ee;
  border: 1px gray solid;
  justify-content: center;
  align-items: center;
`;

export const LabelSpan = styled.span`
  font-family: 'Roboto', sans-serif;
  color: gray;
  font-size: 20px;
  font-weight: 500;
`;

export const QuantitySpan = styled.span`
  font-family: 'Roboto', sans-serif;
  color: black;
  font-size: 24px;
  font-weight: 700;
`;
