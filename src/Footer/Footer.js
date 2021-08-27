import React from 'react'
import { Icon } from 'semantic-ui-react'
import './Footer.css'
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<div className='footercontent'>
          <Box>
	          <Container>
		          <Row>
		               <Column>
                              <div className='footer1'>
			<Heading>My Account</Heading>
			<FooterLink href="#">My Orders</FooterLink>
			<FooterLink href="#">My Addresses</FooterLink>
			<FooterLink href="#">My Vouchers</FooterLink>
               </div>
		</Column>
		<Column>
			<Heading>Support</Heading>
			<FooterLink href="#">Legal</FooterLink>
			<FooterLink href="#">FAQ's</FooterLink>
			<FooterLink href="#">Terms and Conditions</FooterLink>
			<FooterLink href="#">Cancellation Policy</FooterLink>
		</Column>
		<Column>
			<Heading>Information</Heading>
			<FooterLink href="#">About Us</FooterLink>
			<FooterLink href="#">Careers</FooterLink>
			<FooterLink href="#">Our Story</FooterLink>
			<FooterLink href="#">Unsubscribe promotional SMS/Email</FooterLink>
			<FooterLink href="#">Blog</FooterLink>
		</Column>
		<Column>
			<Heading>Menu</Heading>
			<FooterLink href="#">On The Menu</FooterLink>
			<FooterLink href="#">Plan & Pricing</FooterLink>
			<FooterLink href="#">How It Works</FooterLink>
			<FooterLink href="#">Reviews</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">
			<Icon name='phone'/>
				<span style={{ marginLeft: "10px" }}>
				Call Us Now : 07395816325
				</span>
			</FooterLink>
			<FooterLink href="#">
			<Icon name='whatsapp'/>
				<span style={{ marginLeft: "10px" }}>
				+91 7395816325
				</span>
			</FooterLink>
			<FooterLink href="#">
			<Icon name='mail'/>
				<span style={{ marginLeft: "10px" }}>
				support@juzmeal.com
				</span>
			</FooterLink>
			<FooterLink href="#">
			<h5>FSSAI:</h5>
			</FooterLink>
               <Row>
                    <Column>
			<FooterLink href="#">
               <Icon name='facebook'/>
			</FooterLink></Column>
                    <Column>
			<FooterLink href="#">
               <Icon name='twitter'/>
			</FooterLink></Column>
                    <Column>
			<FooterLink href="#">
			<Icon name='instagram'/>
			</FooterLink></Column>
                    <Column>
			<FooterLink href="#">
			<Icon name='linkedin'/>
			</FooterLink></Column>
               </Row>
		</Column>
		</Row>
	</Container>
	</Box></div>
);
};
export default Footer;

// class Footer extends React.Component{
//      constructor(){
//           super()
//           this.state={

//           }
//      }
//      render(){
//           return(
//                <div className='mainfootercontainer'>
//                     <div className = 'footercontainer'>
//                          <div className = 'footercontainer1'>
//                               <h5>My Account</h5>
//                               <p>My orders</p>
//                               <p>My Addresses</p>
//                               <p>My vouchers</p>
//                          </div>
//                          <div className = 'footercontainer2'>
//                               <h5>Support</h5>
//                               <p>Legal</p>
//                               <p>FAQ</p>
//                               <p>Terms and Conditions</p>
//                               <p>Cancellation policy</p>
//                          </div>
//                          <div className = 'footercontainer3'>
//                               <h5>Information</h5>
//                               <p>About us</p>
//                               <p>Careers</p>
//                               <p>Our Story</p>
//                               <p>Unsubscribe promotional SMS/Email</p>
//                               <p>Blog</p>
//                          </div>
//                          <div className = 'footercontainer3'>
//                               <h5>Menu</h5>
//                               <p>On the Menu</p>
//                               <p>plan & pricing</p>
//                               <p>Homechef Specials</p>
//                               <p>How it works</p>
//                               <p>Recipes</p>
//                               <p>Reviews</p>
//                               <p>Download App</p>
//                          </div>
//                          <div className = 'footercontainer4'>
//                               <h5>Contact-Us</h5>
//                               <p><Icon name='phone'/>call us now : 07395816325</p>
//                               <p><Icon name='whatsapp'/>+91 7395816325</p>
//                               <p><Icon name='mail'/>support@juzmeal.com</p>
//                               <h5>FSSAI:</h5>
//                               <div>
//                                    <Icon name='facebook'/>
//                                    <Icon name='twitter'/>
//                                    <Icon name='instagram'/>
//                                    <Icon name='linkedin'/>
//                               </div>
//                          </div>
//                     </div>
//                </div>
//           )
//      }
// }
// export default Footer;