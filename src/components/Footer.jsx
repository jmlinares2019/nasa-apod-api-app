function Footer(props){
    const { data, onHandleClick } = props;
    return (
        <>
            <footer>
                <div className="bg-gradient">
                    {/* footer decorative gradient background */}
                </div>
                <div className="main-info">
                    <h1 className="main-title">
                        <a 
                            href="https://apod.nasa.gov/apod/astropix.html" 
                            target="_blank"
                            className="project-link">
                            APOD PROJECT
                        </a>
                    </h1>
                    <h2 className="footer-pic-title">{data?.title}</h2>
                    <div className="contact-me">
                        <p className="my-name">Juan Manuel Linares</p>
                        <a href="https://github.com/jmlinares2019" className="github-icon contact-link">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/juan-manuel-linares/" className="linkedin-icon contact-link">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <button 
                    className="read-more"
                    onClick={onHandleClick}>
                    <i className="fa-solid fa-circle-info"></i>
                </button>
            </footer>
            
        </>
    )
}

export default Footer