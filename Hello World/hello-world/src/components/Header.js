
const Header = (props) => {
    return (
        <header>
            <h1 style={headerStyle} >This is a {props.title}</h1>
        </header>
    )
}
const headerStyle = {
    color: 'Blue'
  }
export default Header
