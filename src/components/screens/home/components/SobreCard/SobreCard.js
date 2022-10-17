
import style from "../SobreCard/style.module.css"
import SobreTextoComponent from "./components/SobreTexto/SobreTexto"
export default function SobreCardComponent () { 
    return( 
        <>
        <section className={style.sobreCard}>
                    <img 
                    src="https://avatars.githubusercontent.com/u/72681794?v=4" 
                    alt="minha foto " 
                    className={style.img}
                    />
                    <SobreTextoComponent/>
                </section>
        </>
    )
}