import styles from "./inlineComponent.module.css";
//inline css
//const header={color:"green"};

export default function InlineComponent(){
    return (
        <div>
            <h1 className={styles.header} /*style={header}*/>Inline Component</h1>
        </div>
    )
}