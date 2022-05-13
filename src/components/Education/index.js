import '../../App.css';
import Card from 'react-bootstrap/Card'
import { IoIosSchool } from 'react-icons/io';
import { FaUniversity } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Educations } from '../../utils/Educations';
import "./index.css"

const Education= () => {
  return (
    <div id="5">
    <Card className='section'>
        <Card.Body>
        <div className='title-section'>
              <IoIosSchool className='educationicon' size={'25px'} />
              <h4 className='title'>Education</h4>
            </div>
          
            {Educations.map((val,index)=>
            <div className='education_list' key={index} style={{  borderBottom:Educations.length-1===index?null:' 1px solid #dddbda'}}>
                <div className='university_icon_section'>
                <FaUniversity color={'silver'} size={'40px'} />
                </div>
                <div className='university_title_section'>
                <div className='university_title_bold'>{val.title}</div>
                <div className='normal_text'>{val.education}</div>
                <div className='normal_text'>{val.year}</div>
                </div>              
              </div>
            )}
            </Card.Body>
        </Card>
        </div>
  );
}

export default Education;
