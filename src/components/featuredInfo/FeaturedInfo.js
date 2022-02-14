// import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import './featuredInfo.css'

export default function FeaturedInfo({ title, moneyValue, moneyRate }) {
    return (
        <div className="featuredItem">
            <span className="featuredTitle">{title}</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">{moneyValue}</span>
                
            </div>
            {/* <span className="featuredSub">Compared to last month</span> */}
        </div>
    )
}
