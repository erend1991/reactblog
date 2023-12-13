import {NavLink} from "react-router-dom";

function NavBar(){
    const isActive = true;

    return(
        <nav>
            <ul>
                <li>
                    <NavLink to ="/" ClassName={isActive === true? 'active link' : 'default link'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="/overview" ClassName={isActive === true? 'active link' : 'default link'}>
                        Alle Post
                    </NavLink>
                </li>
                <li>
                    <NavLink to ="/newPost" ClassName={isActive === true? 'active link' : 'default link'}>
                        Nieuwe post
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar