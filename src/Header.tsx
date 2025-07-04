// Function based component in React
// JSX: javaScript XML

function Header() {
    const name = "Rakib";
    return (
        <header>
            <h1>My website</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/profile">{name}</a></li>
                    <li><a href="/service">Service</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
            <hr />
        </header>
        
    );
}

export default Header;