import styled from "styled-components";

export const Container = styled.div`
    width: 350px;
    height: 600px;
    margin: 20px auto;
    border-radius: 8px;
    box-shadow: 0 5px 25px #00000035;
    padding: 16px;
    position: relative;
`;

export const ContainerScroll = styled.div`
    width: calc(100% - 32px);
    height: calc(100% - 120px);
    overflow: auto;
    position: absolute;
    bottom: 16px;
    left: 16px;
`;

export const Row = styled.div`
    width: 100%;
    display: flex;
    gap: 6px;
    margin-bottom: 26px;
    &.list-item{
        margin-bottom: 6px;
        border-radius: 5px;
        box-shadow: 0 2px 10px #00000015;
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
        border-color: blueviolet;
    }
`;

export const Button = styled.button`
    background-color: blueviolet;
    width: 46px;
    height: 46px;
    text-align: center;
    color: #FFF;
    font-size: 24px;
    border: 0;
    border-radius: 5px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    &.outlined{
        border: none; //2px solid blueviolet
        color: blueviolet;
        background-color: transparent;
    }
    &.rounded{
        border-radius: 100%;
    }
`;

export const TextH4 = styled.h4`
    line-height: 46px;
    flex: 1;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 10px;
`;