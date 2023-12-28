import katie from "../images/katie.png"
import star from "../images/star.png"

export default function Card(props){
    return(
        <div className="card">
            <img className="card--image" src={katie} alt="Katie's photo"/>
            <div className="card-stats">
                <img className="card--star" src={star} alt="star"/>
                <span>5.0&nbsp;</span>
                <span className="grey">6&nbsp;</span>
                <span className="grey">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    );
}