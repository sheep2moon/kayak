import React from 'react';
import styled from 'styled-components';
import { BsPeopleFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';

const CanoePicker = ({ pickedCanoes, setPickedCanoes }) => {
  const handleAddCanoe = () => {
    setPickedCanoes([...pickedCanoes, 1]);
  };
  const handleDeleteCanoe = (index) => {
    let newCanoes = [...pickedCanoes];
    newCanoes.splice(index, 1);
    setPickedCanoes(newCanoes);
  };
  const handleCanoeTypeSwitch = (type, index) => {
    let newCanoes = [...pickedCanoes];
    newCanoes[index] = type;
    setPickedCanoes(newCanoes);
  };
  return (
    <CanoePickerContainer>
      <ColumnNames>
        <span></span>
        <p>20zł</p>
        <p>30zł</p>
        <span></span>
      </ColumnNames>
      {pickedCanoes.map((canoe, index) => (
        <CanoeWrap>
          <p>{index + 1}</p>
          <CanoeType
            isChecked={canoe === 1 ? 1 : 0}
            onClick={() => handleCanoeTypeSwitch(1, index)}
          >
            <PersonIcon />
            <p>1-osobowy</p>
          </CanoeType>
          <CanoeType
            isChecked={canoe === 2 ? 1 : 0}
            onClick={() => handleCanoeTypeSwitch(2, index)}
          >
            <PeopleIcon />
            <p>2-osobowy</p>
          </CanoeType>
          <DeleteBtn onClick={() => handleDeleteCanoe(index)}>X</DeleteBtn>
        </CanoeWrap>
      ))}
      <AddCanoeButton onClick={handleAddCanoe}>+</AddCanoeButton>
    </CanoePickerContainer>
  );
};

export default CanoePicker;

const CanoePickerContainer = styled.div``;
const ColumnNames = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
  color: ${({ theme }) => theme.primaryDark};
  margin-bottom: -2px;
  > p {
    font-size: 1.2em;
    text-align: center;
  }
`;
const CanoeWrap = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr 1fr 0.1fr;
  margin: 2px 0;
  > p {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
  }
`;
const CanoeType = styled.div`
  border: ${({ theme }) => `1px solid ${theme.primaryDark}`};
  padding: 0.5em 0.5em;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ isChecked, theme }) =>
    isChecked ? theme.secondaryLight : '#fff'};
`;

const PersonIcon = styled(BsFillPersonFill)`
  width: 2em;
`;
const PeopleIcon = styled(BsPeopleFill)`
  width: 2em;
`;

const DeleteBtn = styled.button`
  background-color: ${({ theme }) => theme.primaryDark};
  border: none;
  border-radius: 0;
  color: ${({ theme }) => theme.primaryLight};
  cursor: pointer;
`;
const AddCanoeButton = styled.button`
  width: 100%;
  font-size: 2em;
  border: none;
  margin-top: 2px;
  :hover {
    cursor: pointer;
    outline: ${({ theme }) => `1px solid ${theme.primaryDark}`};
  }
`;
