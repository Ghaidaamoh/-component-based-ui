import './Result.scss'
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import Loding from '../loding/Loding';
function Result(props) {
    return (
        <div id='result'>

            {/* <pre>
                {props.method}
                <h3> Headers </h3>
                {JSON.stringify(props.data.headers, null, 2)}
                <h5> Results </h5>
                {JSON.stringify(props.data.data, null, 2)}
            </pre> */}
            <pre>
                <h3> Headers </h3>
                {props.data ? <JSONPretty data={props.data.headers} /> : <Loding />}
                <h5> Results </h5>
                {props.data ? <JSONPretty data={props.data.data} /> : <Loding />}
            </pre>
        </div>
    );
}
export default Result;