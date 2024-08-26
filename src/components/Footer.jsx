function Footer(props){
    return (
        <>
            <footer>
                {/* <div className="bg-gradient"></div> */}
                <div className="main-info">
                    <h2 className="footer-pic-title">The Brutal Martian Landscape</h2>
                    <h1 className="main-title">APOD Project</h1>
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