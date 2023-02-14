import loading from './loading.svg';
import classes from './Loading.module.css';

function Loading() {
    return <img className={classes.loading} src={loading} alt="Loading..."/>
}

export default Loading;