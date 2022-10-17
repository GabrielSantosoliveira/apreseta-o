import TituloComponent from "../../../../../../Titulo/Titulo"
import ParagrafoComponent from "../../../../../../Paragrafo/Paragrofo"
import style from"../SobreTexto/style.module.css"

export default function SobreTextoComponent() {
    return (

        <div className={style.SobreTexto}>

            <TituloComponent tamanho="2.9rem">
                Sobre
            </TituloComponent>
            <ParagrafoComponent tamanho="1.5rem">Oi, sou Gabriel, sou facinado por programação desdos meu 11 anos de idade, sempre gostei de criar coisas e quando vi a programação pela primeira vez me encantei, tudo sei  eu aprendi com  tutorial no yutube, então convido você para ver os meus comnhecimentos e so rolar para baixo </ParagrafoComponent>

        </div>
    )
}

