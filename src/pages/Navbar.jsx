import { HashLink as Link } from "react-router-hash-link";

export default function Navbar(){
    return <>
        <Link to= "#about" smooth>
            Home      
        </Link>
        <Link to= "#about" smooth>
            About      
        </Link>
        <Link to= "#about" smooth>
            About      
        </Link>
        <Link to= "#about" smooth>
            Skills     
        </Link>
        <Link to= "#about" smooth>
            Projects      
        </Link>
        <Link to= "#about" smooth>
            Contact      
        </Link>
        <Link to= "#about" smooth>
           Resume    
        </Link>
    </>
}