import styled from "styled-components";

export const Header = styled.div`
    margin: 8px;
    box-shadow: 0 0 6px #c9c9c9;
    border-width: 2px;
    border-color: #00A1F1;
    border-style: solid;
    border-radius: 6px;
    background-color: #00A1F1;
    height: 40px;

    justify-content: flex-start;
    align-items: center;
    
    div{
      color: #fff;
      margin-right: 2vh;
      float: right;
      margin-top: 3px;
    }


    button{
      font-weight: bold;
      font-size: medium;
      height: 4vh;
      width: 8vh;
      border-color: #EA4335;
      background-color: #EA4335;
    }
`

export const MenuPrincipal = styled.div`
  box-shadow: 0 0 6px #c9c9c9;
  border-color: #FFF;
  border-style: solid;
  border-radius: 6px;
  height: 88vh;
  width: 80%;
  margin: 4px 10px 0px 2px;
  float: right;
  display: inline;
  background-color: #FFF;
`

export const Sidebar = styled.div`
  box-shadow: 0 0 6px #c9c9c9;
  border-color: #FFF;
  border-style: solid;
  float: right;
  border-radius: 6px;
  height: 88vh;
  width: 17%;
  margin: 4px 0px 0px 12px;
  display: inline;
  float: left;
  background-color: #FFF;
`
export const Container = styled.div`
`;

export const H2 = styled.h2`
  border-radius: 6px;
  text-align: center;
  color: #7d7d7d;
  border-width: 1px;
  border-color: #c9c9c9;
  background-color: #f5f5f5;
  border-style: solid none;
;
`

export const H3 = styled.h3`
  border-width: 1px;
  border-radius: 2px;
  border-color: #c9c9c9;
  border-style: solid none none;
  font-size: 25px;
  margin-top: 6px;
  margin-left: 2px;
  color: #7d7d7d;
  padding-top: 2px;
  padding-left: 5px;
`

export const Forms = styled.form`
  margin-top: 10vh;
  border-width: 1px;
  border-radius: 2px;
  border-color: #c9c9c9;
  border-style: solid none none;
  
  input{
    margin-top: 6px;
    width: 26vh;
    height: 28px;
    border: 1px solid #ddd;
    text-align: center;
  }
  button{
    margin-left: 3px;
    font-size: 16px;
    width: 5vh;
    height: 30px;
    border: 0;
    border-radius: 2px;
  }
`

export const Form = styled.form`
  margin: 2vh 0 0 4vh;
  border-width: 1px;
  border-radius: 2px;
  background-color: #fff;
  width: 30vh;
  height: 20%;
  border-color: #c9c9c9;
  border-style: solid none none;
  box-shadow: 0 0 6px #c9c9c9;
  z-index: 1;
  position: fixed;
  bottom: 20%;
  right: 32px;

  input{
    margin: 6px;
    width: 28vh;
    height: 36px;
    border: 1px solid #ddd;
    text-align: center;
    font-size: 20px;
  }

  button{
    margin-left: 6px;
    font-size: 16px;
    width: 28vh;
    height: 40px;
    border: 0;
    border-radius: 2px;
  }
`

export const Button = styled.button`
  font-size: 25px;
  background: #fbbc05;
  color: #fff;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 60px;
  border: 1;
  border-color: #fff;
  right: 32px;
`
export const Img = styled.img`
  position: absolute;
  top: 30%; /* posiciona na metade da tela */
  margin-left: 30%;
`
