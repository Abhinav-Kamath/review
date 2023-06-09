import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { FaHeart, FaListAlt, FaUser } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { RiMovie2Fill, RiLockPasswordLine } from 'react-icons/ri'
import { HiViewGridAdd } from 'react-icons/hi'
import Layout from '../../Layout/Layout'
import { NavLink } from 'react-router-dom'
import { isAdminAtom } from '../Login.state'
import { useRecoilValue, useRecoilState } from 'recoil'
import { BiExit } from 'react-icons/bi'
import { isLoginAtom } from '../Login.state'
import { useNavigate } from 'react-router-dom'
import { FavDataAtom } from './Favorites.state'
function SideBar({children}) {
    const isAdmin = useRecoilValue(isAdminAtom);
    const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
    const [FavData, setFavData] = useRecoilState(FavDataAtom);
    const nav = useNavigate();
    React.useEffect(() => {if (!isLogin) nav('/login')});
    const SideLinks =[
        {
            name :"Dashboard",
            link: "/dashboard",
            icon: BsFillGridFill,
        },
        {
            name :"Songs",
            link: "/songs",
            icon: FaListAlt
        },
        {
            name :"Categories",
            link: "/categories",
            icon: HiViewGridAdd
        },
        {
            name :"Update Profile",
            link: "/profile",
            icon: FiSettings
        },
        {
            name :"Favorites",
            link: "/favorites",
            icon: FaHeart
        },
        {
            name :"Change Password",
            link: "/password",
            icon: RiLockPasswordLine
        },
    ]
    if (isAdmin) {
        SideLinks.push({
            name :"Users",
            link: "/users",
            icon: FaUser
        })
        SideLinks.push({
            name :"Add Song",
            link: "/addsong",
            icon: RiMovie2Fill
        })
    }
    SideLinks.push({
        name :"LogOut",
        link: "/",
        icon: BiExit,
        function : () => {
            setIsLogin(false);
            setFavData([]);
        }
    })
    const active = "bg-dryGray text-subMain "
    const hover ="hover:text-white hover:bg-main "
    const inActive ="rounded font-medium transitions flex gap-3 items-center p-4 "

    const Hover =({isActive}) => 
        isActive ? `${active}${inActive}` : `${inActive}${hover}`

  return (
    <Layout>
        <div className='min-h-scrren container mx-auto px-2'>
            <div className='xl:grid grid-cols-8 gap-10 items-start md::py-12 py-6'>
                <div className='col-span-2 sticky bg-dry border border-gray-800 p-6 rounded-md xl:mb-0 mb-5 '>
                    {
                        SideLinks.map((link,index) => (
                            <NavLink onClick={link.function} to={link.link} key={index} className={Hover}>
                                <link.icon/> <p>{link.name}</p>
                            </NavLink>
                        ))
                    }
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" dat-aos-delay="10" data-aos-offset="100" className='col-span-6 rounded-md bg-dry border border-gray-800 p-6'>{children}</div>
            </div>
        </div>
    </Layout>
  )
}

export default SideBar
