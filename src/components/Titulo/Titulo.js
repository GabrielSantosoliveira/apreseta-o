export default function TituloComponent ({ children, tamanho }) {
    return (
        <>
            <h1> {children}</h1>

            <style jsx>
                {`
            
            h1{
                font-size:${tamanho};
                margin:3px;
                padding: 5px;
}
            
            `}
            </style>
        </>
    )
}