import React , {useState, useEffect}from 'react'

export const NavbarContext = React.createContext();

const NavProvider = ({children}) => {

    const [navColor, setNavColor] = useState()
    const [open, setOpen] = useState(false)

    const red = '#4B0705';
    const white = '#f5ede7';
    const colors = {
        red,
        white
    }

    const useNavColor = (color) =>{
        useEffect(() => {
            if(open){
                setNavColor(colors.red)
            }else{
                setNavColor(color)

            }  

        },[color, open])
    
        
        return navColor;
    }

    
    const handleOpenNavbar = () => {
        setOpen(!open)
    }

    return (
        <NavbarContext.Provider value={{useNavColor, colors, navColor, handleOpenNavbar, open}}>
            {children}
        </NavbarContext.Provider>
    )
}

export default NavProvider
