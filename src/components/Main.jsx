function Main(props){
    const { data, showModal, onHandleClick } = props
    return (
        <>
            <div 
                className={showModal ? "bg-overlay show" : "bg-overlay hide"}
                onClick={onHandleClick}>
            </div>
            <div className="img-wrapper">
                <img 
                    src={data?.hdurl} 
                    alt={data?.title || "Astronomic Picture Of the Day"} 
                    className="bg-image"
                />
            </div>
        </>
    )
}

export default Main