import { Link } from 'react-router-dom';
const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer>
			<p>Copyrigh &copy; {year} </p>
			<Link to={'/about'}>ABOUT</Link>
		</footer>
	);
};
export default Footer;
