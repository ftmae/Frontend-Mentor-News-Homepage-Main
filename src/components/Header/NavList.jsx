export default function NavList({flexDirection}){
    return (
        <ul className={flexDirection + ' text-blue-2 nav-list'} style={{gap: '2rem'}}>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>        
        </ul>
    )
}