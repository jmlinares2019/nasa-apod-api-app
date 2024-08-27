function Sidebar(props){
    const { data, onHandleClick } = props
    return (
        <>  
            <div className="sidebar-wrapper">
                <div className="bg-overlay"></div>
                <div className="sidebar-content">
                    <h2 className="sidebar-title">{data?.title}</h2>
                    <p className="sidebar-date">{data?.date}</p>
                    <p className="sidebar-description">{data?.explanation}</p>
                    <button 
                        className="read-less"
                        onClick={onHandleClick}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                
            </div>
            
        </>
    )
}

export default Sidebar