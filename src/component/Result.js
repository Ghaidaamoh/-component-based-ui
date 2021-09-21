import '../style/Result.scss'
function Result(props) {
    return (
        <div id='result'>
         
          <h2>{props.data}</h2> 
        </div>
    );
}
export default Result;