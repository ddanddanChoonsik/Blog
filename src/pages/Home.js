import React from 'react';
// import { Link } from "react-router-dom";
import Character1 from '../assets/bgImg/github_main_character1.png';
import '../css/Home.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

//icomoon
import Icon from "../assets/IcoMoon/Icon";



const Home = () => {


    return (
        <div className='home'>

        <div className='thema_after'>

            <div className='main_thema'>

            <div className='main_text_content'>

                <div className='main_title'>
                    {/* <h1>I'M</h1> */}
                    <h1 style={{fontWeight:'bold'}}>Siyeun's</h1>
                    <h1 style={{color:'#7673cc'}}>FE:Developer</h1>
                </div>

                <div className='sub_title'>
                    <p>프론트엔드 개발자를 목표로한 시연 포트폴리오 입니다</p>
                </div>

                <div className='subbar'>
                    <div className='icon_btn'>
                        <Icon size={30} icon="notion" className="icon" />
                        <p className='icon_name'>Notion</p>
                    </div>
                    <div className='icon_btn' onClick={() => { window.open("https://github.com/ddanddanChoonsik") }}>
                        <Icon size={30} icon="github" className="icon" />
                        <p className='icon_name'>Github</p>   
                    </div>

                </div>
               

            </div>

            <div className='main_img'>
                <img src={Character1} alt='캐릭터적용' className='main_character' />
                 {/*  <img src={Character3} alt='호버이미지' className='sub_character'/>*/} 
            </div> 
            
            </div>

          
            <div className='move_down'>
                <a href="#About">
                    <p>Scroll</p>
                    <KeyboardArrowDownIcon/>
                    </a>
            </div>
        
            </div>
        </div>
    );
};

export default Home;