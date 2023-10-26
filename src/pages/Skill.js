import React, { useState } from 'react';
import '../css/Skill.css';
import Icon from "../assets/IcoMoon/Icon";
import $, { valHooks } from 'jquery';
import { useEffect } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';


const Skill = () => {

    const skillInfo={
     Frontend : {
        // icon:["fa-solid fa-desktop"],
        list: [
        { name: "Html", data: "웹 접근성 , 표준성을 준수하며 시멘틱태그를 이용해 마크업 할 수 있습니다.", iconName: 'html5' },
        { name: "CSS3", data: "display flex를 이용하여 다양한 스타일시트를 적용할수 있으며 반응형웹도 제작할 수 있습니다.", iconName: 'css3' },
        { name: "JavaScript", data: "JavaScript의 배열,객체,메소드 등을 이해하고 다양한 상황에 적용할 수 있으며 ECMAScript 최신버전인 ES6도 사용이 가능하여 간결한 코드와 생산성을 향상화 할 수 있습니다.", iconName: 'javascript' },
        { name: "jQuery", data: "애니메이션 및 여러 메소드를 활용할 수 있습니다", iconName: 'jquery' },
        { name: "React", data: "Hooks를 사용하여 범용적이고 재사용이 가능한 컴포넌트를 설계를 할 수 있습니다.", iconName: 'react' }
    ]
    },

    Backend : {
        // icon:["fa-solid fa-database"],
        // list:{
        //     framework: [
        //         { name: "SpringBoot", data: "MVC패턴으로한 비즈니스 로직을 구축할 수 있습니다.", iconName: 'spring' },
        //         { name: "Jsp", data: "JSP를 이용하여 동적컨텐츠를 만들 수 있고, CRUD 기능을 수행할 수 있습니다.", iconName: '' },
        //         { name: "Node.js / Express", data: "OPEN API를 불러올수 있으며, 화면에 데이터를 전달할 수 있습니다.", iconName: 'node-dot-js' },
        //         { name: "NodeMon", data: "nodemon을 활용하여 node express의 움직임을 확인하여 재시작없이 코드 자동반영을 시킬 수 있습니다.", iconName: 'nodemon' },
        //         { name: "Asp.net", data: "ado.net을 이용하여 DB와 연동을 시켜 데이터를 웹 브라우저에 띄울수있습니다.", iconName: '' }
        //     ],
        //     Database : [
        //         { name: "MySQL", data: "workbench를 이용해 mysql의 스키마 정의와 데이터들을 처리할 수 있습니다.", iconName: 'mysql' },
        //         { name: "MSSQL", data: "sql serever management studio를 이용해 MSSQL의 스키마 정의와 데이터들을 처리할 수 있습니다.", iconName: '' },
        //         { name: "Amazone RDS", data: "aws의 rds를 활용하여 db를 aws에 올려 배포할 수 있습니다.", iconName: 'amazonaws' }
        //     ]
        // }

        
        list:[
                { name: "SpringBoot", data: "MVC패턴으로한 비즈니스 로직을 구축할 수 있습니다.", iconName: 'spring' },
                { name: "Jsp", data: "JSP를 이용하여 동적컨텐츠를 만들 수 있고, CRUD 기능을 수행할 수 있습니다.", iconName: '' },
                { name: "Node.js / Express", data: "OPEN API를 불러올수 있으며, 화면에 데이터를 전달할 수 있습니다.", iconName: 'node-dot-js' },
                { name: "NodeMon", data: "nodemon을 활용하여 node express의 움직임을 확인하여 재시작없이 코드 자동반영을 시킬 수 있습니다.", iconName: 'nodemon' },
                { name: "Asp.net", data: "ado.net을 이용하여 DB와 연동을 시켜 데이터를 웹 브라우저에 띄울수있습니다.", iconName: '' },
                { name: "MySQL", data: "workbench를 이용해 mysql의 스키마 정의와 데이터들을 처리할 수 있습니다.", iconName: 'mysql' },
                { name: "MSSQL", data: "sql serever management studio를 이용해 MSSQL의 스키마 정의와 데이터들을 처리할 수 있습니다.", iconName: '' },
                { name: "Amazone RDS", data: "aws의 rds를 활용하여 db를 aws에 올려 배포할 수 있습니다.", iconName: 'amazonaws' }
        ]
    },
    
    Tools : {
        // icon:["fa-solid fa-screwdriver-wrench"],
    //     list:{ 
    //         ide:[
    //         { name: "VsCode", data: "주로 사용하는 IDE이며, 코딩에 편리한 확장프로그램들을 설치해 사용하고 있습니다.", iconName: 'visualstudiocode' },
    //         { name: "Eclipse", data: "JAVA언어로 코딩을 할때 주로 사용했었습니다.", iconName: 'eclipseide' },
    //         { name: "Visual Studio 2013", data: "ASP.NET을 활용한 WEB개발시 사용했었습니다.", iconName: 'visualstudio' },
    //         { name: "STS4", data: "JSP를 활용한 WEB개발시 사용했었습니다.", iconName: '' }
    //     ],
    //     etc:  [
    //         { name: "Github", data: "commit, push, pull, clone 등 git 명령어를 사용하여 레파지토리에 접근할 수 있습니다.", iconName: 'github' },
    //         { name: "Adobe PhotoShop", data: "다양한 효과 및 필터를 활용 등을 이용해 다양한 그래픽 요소를 제작할 수 있습니다.", iconName: 'adobephotoshop' },
    //         { name: "Adobe Illustrator", data: "펜툴을 활용하여 벡터 형식의 그래픽 요소를 디자인 할 수 있습니다.", iconName: 'adobeillustrator' },
    //         { name: "Figma", data: "프로젝트의 흐름 및 UI/UX 초기 시안을 작업 할 수 있습니다.", iconName: 'figma' }
    //     ]
    // }


    list:[
        { name: "VsCode", data: "주로 사용하는 IDE이며, 코딩에 편리한 확장프로그램들을 설치해 사용하고 있습니다.", iconName: 'visualstudiocode' },
        { name: "Eclipse", data: "JAVA언어로 코딩을 할때 주로 사용했었습니다.", iconName: 'eclipseide' },
        { name: "Visual Studio 2013", data: "ASP.NET을 활용한 WEB개발시 사용했었습니다.", iconName: 'visualstudio' },
        { name: "STS4", data: "JSP를 활용한 WEB개발시 사용했었습니다.", iconName: '' },
        { name: "Github", data: "commit, push, pull, clone 등 git 명령어를 사용하여 레파지토리에 접근할 수 있습니다.", iconName: 'github' },
        { name: "Adobe PhotoShop", data: "다양한 효과 및 필터를 활용 등을 이용해 다양한 그래픽 요소를 제작할 수 있습니다.", iconName: 'adobephotoshop' },
        { name: "Adobe Illustrator", data: "펜툴을 활용하여 벡터 형식의 그래픽 요소를 디자인 할 수 있습니다.", iconName: 'adobeillustrator' },
        { name: "Figma", data: "프로젝트의 흐름 및 UI/UX 초기 시안을 작업 할 수 있습니다.", iconName: 'figma' }
         ]
        }
    };

    const [checkedItem, setCheckedItem] = useState('');

    const checkedHandler=(e)=>{
        // setIsCheck(!ischeck);
        //console.log("checkHandler:",e.target,e.target.checked);

        let ischeck = e.target.checked;
        console.log("ischekc:",ischeck);
        if(ischeck){
            setCheckedItem(e.target.value);
        }else{
            setCheckedItem('');
         
        }

    }

    // console.log("checkedItem:",checkedItem);

    useEffect(() => {
        // key = (Object.keys(skillInfo)[0]); ex.frontend
        //values = Object.values(skillInfo[Object.keys(skillInfo)[0]]) ; ex. icon data ...
        //label = Object.values(skillInfo[Object.keys(skillInfo)[0]].icon)
    },[]);

    return (
        <div className='skill'>
            <div className='skill_list'>
                <div className='skill_menu'>
                    <i className="fa-solid fa-list-ul"></i>
                    <i class="fa-solid fa-chart-line"></i>
                </div>
                <div className='skill_dashboard'>
                     <div className='skill_category'>
                        {Object.keys(skillInfo).map((cat,cl)=>(
                            <div>
                                <span className='catName'> {cat} ({Object.values(skillInfo[cat].list).length}개)</span>
                                
                                    {Object.values(skillInfo[cat]).map(item=>(
                                        <div>
                                        {Object.values(item).map((val,l)=>(
                                                <div key={val} className='skill_index'>
                                                    <div className='idex_title'>
                                                        {val.iconName!==''?<Icon size={35} icon={val.iconName} className='skill_icon'/>:<Icon style={{display:'none'}}/>}
                                                        <span>{val.name}</span>
                                                    </div>
                                                    <div className='index_data'>
                                                    {val.data}
                                                    </div>
                                                    </div>
                                                    ))}
                                        </div>
                                            ))}  
                            </div>
                        ))}
                    </div> 
                </div>
            </div>
   {/*   <div className='skill_form'>
                <div className='skill_category'>
                    <div className='category_item'>
                        {Object.keys(skillInfo).map(item=>(
                            <div key={item} className='cat_data'>
                                    <input type="checkbox" id="catname" value={item} onChange={(e) => checkedHandler(e)}/>
                                <label>
                                    <i className={Object.values(skillInfo[item].icon)}></i>
                                </label>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
               <div className='skill_list'>
                        {Object.values(skillInfo[checkedItem].data).map(item=>(
                                <div key={item} className='list_data'>
                                    <Icon size={60} icon={item.iconName} className='skill_icon'/>
                                    {item.name} {item.data}
                                </div>
                        ))}
                </div> 
            </div>*/}

            
            {/* <div className='front main'>
                <div className='skill_position'>
                    Front-End
                </div>
                <div className='skill_list'>
                    {FrontInfo.map(item => (
                        <div className='skill_item'>

                            {item.iconName !== undefined ? <Icon size={60} icon={item.iconName} className='skill_icon'/> : item.name}
                            
                            
                            <div className='item_data'>
                            <p>{item.name}</p>
                                {item.data}
                                </div>

                        </div>
                    ))}
                </div>
            </div>

             <div className='back  main'>
                <div className='skill_position'>
                    Back-End
                </div>
                <div className='skill_list'>
                    {Object.keys(BackInfo).map(key => ((BackInfo[key]).map(item => (
                        <div className='skill_item'>
                         
                            {item.iconName !== undefined ? <Icon size={60} icon={item.iconName} /> : item.name}
                           
                            <div className='item_data'>
                            <p>{item.name}</p>
                                {item.data}
                                </div>
                        </div>
                    ))))}
                </div>
            </div>
            <div className='database  main'>
                <div className='skill_position'>
                    DataBase
                </div>
                <div className='skill_list'>
                    {DataBaseInfo.map((item) => (
                        <div className='skill_item'>
                         
                            {item.iconName !== undefined || "" ? <Icon size={60} icon={item.iconName} /> : item.name}
                           
                            <div className='item_data'>
                            <p>{item.name}</p>
                                {item.data}
                                </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='tool  main'>
                <div className='skill_position'>
                    IDE
                </div>
                <div className='skill_list'>
                    {IdeInfo.map((item) => (
                        <div className='skill_item'>
                       
                            {item.iconName !== undefined ? <Icon size={60} icon={item.iconName} /> : item.name}
                          
                            <div className='item_data'>
                            <p>{item.name}</p>
                                {item.data}
                                </div>
                        </div>
                    ))}
                </div>
            </div>
            

            <div className='etc  main'>
                <div className='skill_position'>
                    Etc Tools
                </div>
                <div className='skill_list'>
                    {Tools.map((item) => (
                        <div className='skill_item'>
                        
                            {item.iconName !== undefined ? <Icon size={60} icon={item.iconName} /> : item.name}
                          
                            <div className='item_data'>
                            <p>{item.name}</p>
                                {item.data}
                                </div>
                        </div>
                    ))}
                </div>
            </div> 
            
            <div className=''>

            </div> */}
        </div>
        
    );
};


export default Skill;

