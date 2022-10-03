export default function HomeScreen() {
    return (

        <>
            <header>
                <nav> 
                    <ul>
                        <li>Home</li>
                        <li>Portifolio</li>
                        <li>GitHub</li>
                        
                    </ul>
                </nav>
            </header>
            <main>
                <section>
                    <h1>Sobre</h1>
                    <img src="#" alt="minha foto " />
                    <p>Oi, sou Gabriel, sou facinado por programação desdos meu 11 anos de idade, sempre gostei de criar coisas e quando vi a programação pela primeira vez me encantei, tudo sei  eu aprendi com  tutorial no yutube, então convido você para ver os meus comnhecimentos e so rolar para baixo </p>
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
            </main>
        </>
    )
}