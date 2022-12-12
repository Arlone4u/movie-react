export default function Sidebar() {
    return <sideNav className = "side-nav">
    <ul className = "side-ul">
        <div>
            <li className="side-li">
                <a className="Genre">Genre</a>
            </li>
            <li>
                <a >Action</a>
            </li>
            <li>
                <a >Horror</a>
            </li>
            <li>
                <a >Adventure</a>
            </li>
            <li>
                <a >Drama</a>
            </li>
            <li>
                <a >Sci-fi</a>
            </li>
            <li>
                <a >More...</a>
            </li>
            </div>
            <div>
            <li className="side-li2">
                <a className="Language">Language</a>
            </li>
            <li>
                <a >English</a>
            </li>
            <li>
                <a >Filipino</a>
            </li>
            <li>
                <a >Korean</a>
            </li>
            <li>
                <a >Japanese</a>
            </li>
            <li>
                <a >French</a>
            </li>
            <li>
                <a >Hindi</a>
            </li>
            <li>
                <a >More...</a>
            </li>
            </div>
        </ul>
        
    </sideNav>
}