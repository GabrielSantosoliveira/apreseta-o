
import TituloComponent from "../../Titulo/Titulo"
import paragrafoComponent from "../../Paragrafo/Paragrofo"
import MainComponent from "../../main/Main"
import SobreCardComponent from "./components/SobreCard/SobreCard"

export default function HomeScreen() {
    return (

        <>
          
            <MainComponent>
                <SobreCardComponent/>
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