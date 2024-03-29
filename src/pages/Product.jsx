import React from 'react';
import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import styled from 'styled-components';
import Announcement from '../components/Annoncement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
display:flex;
padding:50px;
${mobile({padding:"10px", flexDirection:"column"})}
`;
const ImgContainer = styled.div`
flex:1;
`;

const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({height:"40vh"})}
`;

const InfoContainer = styled.div`
flex:1;
padding: 0px 50px;
${mobile({padding:"0 10px"})}
`;

const Title = styled.h1`
font-weight:300;
`;

const Desc = styled.p`
margin-top:20px;
`;

const Price = styled.span`
font-weight:200;
font-size:40px;
`;

const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
width:50%;
margin:30px 0px;
${mobile({width:"100%"})}
`;

const Filter = styled.div`
display:flex;
justify-content:center;
align-items:center;
`;

const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`;

const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props=>props.color};
margin:0px 5px;
cursor:pointer;
`;

const FilterSize = styled.select`
margin-left:10px;
padding:5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:50%;
${mobile({width:"100%"})}
`;

const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
`;

const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border: 1px solid teal;
display:flex;
justify-content:center;
align-items:center;
margin:0px 5px;
`;

const Button = styled.button`
padding:15px;
border:2.5px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;

&:hover{
    background-color:#f8f4f4;
}
`;

const Product = () => {
    return (
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <ImgContainer>
            <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
              iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
              tristique tortor pretium ut. Curabitur elit justo, consequat id
              condimentum ac, volutpat ornare.
            </Desc>
            <Price>$ 20</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <IoMdRemove />
                <Amount>1</Amount>
                <IoMdAdd />
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    );
  };
  
  export default Product;
  