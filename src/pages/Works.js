import React, { useEffect, useState } from 'react';
import '../css/Works.css';

//icomoon
import Icon from "../assets/IcoMoon/Icon";
import { Link } from 'react-router-dom';


//mui
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

import Slider from "react-slick";
import '../css/slick.css';
import '../css/slick-theme.css';

// import $ from 'jquery';
// import { useRef } from 'react';


// import SemiLogo from '../assets/project/semi/PigPick_icon_gitpage.png';
// import FinalLogo from '../assets/project/final/TRIP_US_LOGO-BLACK.png';
import { valHooks } from 'jquery';

const Works = () => {

    const project = {
        pigPick: {
            card: [{
                // mainLogo:SemiLogo,
                projectSize:'3',
                projectTerm:'2022.05.16 ~ 2022.06.03',
                thumnail: 'TripUs.mp4',
                projectName: 'PigPick',
                projectSkill: ['JSP', 'JQuery', 'AJAX', 'SPRINGBOOT', 'MYSQL', 'AWS RDS'],
                caption: '사용자의 취향을 고려하여 메뉴를 추천해주는 웹 프로젝트 입니다. 식사 시간이 다가오면 메뉴 선정으로 인하여 많은 고민이 있는 사람들을 위하여 기획을 하게 되었습니다.',
                myPart:' Project Service Manage & Publishing FrontEnd Dev ',
                myProgress:'55%',
                detail:[{
                        contribute:'**** 메인기능에대한 서술남기기****, JSP를 이용하여 만든 사용자의 취향을 고려하여 메뉴를 추천해주는 팀 프로젝트입니다. MYSQL을 사용하여 Amazon RDS 서비스를 활용하여  DB를 접근하게 하여 데이터를 통신하였고, Ajax를 이용해 비동기적으로 통신하여 Back-end로부터 데이터 CRUD 합니다.',
                        link:[
                                {name:'Github',iconName:'github',link:'https://github.com/ddanddanChoonsik/SemiProject'},
                                {name:'Figma',iconName:'figma',link:'https://www.figma.com/file/HlBKLForwz4Zu5Caop3Xko/Pig-Pick?type=design&node-id=0-1&mode=design'},
                                {name:'Notion',iconName:'notion',link:'https://www.notion.so/Pig-Pick-f5c6b3f01dde4aa3baf368ba898bd774?pvs=4'}
                            ],
                    }]
            }]
        },
        tripUs: {
            card: [{
                // mainLogo:FinalLogo,
                projectSize:'6',
                projectTerm:'2022.06.24 ~ 2022.07.29',
                thumnail: 'TripUs.mp4',
                projectName: 'Trip:Us',
                projectSkill: ['REACT', 'JAVASCRIPT', 'AXIOS', 'SPRINGBOOT', 'MYSQL', 'AWS RDS'],
                caption: '국내 여행 계획·공유 웹 프로젝트 입니다. 장기화된 코로나 펜데믹 현상으로 인해 외부 활동이 제한되어 힘들어하던 사람들을 위하여 그 마음을 위로하고자 국내 여행 계획 · 공유 프로젝트를 주제로 선정하게 되었습니다.',
                myPart:'Full-Stack Dev/ PlaceInfo',
                detail:[{
              
                contribute:'**** 메인기능에대한 서술남기기****, **** 프로젝트에대한 기술 **** ',
                link:[
                    {name:'Github',iconName:'github',link:''},
                    {name:'Figma',iconName:'figma',link:''},
                    {name:'Notion',iconName:'notion',link:''}
                     ],

                 }],
            }],
           
        },
        youthPolicy: {
            card: [{
                // mainLogo:FinalLogo,
                projectSize:'3',
                projectTerm:'2023.03.30 ~ 2023.10.16',
                thumnail: 'TripUs.mp4',
                projectName: 'YouthPolicy',
                projectSkill: ['REACT', 'JAVASCRIPT', 'SPRINGBOOT', 'AWS RDS'],
                caption: '청년정책 공유 웹 프로젝트입니다.',
                myPart:'Full-Stack Dev',
                detail:[{
                        contribute:'**** 메인기능에대한 서술남기기****, **** 프로젝트에대한 기술 **** ',
                        link:[
                            {name:'Github',iconName:'github',link:''},
                            {name:'Figma',iconName:'figma',link:''},
                            {name:'Notion',iconName:'notion',link:''}
                        ],
            }],
         }],
        },
        portFolio: {
            card: [{
                // mainLogo:FinalLogo,
                projectSize:'1',
                projectTerm:'2022.09.02 ~ 2022.10.16',
                thumnail: 'TripUs.mp4',
                projectName: 'ProtFolio',
                projectSkill: ['REACT', 'JAVASCRIPT', 'HTML', 'CSS', 'jQuery'],
                caption: 'GithubIO를 활용한 개인 프로젝트 포트폴리오 홈페이지입니다.',
                myPart:'PM',
                detail:[{
                        contribute:'**** 메인기능에대한 서술남기기****, **** 프로젝트에대한 기술 **** ',
                        link:[
                            {name:'Github',iconName:'github',link:''},
                            {name:'Figma',iconName:'figma',link:''},
                            {name:'Notion',iconName:'notion',link:''}
                        ],
        
                    }],
            }],
        }
    }

    /* 더보기 모달*/
    // const [open, setOpen] = useState(false);
    // const handleOpen = (e) => {
    //     setData(e);
    //     console.log("e:",e);
    //     setOpen(true);
    // }
    // const [data,setData] =useState([]);
    // const handleClose = () => setOpen(false);

    /*모달 */
    // const style = {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     bgcolor: 'background.paper',
    //     // border: '2px solid #000',
    //     boxShadow: 24,
    //     p: 4,
    // };

    /* x */

    //   let slide = setInterval(()=>{
    //     thumFirstImg==thumEndImg?thumFirstImg=0 :thumFirstImg++;
    //     $('.ani').animate({left:-100*thumFirstImg+'%'},400)

    // },2000)

    const settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };



    useEffect(() => {
        console.log("Projcet Array;", project);
        //{Object.keys(project).map(n=>{Object.values(project[n]).map(v=>console.log(`${Object.keys(project[n])}:`,v))})}
        // console.log("pigpick:",Object.keys(project['pigPick']));
        // console.log("pigpick:",Object.values(project['pigPick']['detail']))
    }, [])

    return (
        <div className='work'>

            <div style={{textAlign:'center'}}>
                <h2>Project</h2>
                </div>
            <div className='work_container'>

                <Slider {...settings}>
                    {Object.keys(project).map(name => (
                    <>
                    {Object.values(project[name]).map(item=>( 
                    <>
                    {item.map(val=>(
                        // onClick={(e)=>handleOpen(val.detail)}
                         <div className='project' >         
                         <div className='project_thumnail'>
                              <video src={`${process.env.PUBLIC_URL}/assets/thumNail/${val.thumnail}`} controls autoPlay></video>
                         </div>

                         <div className='project_index'>
                                <div className='project_header'>
                                    {/* <img src={val.mainLogo} alt={val.projectName}/> */}
                                    <div className='project_name'>
                                        {val.projectName}
                                        </div>
                                    <div className='project_join'>
                                        <i class="fa-solid fa-user" ></i>&nbsp;<span>{val.projectSize}</span>&nbsp;
                                    </div>
                                </div>

                                <div className='project_body'>
                                    <div className='project_term'>
                                    <span>{val.projectTerm}</span>
                                    </div>
                                <div className='project_skill'>
                                    {(val.projectSkill).map(data=>(
                                        <div className='skill_name'>{data}</div>
                                        ))}
                                </div>
                                <div className='project_caption'>
                                    <div className='caption'>{val.caption}</div>
                                </div>
   
                                <div className='contribute'>
                                <div className='bar'></div>&nbsp; MyPart {val.myPart}
                                </div>
                                </div>
                         </div>
                      </div>

                         ))}
                        </>

                     ))}
                        </>
                    ))}
                </Slider>

            </div>



            {/* <div className='project_wrap'>

              {Object.keys(project).map(name=>(
                <div className='project_index' key={name}> 

                     {Object.values(project[name]).map(item=>( 
                        <>
                        {console.log("item:",...item)}
                        
                        {item.map(val=>(
                            <div className='project' onClick={thumHandleOpen}> 
                                <div className='project_header'>
                                    {val.projectName}
                                </div>
                                <div className='project_thumnail'>
                                     <video src={val.thumnail} controls autoPlay loop width='90%' height='auto'></video>
                                </div>
                                <div className='project_body'>
                                <div className='project_skill'>
                                    {(val.projectSkill).map(test=>(
                                        <div className='skill_name'>{test}</div>
                                        ))}
                                </div>
                                <div className='project_caption'>
                                    <span>{val.caption}</span>
                                </div>
                                </div>
                        </div>
                        ))}
                        </>
                     ))}                
                </div>
                 ))}
                </div> */}


            {/* 더보기 모달 */}

            {/* <Modal
                open={open}
                onClose={handleClose}
                // getData={data}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='database_modal'>
                    <img src={SemiErd} alt="database" />
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        PigPick-DB ERD
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        기본 DB Table 틀을 잡기위해 dbdiagram.io 라는 사이트를 활용하여 기본키 설정 및 외래키를 연결하였으며<br />
                        그후 MYSQL을 사용하여 Amazon RDS 서비스 활용하여 데이터를 배포하였습니다.

                        구현내용
                        사용자가 원하는 카테고리를 선택시 메뉴 랜덤 추천하기
                        사용자 위치 기반으로 반경 1km 이내의 식당 리스트 출력하기
                        식당에 관한 리뷰 작성 및 리뷰 확인하기
                        식당 찜하기(식당 좋아요 기능)
                        사용자가 가장 많이 먹은 음식 메뉴 ,작성한 리뷰, 찜한 식당 확인하기
                    </Typography>
                </Box>
            </Modal> */}

        </div>
    );
};

export default Works;