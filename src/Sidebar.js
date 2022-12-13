export default function Sidebar() {
    return <sideNav className = "side-nav">
    <ul className = "side-ul">
        <div>

            <li data-testid = "genrefilters" className="side-li">
                <a href='/#' >Genre</a>

            </li>
            <li>
                <a href='/#' data-testid = "action">Action</a>
            </li>
            <li>
                <a href='/#' data-testid = "horror">Horror</a>
            </li>
            <li>
                <a href='/#' data-testid = "adventure">Adventure</a>
            </li>
            <li>
                <a href='/#' data-testid = "drama">Drama</a>
            </li>
            <li>
                <a href='/#' data-testid = "scifi">Sci-fi</a>
            </li>
            <li>
                <a href='/#'>More...</a>
            </li>
            </div>
            <div>
            
            <li data-testid = "languagefilters"className="side-li2">
                <a href='/#'>Language</a>

            </li>
            <li>
                <a href='/#' data-testid = "english">English</a>
            </li>
            <li>
                <a href='/#' data-testid = "filipino">Filipino</a>
            </li>
            <li>
                <a href='/#' data-testid = "korean">Korean</a>
            </li>
            <li>
                <a href='/#' data-testid = "japanese">Japanese</a>
            </li>
            <li>
                <a href='/#' data-testid = "french">French</a>
            </li>
            <li>
                <a href='/#' data-testid = "hindi">Hindi</a>
            </li>
            <li>
                <a href='/#'>More...</a>
            </li>
            </div>
        </ul>
        
    </sideNav>
}