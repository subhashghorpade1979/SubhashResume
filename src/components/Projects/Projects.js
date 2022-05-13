import Card from 'react-bootstrap/Card'
import { FaFlagCheckered } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import { Project } from '../../utils/Project';
import './index.css'
const Projects = () => {

  const technology = (technology) => {
    return (
      <ol className='technology slds-list_horizontal slds-wrap '>
        {(technology||[]).map((item,index) =>
          <li className='slds-p-around_xx-small' key={index}><div className='slds-theme_success'>{item}</div></li>
        )}
      </ol>
    )
  }
  return (
    <Card className='section'>
      <Card.Body>
        <div className='title-section'>
          <FaFlagCheckered className='icon' size={'25px'} style={{ padding: '5px' }} />
          <h4 className='title'>Projects</h4>
        </div>
        {Project.map((item,index) =>
          <div className='project-card' key={index}>
            <div className='col-lg-9'>
            <a target="_blank" href={item.website} className='slds-text-title_bold'>{item.projectName}</a>
            <div className='col-lg-3 mobile_project-card_date'>
            <p className='project-date'>{item.date}</p>
            </div>
            <div className='location'>
            <TiLocation  size={'20px'} color={'#706e6b'}/>
            <div className='normal_text'>{item.location}</div>
            </div>
            <div className='normal_text'>{item.summary}</div>
              {technology(item.technology)} 
            </div>
            <div className='col-lg-3 project-card_date'>
            <p className='project-date'>{item.date}</p>
            </div>          
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Projects;