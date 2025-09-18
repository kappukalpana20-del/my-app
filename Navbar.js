function Navbar(){
    return(
        <nav style={{background:"#007bff",padding:"10px",color:"white"}}>
            <h2>My React App</h2>
            <ul style={{listStyle:"none",display:"flex",gap:"15px"}}>
                <li><a href="#" style={{color:"white",textDecoration:"none"}}Home></a></li>
                <li><a href="#" style={{color:"white",textDecoration:"none"}}About></a></li>
                <li><a href="#" style={{color:"white",textDecoration:"none"}}Contact></a></li>
            </ul>
        </nav>
    );
}
export default Navbar;