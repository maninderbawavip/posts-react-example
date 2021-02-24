import './style.css';

const Card = (props) => {
    console.log(props)
    return (
        <div className={`card ${props.size}`} >
            <h2>{props.name}</h2>
            <p>{props.body}</p>
        </div>
    )
}

export default Card;