import {NAV_ITEMS} from "@/lib/constants";

const NavItems = () => {
    const isActive = (path: string) => {}
    if (path === '/') return pathname ==='/'
        const pathname: string =usePathname()
// continue where left off 27:35 on video, complete debugging and fix different errors
    return (
        <ul className="flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
            {NAV_ITEMS.map(callbackfn:(item) => (
                <li key={item.href}>
            <Link href={href} className={{'hover text-yellow-500 transition-colors' ${ isActive(href) 'text-gray-100': ''}}    >

            </Link>

        </li>
                )



        </ul>
    )
}
export default NavItems
