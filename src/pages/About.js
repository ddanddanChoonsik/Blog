import React from 'react';
import '../css/About.css';
import Character1 from '../assets/bgImg/github_main_character1.png';
import Icon from "../assets/IcoMoon/Icon";

const About = () => {
    return (
        <div className='about'>
           
            <div className='intro'>
            <h1>Introduce</h1> 
                <p>I'M...</p>
            </div>

           {/* <div className='character'>
                 <img src={Character1} alt='캐릭터적용' className='main_character'/> 
            </div>*/}

            <div className='about_content'>
            <div className='about_content_item'>

                <div className='about_item'>
                    <div className='about_icon'>
                        <Icon size={50} icon="magic"/>
                    </div>
                    <div className='about_data'>
                    <h3>UI/UX 개선에 관심이 많습니다</h3>
                    <p>사용자가 서비스를 이용하면서 편리함을 추구 할 수 있도록 하며,
                        프로젝트에 대한 전체적인 조화로운지에 대하여 고민하며 개발하려 합니다.
                    </p>
                    </div>
                </div>

                <div className='about_item'>
                <div className='about_icon'>
                 <Icon size={50} icon="gears"/>
                 </div>
                 <div className='about_data'>
                    <h3>다양한 서비스에 기술 융화를 시키는 것에 대하여 관심이 많습니다</h3>
                    <p>다양한 실제 서비스들을 WEB & APP 에 접목시키는 것에 대한 고민과,
                        그에 필요한 기술이 무엇이 있을지 찾아보며 관심을 가지고 학습하려 합니다.
                    </p>
                    </div>
                </div>

                <div className='about_item'>
                <div className='about_icon'>
                  <Icon size={50} icon="comments" />
                  </div>
                  <div className='about_data'>
                    <h3>커뮤니케이션을 하며 피드백을 받고 개선점을 찾는걸 좋아합니다.</h3>
                    <p> 프로젝트 및 학습에 대한 더 나은 개선점을 다른사람과 커뮤니케이션을 하며
                        보다 더 나은 개섬점과 알맞는 학습법을 찾고자 노력합니다.
                    </p>
                    </div>
                </div>
                </div>

               
            </div>
            {/* </div> */}
        </div>
    );
};

export default About;