function Sidebar(props){
    return (
        <>  
            <div className="sidebar-wrapper">
                <div className="bg-overlay"></div>
                <div className="sidebar-content">
                    <h2>The Brutal Martian Landscape</h2>
                    {/* <div> */}
                        <p>Description</p>
                        <p>Consequat aute consequat nostrud laborum elit minim enim sit magna sunt nisi nulla eu ullamco. Nisi laboris magna commodo fugiat. Laborum cillum proident consectetur reprehenderit nulla amet irure deserunt excepteur do eiusmod veniam consectetur ad. Cupidatat dolor irure tempor mollit.</p>
                    {/* </div> */}
                    <button 
                        className="read-less"
                        onClick={props.onHandleClick}>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
                
            </div>
            
        </>
    )
}

export default Sidebar