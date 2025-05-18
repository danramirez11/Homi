import { useLocation } from "react-router-dom";

const Results = () => {
    const { state } = useLocation();

    console.log("Results State: ", state);

    return (
        <>
        <h1>eres: {state.maxResult}</h1>
        </>
    )
}

export default Results;