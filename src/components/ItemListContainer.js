import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
    
    const onAdd = (quantity) => {
        alert('Has seleccionado ' + quantity + " productos.")
    }

    return(
        <div>
        <h2> {greeting} </h2>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    );
}
export default ItemListContainer;