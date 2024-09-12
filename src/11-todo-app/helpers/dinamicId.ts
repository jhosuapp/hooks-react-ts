const dinamicId = ():string => {
    const ahora = new Date();
    const id = ahora.getTime();  // Obtiene el tiempo en milisegundos desde el 1 de enero de 1970
    return id.toString();        // Lo convierte a una cadena
}

export { dinamicId }