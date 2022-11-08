import './Features.css';

function Features(props) {
    return (
        <div>
            <article className="Features">
                <img src = {props.image} alt = ""></img>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </article>
        </div>
    )
}

export default Features;