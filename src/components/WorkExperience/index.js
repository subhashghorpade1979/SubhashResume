import '../../App.css';
import Card from 'react-bootstrap/Card'
import { FaAward } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Work } from '../../utils/Work';
import { BsBuilding } from 'react-icons/bs';
import { TiLocation } from 'react-icons/ti';
import './index.css'


const WorkExperience = () => {
  const highlights=(item)=>{
return(
  <ol className='hightlight'>
  {item.highlights.map((val)=>
  <li className='normal_text hightlight_item'>{val}</li>
  )}
  </ol>
)
  }
  return (
    <Card className='section'>
      <Card.Body>
        <div className='title-section'>
          <FaAward className='icon' size={'25px'} />
          <h4 className='title'>Work</h4>
        </div>
        <div className='normal_text'>Please contact me if you want a PDF version of my CV.</div>
        {(Work||[]).map((item,index)=>
        //    <div>
        //    <div className='title' style={{marginLeft:0}}>{item.position}</div>
        //   <div className='company_section'>
        //   <BsBuilding size={'15px'} color={'#706e6b'} style={{marginRight:8}}/>
        //   <div className='normal_text'>{item.company}</div>
        //   </div>
        //   <div className='company_section'>
        //   <TiLocation size={'20px'} color={'#706e6b'} style={{marginRight:8}}/>
        //   <div className='normal_text'>{item.location}</div>
        //   </div>
        //  {highlights(item)}
        //    </div>
        <div className='project-card' key={index}>
            <div className='col-lg-9'>
            {/* <a target="_blank" className='slds-text-title_bold'>{item.position}</a> */}
            <div className='title' style={{marginLeft:0}}>{item.position}</div>
            
            <div className='col-lg-3 mobile_project-card_date'>
            <p className='project-date'>{item.startDate}-{item.endDate}</p>
            </div>
            <div className='location'>
            <BsBuilding  size={'20px'} color={'#706e6b'} style={{marginRight:8}}/>
            <div className='normal_text'>{item.company}</div>
            </div>
            <div className='location'>
            <TiLocation  size={'20px'} color={'#706e6b'} style={{marginRight:8}}/>
            <div className='normal_text'>{item.location}</div>
            </div>           
              {highlights(item)} 
            </div>
            <div className='col-lg-3 project-card_date'>
            <p className='project-date'>{item.startDate}-{item.endDate}</p>
            </div>          
          </div>
        )}
     
      </Card.Body>
    </Card>
  );
}

export default WorkExperience;