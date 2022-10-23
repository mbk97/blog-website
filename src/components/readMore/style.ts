import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 3rem;
`

export const ReadMoreWrapper = styled.div`
width: 846px;

@media (max-width:900px) {
width: 80%;
}
`

export const ReadMoreUserDetails = styled.div`
margin: 1rem 0 4rem;
`



export const ReadMoreSmallText = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 200;
font-size: 20px;
line-height: 25px;
color: #A5A5A5;
`

export const  ReadMoreContentText = styled.p`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 40px;
color: #FFFFFF;

::first-letter{
    font-size: 4rem;
    text-transform: uppercase;
}

@media (max-width:470px){
}
`