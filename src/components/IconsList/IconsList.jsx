import './IconsList.scss'

const IconsList = ({ itemArr }) => (
    <div className="portfolio-column-list">
        {itemArr.map((item, index) => (
            <div key={index} className="portfolio-column-list__item">
                <div>
                    {item.name}
                </div>
                <div className="portfolio-column-list__item-icon">
                    {item.icon}
                </div>
            </div>
        ))}
    </div>
)

export default IconsList
