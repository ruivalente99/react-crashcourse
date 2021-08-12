import Button from "./Button"
const Header = ({title,onAdd,showAdd}) => {
    return (
        
        <header className='header'>
            {/* <h1 style={headerStyle} >This is a {props.title}</h1> */}
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
           
        </header>
    )
}
// const headerStyle = {
//     color: 'Blue'
//   }
export default Header
