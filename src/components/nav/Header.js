import React, {useState}from 'react'
import {Menu} from 'antd'
import {  AppstoreOutlined, SettingOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons'
import {Link} from 'react-router-dom'
const {SubMenu, Item} = Menu

const handleClick = (e)=> {
    console.log(e.key)
}

const Header = () => {
    const [current, setCurrent] = useState('home')

        return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Item key="home" icon={<AppstoreOutlined />}>    
          <Link to= "/"> Home</Link>
        </Item>

        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">         
         <Item key="setting:1">Option 1</Item>
         <Item key="setting:2">Option 2</Item>     
    
     </SubMenu>

        <Item key="Register" icon={<UserAddOutlined />} className="float-right">    
          <Link to="/register">Register</Link>
        </Item>

        <Item key="login" icon={<UserOutlined />} className="float-right">    
        <Link to="/login">Login</Link>
        </Item>

  
    </Menu>
        )

}

export default Header