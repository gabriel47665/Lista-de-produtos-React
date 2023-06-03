import styled from "styled-components";

export const Container = styled.div`
    width: 350px;
    height: 600px;
    margin: 50px auto;
    border-radius: 16px;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.208);
    padding: 0px;
    position: relative;
    background-color: #EDEDED;
`;

export const ContainerScroll = styled.div`
    width: 100%;
    height: calc(100% - 132px);
    overflow: auto;
    position: absolute;
    bottom: 16px;
    left: 0px;
    padding: 16px;
`;

export const Header = styled.header`
    padding: 16px;
    background-color: blueviolet;
    border-radius: 16px 16px 0 0;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    gap: 6px;
    &.list-item{
        margin-bottom: 6px;
        border-radius: 5px;
        box-shadow: 0 2px 10px #00000015;
        background-color: white;
    }
`;

export const TextInput = styled.input`
    height: 46px;
    border: 2px solid #C4C4C4;
    border-radius: 5px;
    padding-left: 16px;
    outline: none;
    &.w100{
        flex: 1;
    }
    &:focus{
        border-color: #6720aa;
    }
`;

export const Button = styled.button`
    background-color: blueviolet;
    width: 46px;
    height: 46px;
    text-align: center;
    color: #FFF;
    font-size: 24px;
    border: 2px solid white;
    border-radius: 5px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition-duration: 300ms;
    &.outlined{
        border: 2px solid white;
        color: blueviolet;
        background-color: transparent;
    }
    &.rounded{
        border-radius: 100%;
    }
    &:hover{
        background-color: #6720aa;
    }
`;

export const TextH4 = styled.h4`
    line-height: 46px;
    flex: 1;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 10px;
`;