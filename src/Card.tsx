import profile from './assets/profile.jpeg';
function Card() {
    return (
        <div className="card">
            <img className='cardImage' src={profile} alt="profile pic" />
            <h2 className='cardTitle'>Rakibul Hasan</h2>
            <p>I'm learning React and DSA</p>
        </div>
    )
}
export default Card;