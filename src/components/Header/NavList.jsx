export default function NavList({flexDirection}){
    return (
        <ul className={flexDirection + ' nav-list'}>
            <li><a href="#" className="text-blue-2">Home</a></li>
            <li><a href="#" className="text-blue-2">New</a></li>
            <li><a href="#" className="text-blue-2">Popular</a></li>
            <li><a href="#" className="text-blue-2">Trending</a></li>
            <li><a href="#" className="text-blue-2">Categories</a></li>        
        </ul>
    )
}