import React, { Component } from "react";
import '../App.css';
import styled from "styled-components";

function Square(props){
    return (
        <div>
        <h2> {props.komponen}</h2>
            <p>{props.email} </p> 
            <p>{props.nim}</p>
        </div> 
    );
}
export default class CompAndProps extends Component{ render(){
const bgColor = {
backgroundColor: this.props.bgColor
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.bgColor};
`;

const UserInfo = styled.div`
  background-color: ${(props) => props.bgColor};
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const UserName = styled.h2`
  font-size: 24px;
  color: #333;
`;

const UserEmail = styled.p`
  font-size: 16px;
  color: #555;
`;

const UserNim = styled.p`
  font-size: 16px;
  color: #555;
`;

return (
    <Wrapper bgColor={this.props.bgColor}>
      <UserInfo style={bgColor}>
        <UserName>Ahmad Asroruddin</UserName>
        <UserNim>21120120140132</UserNim>
        <UserEmail>asroruddinahmad09@gmail.com</UserEmail>
      
      </UserInfo>

      <UserInfo style={bgColor}>
        <UserName>Reindrow Owen Simangunsong</UserName>
        <UserNim>21120120140169</UserNim>
        <UserEmail>reindrowajja@gmail.com</UserEmail>
        
      </UserInfo>

      <UserInfo style={bgColor}>
        <UserName>Raffi anggaraksa</UserName>
        <UserNim>21120120120018</UserNim>
        <UserEmail>rafi.batam2002@gmail.com</UserEmail>
      </UserInfo>

      <UserInfo style={bgColor}>
        <UserName>Audi Alvan Fikri</UserName>
        <UserNim>21120120140095</UserNim>
        <UserEmail>Alvanaudi@gmail.com</UserEmail>
      </UserInfo>
    </Wrapper>
  );
} 
}