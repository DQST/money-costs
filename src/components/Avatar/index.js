import { React } from 'react';


const Avatar = ({ url = null, blob = null, ...other }) => (
    <img src={url ?? blob} alt="Avatar of user" {...other}></img>
);

export default Avatar;
