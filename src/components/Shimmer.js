const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {Array(12).fill(0).map((_, index) => (
                <div key={index} className="shimmer-card">
                    <div className="shimmer-line"></div>
                    <div className="shimmer-line"></div>
                </div>
            ))}
        </div>
    );
}

export default Shimmer;