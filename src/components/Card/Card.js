import styles from '../Card/Card.module.css'

export default function Card(props) {
    let classes = props.className +" "+ styles.card; 
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}