import style from './style.module.css';
import { Menu, X } from 'react-feather';


function CinescopioMenu(prop) {
  return (
    <>
        <div className={style.circleBurger}>
            <div onClick={() => prop.action()} className={style.burger}>
              {(prop.state)?(<Menu/>):(<X/>)}
            </div>
        </div>
    </>
  )
}

export default CinescopioMenu