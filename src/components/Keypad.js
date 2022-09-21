// Code Keypad Component Here

function enterPassword() {
    console.log('Entering password...')
}

function Keypad() {
    return (
        <div>
            <form>
                <input type="password" onChange={enterPassword} />
            </form>
        </div>
    )
}

export default Keypad;