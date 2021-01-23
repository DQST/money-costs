import { React } from 'react';
import './styles.css';


const Avatar = ({ src = null, ...other }) => (
    <img src={src ?? '#'} className={'avatar'} alt="Avatar of user" {...other}></img>
);

export default Avatar;
