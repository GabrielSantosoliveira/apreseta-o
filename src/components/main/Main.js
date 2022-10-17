import style from"../main/style.module.css"
export default function MainComponent ( {children}) {
  return ( 
    <main className={style.main}>
    {children}
    </main> 
  )   
}