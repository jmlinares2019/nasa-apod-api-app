function Main(props){
    const { data } = props
    return (
        <>
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