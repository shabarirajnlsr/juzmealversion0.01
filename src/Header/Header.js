import React from 'react'
import "./Header.css";
import {Icon} from 'semantic-ui-react'

class Header extends React.Component{
     constructor(){
          super()
          this.state={

          }
     }
     render(){
          return(
               <div className='headernavbar'>
                    <div className='leftheadernavbar'>
                         <img src='header/caller.png' alt='nores'/>
                    </div>
                    <div className='rightheadernavbar'>
                         <p><Icon className='iconsymbol' name='user' size='large'/></p>
                         <p><Icon className='iconsymbol' name='shopping basket' size='large'/></p>
                         <p><Icon className='iconsymbol' name='search' size='large'/></p>
                    </div>
               </div>
          )
     }
}
export default Header;