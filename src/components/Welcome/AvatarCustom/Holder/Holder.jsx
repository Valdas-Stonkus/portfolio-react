/* eslint-disable max-len */
import './Holder.scss'

const Holder = ({ topHolder = true }) => {
    const holderClassName = topHolder ? 'noselect holder holder--top' : 'noselect holder holder--bottom'
    return (
        <div className={holderClassName}>
            <div className="holder--dot">
                {' '}
                . . . . . . . . . . . . &nbsp; . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . &nbsp; . . . . . . . . . . . .
            </div>
        </div>
    )
}
export default Holder
