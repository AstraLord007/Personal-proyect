import { Link } from "react-router-dom"

const Orders = () => {
    return (
        <section>
            <h1>Orders Page</h1>
            <br />
            <p>You must have been assigned an Cook role.</p>
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
    )
}

export default Orders