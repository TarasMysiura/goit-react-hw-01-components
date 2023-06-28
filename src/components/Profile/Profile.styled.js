import styled from 'styled-components';

export const Card = styled.div`
  display: block;

  background-color: lightgray;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 550px;
  padding: 100px;
  align-items: center;
`;

export const ProfileStyle = styled.div`
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

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  border: 1px gray solid;
`;

export const Avatar = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  border: 1px gray solid;
`;

export const Name = styled.p`
  font-family: 'Roboto', sans-serif;
  color: black;
  font-size: 32px;
  font-weight: 700;
`;

export const Tag = styled.p`
  font-family: 'Roboto', sans-serif;
  color: grey;
  font-size: 24px;
  font-weight: 500;
`;

export const Location = styled.p`
  font-family: 'Roboto', sans-serif;
  color: grey;
  font-size: 24px;
  font-weight: 600;
`;

export const Stats = styled.ul`
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

export const Label = styled.div`
  font-family: 'Roboto', sans-serif;
  color: gray;
  font-size: 20px;
  font-weight: 500;
`;

export const Quantity = styled.div`
  font-family: 'Roboto', sans-serif;
  color: black;
  font-size: 24px;
  font-weight: 700;
`;
