
//module.exports = require('./requests/requests')

const { generateToken, generateEnlacePago, checkAplicativo, checkEnlacePago, disableEnlacePago } = require('./requests/requests')
const EnlacePagoObject = require('./requests/EnlacePago')

const APIID = "891ca1c5-2b11-4b44-ad67-720b3ddc8b76"
const SECRET = "8cd06e2a-b718-441b-84f4-e953a9dbf158"

const testToken = async () => {
    const token = await generateToken(APIID, SECRET)
    EnlacePagoObject.identificadorEnlaceComercio = "PRUEBA"
    EnlacePagoObject.monto = 1.0 // make sure pass this as double
    EnlacePagoObject.nombreProducto = "A"
    EnlacePagoObject.asignUrlRedirect('https://pichingadev.com')
    EnlacePagoObject.configuracion.emailsNotificacion = "lacgdev@gmail.com"

    //const pagaLink = await generateEnlacePago(EnlacePagoObject.getObject(), token)
    //console.log(pagaLink)
    // DISABLE ENLACE PAGO
    console.log(await disableEnlacePago(268621,token))

    // Check Aplicativo
    //console.log(await checkAplicativo(token))
    //console.log(await checkEnlacePago(268621, token))

}

testToken()
