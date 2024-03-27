import React from 'react';
import {images, data} from "../../constants"
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialmenu flex__center section__padding' id='menu'>
    <div className="app__specialmenu-title">
      <SubHeading title ="Menu that fits you palatte" />
      <h1 className='headtext__cormorant'>Today's special</h1>
    </div>
    <div className="app__specialmenu-menu">
      <div className="app__specialmenu-menu_wine flex__center">
        <p className='app__specialmenu-menu_heading'>Wine and Beer</p>
        <div className="app__specialmenu-menu_items">
          {data.wines.map((wine, index)=>(
            <MenuItem key={wine.title + index} price={wine.price} title={wine.title} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div className="app__specialmenu-menu_img">
        <img src={images.menu} alt='menu image' /> 
      </div>
      <div className="app__specialmenu-menu_cocktails flex__center">
        <p className='app__specialmenu-menu_heading'>Cocktails</p>
        <div className="app__specialmenu-menu_items">
          {data.cocktails.map((cocktail, index)=>(
            <MenuItem key={cocktail.title + index} price={cocktail.price} title={cocktail.title} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop: "15px"}}>
      <button type='button' className='custom__button'>View more</button>
    </div>
  </div>
);

export default SpecialMenu;
