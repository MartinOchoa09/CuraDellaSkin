

function Carrito({file,price}) {
    return ( 
        <>
            <td>
                {file}
            </td>
            <td>
                {price}
            </td>
            <td>
                <button>Pagar</button>
            </td>
        </>
     );
}

export default Carrito;