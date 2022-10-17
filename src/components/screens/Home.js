import style from "../../components/screens/test.module.css"
import TituloComponent from "../Titulo/Titulo"
import paragrafoComponent from "../../components/Paragrafo/Paragrofo"
import MainComponent from "../main/Main"

export default function HomeScreen() {
    return (

        <>
          
            <MainComponent>
                <section className={style.sobreCard}>
                    <img 
                    src="https://avatars.githubusercontent.com/u/72681794?v=4" 
                    alt="minha foto " 
                    className={style.img}
                    />
                    <div className={style.divSobre}>

                    <TituloComponent tamanho="2.9rem">
                        Sobre
                    </TituloComponent>
                    <paragrafoComponent tamanho="1.9rem">Oi, sou Gabriel, sou facinado por programação desdos meu 11 anos de idade, sempre gostei de criar coisas e quando vi a programação pela primeira vez me encantei, tudo sei  eu aprendi com  tutorial no yutube, então convido você para ver os meus comnhecimentos e so rolar para baixo </paragrafoComponent>

                    </div>
                </section>
                <section>
                    <h1>tecnologias</h1>

                    <div className="tecnologia">
                        <h2>Html5</h2>
                        <img src="" alt="" />
                        <span>Sobre</span>
                        <p>A basse para contruir saites</p>
                    </div>

                    <div className="tecnologia">
                        <h2>CSS3</h2>
                        <img src="" alt="" />
                        <span>Sobre</span>
                        <p>A basa para estilizar saites </p>
                    </div>
                    <div className="tecnologia">
                        <h2>JavaScript</h2>
                        <img src="" alt="" />
                        <span>Sobre</span>
                        <p>A Basa para fazer as funcionalidades site </p>
                    </div>
                    <div className="tecnologia">
                        <h2>Reactjs</h2>
                        <img src="" alt="" />
                        <span>sobre</span>
                        <p>fremework basiado em javaScript</p>
                    </div>
                    <div className="tecnologia">
                        <h2>Nextjs</h2>
                        <img src="" alt="" />
                        <span>sobre</span>
                        <p>fremework basiado no reactjs</p>
                    </div>
                    <p>Esse saite foi comtruido usando todas essas tecnologias,porem comvido a acessar o meu <a href="#">  Portifolio Clicando Aqui </a>  </p>

                </section>
            </MainComponent>
        </>
    )
}