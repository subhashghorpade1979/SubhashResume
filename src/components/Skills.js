import '../App.css';
import Card from 'react-bootstrap/Card'
import { BsFillPersonFill, BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import { BiCheck } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css';
import {WorkflowList ,LanguagesAndTools}from '../utils/Skills'


const Skills = () => {
    return (
        <Card className='section'>
            <Card.Body>
                <div className='title-section'>
                    <BsFillPersonFill className='skillicon' size={'25px'} />
                    <h4 className='title'>Skills</h4>
                </div>
                <div>
                    <h4 className='title slds-p-bottom_small'>Programming Languages & Tools</h4>
                    <div className='langandtools'>
                        {(LanguagesAndTools||[]).map((val,index)=>
                            <div key={index} className='skillCard'>
                               <div className='normal_text'>{val.title}</div>
                                <div>{val.icon}</div>
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <h4 className='title slds-p-bottom_small'>Workflow</h4>
                    {WorkflowList.map((val,index) =>
                        <div className='workflowlist' key={index}>
                            <BiCheck size={'25px'} color={'#027e46'} />
                            <span className='normal_text' style={{ marginLeft: '5px' }}>{val.title}</span>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default Skills;
