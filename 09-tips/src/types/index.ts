/* modelado de datos */
export type MenuItem = {
    id:number,
    name:string,
    price:number
}



/* modelado de la orden de datos */
export type OrderItem = MenuItem & {
    quantity:number
}
/*MenuItem & =>  es decir tiene lo mismo que MenuItem pero le agrega quantity*/