function Sidebar(props){
    const { data, onHandleClick, showModal } = props
    return ( 
        <div className={showModal ? "sidebar-wrapper show" : "sidebar-wrapper hide"}>
            <div className="sidebar-content">
                <h2 className="sidebar-title">{data?.title}</h2>
                <p className="sidebar-author">&copy; {data?.copyright ? data.copyright : ""}</p>
                <p className="sidebar-date">{data?.date}</p>
                <p className="sidebar-description">{data?.explanation}</p>
                <button 
                    className="read-less"
                    onClick={onHandleClick}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>   
        </div>
    )
}

export default Sidebar