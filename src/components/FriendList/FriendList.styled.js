import styled from 'styled-components';

export const FriendsUl = styled.ul`
  padding-top: 50px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const Li = styled.li`
  margin-bottom: 20px;
  display: flex;
  padding-left: 30px;
  gap: 30px;
  width: 500px;
  height: 200px;
  background-color: #f8f1ee;
  border: 1px gray solid;
  align-items: center;
  border-radius: 20px;

  box-shadow: 1px 1px 2px 3px #999;
`;

export const StatusSpan = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px gray solid;
`;

export const AvatarImg = styled.img`
  display: flex;
  gap: 10px;
  width: 150px;
  height: 150px;
  background-color: #f8f1ee;
  border: 1px gray solid;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const NameP = styled.p`
  font-family: 'Roboto', sans-serif;
  color: black;
  font-size: 48px;
  font-weight: 700;
`;
