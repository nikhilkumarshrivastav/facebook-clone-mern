import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            {/* <SidebarRow src={user.photoURL} title={user.displayName} /> */}
            <SidebarRow src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" title="Isen" />
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />

            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />

            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlined} title='More' />
        </div>
    )
}

export default Sidebar