import courses from "../data/data2"
import Card from "./Card"
import Menu from "./Menu"

export default function Pricing({hideMenu}){
        return (
            <>
            {hideMenu && <Menu />}
            <div className="pricing">
            <h3 className="p-header">Our Pricing</h3>
            <p className="p-subheader">Choose between pre-recorded courses or interactive classes led by an instructor in real-time.</p>
            <Card courses={courses} />
        </div>
        </>
    )
}