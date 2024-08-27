function Footer(props){
    const { data, onHandleClick } = props;
    return (
        <>
            <footer>
                {/* <div className="bg-gradient"></div> */}
                <div className="main-info">
                    <h1 className="main-title">APOD PROJECT</h1>
                    <h2 className="footer-pic-title">{data?.title}</h2>
                </div>
                <button 
                    className="read-more"
                    onClick={props.onHandleClick}>
                    <i className="fa-solid fa-circle-info"></i>
                </button>
            </footer>
            
        </>
    )
}

export default Footer