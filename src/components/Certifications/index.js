import '../../App.css';
import Card from 'react-bootstrap/Card'
import { FaAward } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CertificatesList } from '../../utils/CertificatesList';
import'./index.css'

const Certifications = () => {
  return (
    <Card className='section'>
      <Card.Body>
        <div className='title-section'>
          <FaAward className='icon' size={'25px'} />
          <h4 className='title'>Certifications</h4>
        </div>

        {CertificatesList.map((val,index)=>
            <div className='certificate_list' key={index} style={{borderBottom:CertificatesList.length-1===index?null:' 1px solid #dddbda'}}>
                <div className='university_icon_section'>
                <FaAward color={'#daa520'} size={'40px'} />
                </div>
                <div className='university_title_section'>
                <div className='university_title_bold'>{val.title}</div>
                <div className='normal_text'>{val.awarder}</div>
                <div className='normal_text'>{val.date}</div>
                <div className='normal_text'>{val.summary}</div>
                </div>              
              </div>
            )}
      </Card.Body>
    </Card>
  );
}

export default Certifications;