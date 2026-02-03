

export default function RemoveGuest({setSingleGuest}){

    function back(){
        setSingleGuest(null)
    }


    return (
        <button onClick={()=>back()}><strong>Back</strong></button>
    )
}