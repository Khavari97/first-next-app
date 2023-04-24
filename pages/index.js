import React from "react";
import Link from "next/link";

const App =()=>{
    return(
        <div>
            <ul>
                <Link href={"/posts"}><h3><li>posts (csr)</li></h3></Link>
                <Link href={"/users"}><h3><li> users (sg)</li></h3></Link>
                <Link href={"/albums"}><h3><li> albums (ssr) </li></h3></Link>
                <Link href={"/comments"}> <h3><li> users with comments (csr & sg) </li></h3></Link>
            </ul>
        </div>
    )
}

export default App;
