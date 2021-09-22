import './Result.scss'
function Result(props) {
    return (
        <div id='result'>
         
         <pre>
                {props.method}
                <h3> Headers </h3>
                {JSON.stringify(props.data.headers, null, 2)}
                <h5> Results </h5>
                {JSON.stringify(props.data.data, null, 2)}
            </pre>
        </div>
    );
}
export default Result;