function Footer() {
    return (
        <footer className="bg-grey-800 text-white text-center py-4">
            <hr />
            <p className="text-sm">
                &copy; {new Date().getFullYear()} My React App. All rights reserved.
            </p>
        </footer>
    )
}
export default Footer;