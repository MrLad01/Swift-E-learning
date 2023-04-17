import options from "../data/options"

export default function Cards(){

    const slide = options.map(option => {
        return (
            <div className="slide">
                <img src={option.image} alt={option.alt} />
                <div>
                    <h2>{option.head}</h2>
                    <p>{option.context}</p>
                    <h3>ESTIMATED TIME</h3>
                    <p>{option.time}</p>
                </div>
            </div>
        )
    })

    return(
        <div>
            {slide}
        </div>
    )
}