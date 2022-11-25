import React from 'react';
import './BottomMenu.scss';
import { NavLink } from 'react-router-dom';

const BottomMenu = () => {
  return (
    <div className="buttomMenu">
      <NavLink to={'/web'} className="box">
        web development
      </NavLink>
      <NavLink to={''} className="box">
        graphic design
      </NavLink>
      <NavLink to={''} className="box">
        architecture
      </NavLink>

      <NavLink to={''} className="box">
        advertisement
      </NavLink>
      <NavLink to={''} className="box">
        online marketing
      </NavLink>
    </div>
  );
};

export default BottomMenu;
