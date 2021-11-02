import colors from '../tamplates/statistical-data.json'
import '../styles/statistic.css'

export default function Statistics(label, percentage) {
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <ul className="stat-list">
                {colors.map(color => {
                    return (
                        <li key={color.id} className="item-statistic" style={{ backgroundColor: randomColor() }}>
                            <span className="label">{color.label}</span>
                            <span className="percentage">{color.percentage}</span>
                        </li>
                        )
                    })}
            </ul>
        </section>
    )
}

function randomColor() {
    const colors = ['red', 'green', 'pink','blue','yellow']
    const colorId = Math.floor(Math.random() * colors.length)
    return colors[colorId]
}