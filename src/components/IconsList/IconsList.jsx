import './IconsList.scss'

const IconsList = ({
    itemArr,
    listClassName = 'portfolio-column-list',
    itemClassName = 'portfolio-column-list__item',
    itemIconClassName = 'portfolio-column-list__item-icon'
}) => (
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
