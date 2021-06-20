import styled from "styled-components";

const StyledContactsList = styled.div`
  display: block;
  padding: 20px;
  --height: 30px;
  &>div{
    display: inline-block;
    padding: 0 15px;
    border-right: 1px dashed ${props=>props.theme.colors.textBlue};
    vertical-align: middle;
    &:last-child{
      border: none;
    }
    & a{
      display: block;
      height: var(--height);
      font-weight: 700;
      font-size: 18px;
      color: ${props=>props.theme.colors.textDark};
      transition: .3s;
      vertical-align: middle;
      & svg{
        display: inline-block;
        margin-right: 20px;
        width: 30px;
        height: 30px;
        & use{
          fill:${props => props.theme.colors.textDark};
          transition: .3s;
        }
      }
      &:hover{
        color: ${props=>props.theme.colors.textBlue};
        & svg use{
          fill:${props => props.theme.colors.textBlue};
        }
      }
      &:nth-child(1){
        margin-bottom: 10px;
      }
    }
    & span{
      display: block;
      height: var(--height);
      font-weight: 600;
      font-size: 12px;
      color: ${props=>props.theme.colors.textDark};
      vertical-align: middle;
    }
  }
`;

export default StyledContactsList;