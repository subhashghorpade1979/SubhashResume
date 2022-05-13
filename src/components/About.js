import '../App.css';
import Card from 'react-bootstrap/Card'
import { BsFillPersonFill, BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { AboutProfile } from '../utils/AboutProfile';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <Card className='section'>
      <Card.Body>
        <div className='title-section'>
          <BsFillPersonFill className='icon' size={'25px'} />
          <h4 className='title'>{AboutProfile.name}</h4>
        </div>
        <div className='mobile_slds-grid_vertical-align-center'>
              <span className='slds-avatar_xlarge'><img src={require('../assets/Subhash.jpg')} /></span>
        </div>
        <p className='subtitle'>{AboutProfile.label}</p>
        {AboutProfile.summary.map((item,index)=>
                <p className='normal_text' key={index}>{item.paragraph}</p>
        )}
          <div className='icon-section'>
          <div className='circle_icon'><IoIosMail size={'22px'} color='white' /></div>
          <div className='circle_icon'><BsLinkedin size={'15px'} color='white' /></div>
          <div className='circle_icon'><BsTwitter size={'20px'} color='white' /></div>
          <div className='circle_icon'>
            <BsGithub size={'22px'} color='white' />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default About;
