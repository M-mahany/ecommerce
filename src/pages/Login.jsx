import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
    ),

url("https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg?w=2000") 
center;
background-size:cover;
display:flex;
justify-content:center;
align-items:center;
`;
const Wrapper = styled.div`
padding:20px;
width:30%;
background-color:white;
${mobile({width:"85%"})}
`;

const Title = styled.h1`
font-size:24px;
font-weight:300;
`;

const Form = styled.form`
display:flex;
flex-direction: column;
`;

const Input = styled.input`
flex: 1;
min-width:40%;
padding:10px;
margin:10px 0px;
`;

const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
margin-bottom:10px;
margin-top: 10px;
&:disabled{
    color: green;
    cursor:not-allowed;
}
`;
/*const Error =styled.span`
color: red;
`;*/

const Link = styled.a`
margin:5px 0px;
font-size:16px;
text-decoration: underline;
cursor: pointer;
`;


const Login = () => {


    return ( 
<Container>
<Wrapper>
        <Title>SIGN IN</Title>
    <Form>
        <Input placeholder="Username" />
        <Input placeholder="Password" type="Password" />
        <Button>LOGIN</Button>
        <Link>Don't Remember Password?</Link>
        <Link>Create New Account</Link>
    </Form>
    </Wrapper>
</Container>

     );
}
 
export default Login;