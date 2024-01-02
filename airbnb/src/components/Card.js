
export default function Card(props){
    let badgeText

    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={props.img} alt="Katie's photo"/>
            <div className="card-stats">
                <img className="card--star" src="../images/star.png" alt="star"/>
                <span>{props.rating}&nbsp;</span>
                <span className="grey">{props.reviewCount}&nbsp;</span>
                <span className="grey">{props.location}</span>
            </div>
            <p><span className="card--title">{props.title}</span></p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}