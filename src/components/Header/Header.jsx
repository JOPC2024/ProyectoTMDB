import React, { useEffect } from 'react'
import Menu from './CinescopioMenu/CinescopioMenu';
import logo from '../../assets/img/logo.png';
import style from './style.module.css';
import {Search, Filter} from 'react-feather';
import { Navigate, Link} from "react-router-dom";


function Header() {
  const [showMenu, setShowMenu] = React.useState(true);
  const [stateSearch, setStateSearch] = React.useState(false);
  const [buscadorOne, setBuscadorOne] = React.useState('');
  
  function stateMenu(){
    setShowMenu(!showMenu);
  }

  function buscador(bus){
    if(bus==1)
    {
      setStateSearch(true)
    }
    else if(bus==2){
      window.alert(bus);
    }
  }

  if(stateSearch){
    return <Navigate to={`/search/${buscadorOne}`} />
  }

  return (
    <>
      <header>
        <div className={style.header}>
          <div className={style.headerLeft}>
            <Link to="/">
              <img width="80" height="80" src={logo} alt="logo" />
            </Link>
            <label htmlFor="">Cinescopio</label>
          </div>
          <div className={style.headerCenter}>
            <div className={style.filter}>
                Filtro<Filter/>
            </div>
            <div className={style.search}>
                <input 
                  type="text" 
                  placeholder='Buscador...'
                  onChange={(e) => {setBuscadorOne(e.target.value)}}
                />
              <div onClick={() => buscador(1)} className={style.glass}>
                <Search/>
              </div>
            </div>
          </div>  
          <div className={style.headerRight}>
            <Menu state={showMenu} action={stateMenu}/>
          </div>
        </div>
        <nav className={`${style.dropDownMenu} ${!showMenu ? style.dropDownMenuVisibility : ''}`}>
          <ul>
            <li className={`${!showMenu ? style.listMenuOn : style.listMenuOff}`}>
              <div className={`${style.search} ${style.searchMenu}`}>
                  <input type="text" placeholder='Buscador...'/>
                <div onClick={() => buscador(2)} className={style.glass}>
                  <Search/>
                </div>
              </div>
            </li>
            <li className={`${!showMenu ? style.listMenuOpcionOn : style.listMenuOpcionOff} ${style.searchMenu}`}>
              <div>Filtrar<Filter/></div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header