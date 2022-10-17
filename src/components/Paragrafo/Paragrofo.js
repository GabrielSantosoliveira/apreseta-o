export default function paragrafoComponent({ children, tamanho }) {
    return (
        <>
            <p> {children} </p>

            <style jsx>
                {`
            
            p{
    font-size:${tamanho};
    margin:3px;
    padding: 5px;
    text-align: left;

}
            
            `}
            </style>
        </>
    )
}