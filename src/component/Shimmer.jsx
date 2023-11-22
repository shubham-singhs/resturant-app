export const Cards =() =>{
    return(
        <div className="shimmer-card-wrapper">
            <div className="shimmer-card-image"></div>
            <div className="shimmer-cards-text"></div>
            <div className="shimmer-cards-text"></div>
            <div className="shimmer-cards-text"></div>
            <div className="shimmer-cards-text"></div>
        </div>
    )
}
const Shimmer = ()=>{
    return(
        <div className="shimmer-container">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
        </div>
    );
}
export default Shimmer;