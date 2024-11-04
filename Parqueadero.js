class Parqueadero{

    capacidad = 100
     tarifa = 2_500
     disponible = capacidad
     vehiculos = []
     horas_disponibles = 24

    constructor(nombre, capacidad_maxima, tarifa){
        this.nombre
        this.capacidad_maxima
        this.tarifa
    }
    
    Calcular_costo(){
        costo = (hora_salida - hora_entrada) * this.tarifa
        return costo
    }

    Consultar_diponibilidad(){
        return this.disponible
    }
}


class Cliente{
    constructor(nombre, documento, telefono){
        this.nombre
        this.documento
        this.telefono
    }

    Ver_disponibilidad(){
        return parqueadero.Consultar_diponibilidad()
    }

    pagar_tarifa(){
        costo = Parqueadero.Calcular_costo()
        if(costo > 0){
            console.log("El costo de su parqueo es: " + costo)
        } else {
            console.log("No hay vehículos en el parqueadero")
    
        }
    }

}


class Vehiculo{
    constructor(color, marca, modelo){
        this.color
        this.marca
        this.modelo
    }

    Ingreso(){
        Parqueadero.disponible--
        console.log("El vehículo ingresó al parqueadero")
    }

    Salida(){
        Parqueadero.disponible++
        console.log("El vehículo salío del parqueadero")
    }
}


class Operador{
    constructor(nombre, documento){
        this.nombre
        this.documento
    }

    Registar_entreda(){
        hora_entrada = imput(init("Ingrese la hora de entreda del vehiculo: "))
    }

    Registrar_salida(){
        hora_salida = imput(init("Ingrese la hora de salida del vehiculo: "))
    }
}


class Administrador{
    constructor(nombre, documento){
        this.nombre
        this.documento
    }

    Generar_reporte(){
        console.log("Generando reporte...")
        // Generar reporte en un archivo o en consola 
        console.log("Reporte generado con éxito")
    }

    Gestionar_cliente(){
        console.log("Gestionando clientes...")
        // Gestionar clientes en la base de datos o en consola
        console.log("Gestión completada con éxito")
    }
}


class Notificaciones{
    constructor(hora_inicio, hora_fin, disponibilidad){
        this.hora_inicio
        this.hora_fin
        this.disponibilidad
    }
    
    Enviar_notificacion(){
        console.log("Enviando notificación...")
        // Enviar notificación al operador o al administrador
        console.log("Notificación enviada con éxito")
    }
}


class Espacio{
    constructor (numero_espacio, tipo, estado){
        this.numero_espacio
        this.tipo
        this.estado
    }

    Asignar_vehiculo(vehiculo){
        this.vehiculo = vehiculo
        vehiculo.Ingreso()
    }

    Liberar_espacio(){
        this.vehiculo = null
        this.estado = "libre"
        vehiculo.Salida()
    }
}
