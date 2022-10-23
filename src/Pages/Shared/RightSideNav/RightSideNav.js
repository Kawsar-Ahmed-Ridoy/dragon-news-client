import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {

  const {providerLogin} = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error))
  }
    return (
        <div>
             <ButtonGroup vertical>
      <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle/> Login with Google</Button>
      <Button className='mb-2' variant="outline-dark"> <FaGithub/> Login with Github</Button>
    </ButtonGroup>

    <div className="mt-4">
    <h5>Find us on</h5>
    <ListGroup>
      <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaWhatsapp/> WhatsApp</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
      <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    </div>
        <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;