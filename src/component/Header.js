import '../style/Header.scss'
function Header(props) {
    return (
        <div id='headers'>
           <h1> {props.theHeader}I </h1>
        </div>
    );
}
export default Header;