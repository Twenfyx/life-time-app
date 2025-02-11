
interface CountProps {
    selectedDate: string;
}

function Countdown({selectedDate} : CountProps){
    return(
        <>
        <h1>Your selected the date: {selectedDate}</h1>
        </>
    )
}
export default Countdown

