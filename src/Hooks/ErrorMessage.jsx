export default function ErrorMessage({error}){
    return(
        <div className="error_message">
            <h3>Error has occured here.</h3>
            <p>Error:{error.message}</p>
        </div>
    )
}