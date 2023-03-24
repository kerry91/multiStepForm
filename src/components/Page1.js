import '../css/Page1.css'

function Page1 () {
    return (
        <>
        <aside>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <form>
                <label for="name">Name</label><br></br>
                <input type="text" id="name" placeholder="e.g. Stephen King"></input>
                <br></br>
                <label for="email">Email</label><br></br>
                <input type="text" id="email" placeholder="e.g. stephenking@lorem.com"></input>
                <br></br>
                <label for="number">Phone Number</label><br></br>
                <input type="text" id="number" placeholder="e.g. 07384912345"></input>
                <br></br>
                <input type="submit" value="Next Step"></input>
            </form>
        </aside>
        </>
    )
}

export default Page1