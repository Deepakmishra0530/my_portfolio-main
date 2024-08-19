import {useContext,createContext,useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

const NavContext = createContext()

export const NavProvider = ({children}) => {

    const router = useRouter();

    const {section} = useSelector(state => state.section)
 
    const [scroll,setScroll] = useState(0)

    useEffect(()=>{


       section === 'home' && setScroll(0)
 
       section === 'about' && setScroll(550) 

       section === 'projects' && setScroll(1350) 

       section === 'contact' && setScroll(2500)

    //    console.log(section , scroll)
    },[section])
  

    return <NavContext.Provider value={{section,scroll}}>{children}</NavContext.Provider>
}

export const useNav = () =>{
    return useContext(NavContext)
}

