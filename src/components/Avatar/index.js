import { React } from 'react';
import { Link } from 'framework7-react';
import './styles.css';


const Avatar = ({ src = null, href = null, ...other }) => (
    <Link href={href}>
        <img src={src ?? '#'} className={'avatar'} alt="Avatar of user" {...other}></img>
    </Link>
);

export default Avatar;
