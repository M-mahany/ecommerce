import React from 'react';
import { BiSearchAlt , BiCartAlt} from "react-icons/bi";
import styled from 'styled-components';
import { mobile } from '../responsive';


 const Container = styled.div`
     height: 60px;
     ${mobile({height:"60px"})}
     `;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
align-items:center;
${mobile({padding:"10px 0px"})}
`;
const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`;
const Center = styled.div`
    text-align: center;
    flex: 1;
    ${mobile({marginLeft:"5px"})}
`;
const Right = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent:"center", flex:"2"})}
`;
const Language = styled.span`
    padding: 5px;
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    margin-left: 25px;
    padding: 5px;
    display:flex;
    align-items:center;
    ${mobile({marginLeft:"12px"})}
`;
const Input = styled.input`
    border: none;
    ${mobile({width:"55px"})}
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}
`;
const MenuItem = styled.div`
margin-left: 25px;
    font-size: 14px;
    cursor: pointer;
    ${mobile({fontSize:"12px",marginLeft:"10px"})}
`;

const Navbar = () => {

    return ( 
        <Container>
            <Wrapper>


                <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    <Input placeholder='Serach'/>
                        <BiSearchAlt className='cartIcon'/>
                    </SearchContainer>
                </Left>

                <Center>
                <Logo>
                    FlexDev.
                </Logo>
                </Center>

                <Right>

                <MenuItem>
           REGISTER 
                </MenuItem>
                <MenuItem className='menuItem'>
              SIGN IN 
                </MenuItem>
            
            <MenuItem>
                <button type="button" className="btn position-relative">
                    
                <BiCartAlt style={{fontSize:"26px"}}/>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary">
                        4
                </span>
                
                </button>
            </MenuItem>
            

                </Right>

            </Wrapper> 
        </Container>
     );
}
 
export default Navbar;