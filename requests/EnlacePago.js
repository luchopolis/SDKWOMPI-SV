class EnlacePago {
    constructor(){
        this.identificadorEnlaceComercio = ""
        this.monto = 0
        this.nombreProducto = ""
        this.formaPago = {
            permitirTarjetaCreditoDebido: true,
            permitirPagoConPuntoAgricola: true,
            permitirPagoEnCuotasAgricola: false
        }
        this.infoProducto = {
            descripcionProducto: ""
        }
        this.configuracion = {
            esMontoEditable: false,
            esCantidadEditable: false,
            cantidadPorDefecto: 1,
            emailsNotificacion: "", // emails to notify if the transacction was success, each email separate by comma email1@gmail.com,email2@gmail.com
            notificarTransaccionCliente : true
        }
    }

    /**
     * value is String example, Tres,Seis,Nueve,Doce config this with the checkAplicativo method in request
     */
    enablePagoCuotas(value){
        this.formaPago.permitirPagoEnCuotasAgricola = true
        this.cantidadMaximaCuotas = value || "Tres"
    }

    /*
        url = image url 
    */
    asignUrlImage(url){
        this.infoProducto.urlImagenProducto = url
    }
    /**
     * 
     * @param {*} url  redirect when the transacction was completed
     */
    asignUrlRedirect(url){
        this.configuracion.urlRedirect = url
    }
    getObject(){
        return JSON.stringify(this)
    }
    
}

module.exports = new EnlacePago()