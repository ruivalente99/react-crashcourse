import Button from "./Button"
const Header = (props) => {
    const onClick = () => {
        console.log('Uau')
    }
    return (
        
        <header className='header'>
            {/* <h1 style={headerStyle} >This is a {props.title}</h1> */}
            <h1>{props.title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
           
        </header>
    )
}
// const headerStyle = {
//     color: 'Blue'
//   }
export default Header
