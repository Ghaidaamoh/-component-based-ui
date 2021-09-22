import './Header.scss'
function Header(props) {
    return (
        <div id='headers'>
           <h1> {props.theHeader}</h1>
        </div>
    );
}
export default Header;