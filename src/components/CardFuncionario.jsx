import styles from "./CardFuncionario.module.css"

function CardFuncionario({ foto, nome, cargo, dataAdmissao }){
    return (
        <>
            <div className={styles.card}>
                <img className={styles.foto} src={foto}/>
                <h2 className={styles.nome}>{nome}</h2>
                <p className={styles.texto}>{cargo}</p>
                <p className={styles.texto}>{dataAdmissao}</p>
            </div>
        </>
    )
}

export default CardFuncionario