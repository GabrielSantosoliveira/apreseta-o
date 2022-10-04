import style from "../Header/style.module.css"

export default function HeaderComponent (){
    return ( 
        <header className={style.cabeçalho}>
        <nav> 
            <ul className={style.lista}>
                <li> <a href="" className={style.link}> Home </a> </li>
                <li> <a href="" className={style.link}> Portifolio </a> </li>
                <li> <a href=""className={style.link}>  GitHub </a></li>
                
            </ul>
        </nav>
    </header>
    )
}