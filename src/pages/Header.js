import { useEffect,useState } from 'react';
import React from 'react';
import '../css/Header.css';


const Header = () => {

  return (
    <div className='header'>
      <div id='icon'><a href="#Home">DDAN</a></div>
      <div id='nav'>
       

        {/* <div id="wrapper">
          <div class="main-item menu">
            <span class="line line01"></span>
            <span class="line line02"></span>
            <span class="line line03"></span>
          </div> */}
                <div className='menu_wrapper'>
                    <div data-menuanchor="Home" className='active menu_item mitem1'><a href="#Home">Home</a></div>
                    <div data-menuanchor="About" className='active menu_item mitem2'><a href="#About">About</a></div>
                    <div data-menuanchor="Skill" className='active menu_item mitem3'><a href="#Skill">Skill</a></div>
                    <div data-menuanchor="Works" className='active menu_item mitem4'><a href="#Works">Works</a></div>
                    {/* <li data-menuanchor="Blank"className='active'><a href="#Blank">Blank</a></li> */}
              </div>
        {/* </div> */}

      </div>
    </div>
  );
};

export default Header;