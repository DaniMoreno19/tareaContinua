let contactos=
    [{nombre:'Maxwell Wright',telefono:'(0191) 719 6495',correo:'Curabitur.egestas.nunc@nonummyar.co.uk'}
    ,{nombre:'Raja Villareal',telefono:'0866 398 2895',correo:'posuere.vulputate@sed.com'}
    ,{nombre:'Helen Richards',telefono:'0800 1111',correo:'libero@convallis.edu'}];

    let opcion = prompt("Introduce la opción que quieras realizar: \n 1.-Mostrar todos los contactos \n 2-Mostrar un contacto específico \n 3.-Añadir un nuevo contacto \n 4.-Ordenar arrays \n 5.-Salir del programa");


    function showAllContacts(contactos) {
        console.log(contactos);
    }
    
    function showContact(contactos, indice) {
        console.log(contactos[indice]);
    }
    
    function addNewContact(contactos, nombree, telefonoo, correoo){
        
        
        nuevoContacto=("nombre: "+nombree +", teléfono: " +telefonoo + ", correo: "  +correoo);
        contactos.push(nuevoContacto);
        console.log(contactos);
        
       
    }
    if (opcion == 1){
        showAllContacts(contactos);
    } else if (opcion == 2){
        indice = prompt ("Indice: ");
        showContact(contactos, indice);
    } else if (opcion == 3){
        nombree = prompt ("Introduce el nombre y apellido: ");
        telefonoo = prompt ("Introduce el numero de telefono: ");
        correoo = prompt ("Introduce el correo electronico: ");
        addNewContact(contactos, nombree, telefonoo, correoo);
    } else if (opcion == 4){
        ordenar = prompt ("1.-Ordenar por el nombre\n 2.-Ordenar por el telefono \n 3.-Ordenar por el correo ");
        if (ordenar == 1 || ordenar == 2 || ordenar == 3){
            forma = prompt ("1.-Ordenar en orden descendente \n 2.-Ordenar en orden ascendente ");
        }
        if (ordenar == 1 && forma == 1){
            contactos.sort((x, y) => {
                x = x.nombre.toLowerCase();
                y = y.nombre.toLowerCase();
                            
                if (x == y) {
                    return 0;
                }
                if (x > y) {
                    return -1;
                }
                return 1;
            });
            console.log("Ordenado por NOMBRE de forma DESCENDENTE")
            console.log(contactos);
        }
        if (ordenar == 1 && forma == 2){
            contactos.sort((x, y) => {
                x = x.nombre.toLowerCase();
                y = y.nombre.toLowerCase();
            
                if (x == y) {
                    return 0;
                }
                if (x < y) {
                    return -1;
                }
                return 1;
            });
            console.log("Ordenado por NOMBRE de forma ASCENDENTE")
            console.log(contactos);
        }
        if (ordenar == 2 && forma == 1){
            contactos.sort((x, y) =>{
                x = x.telefono;
                y = y.telefono;
            
                if (x == y) {
                    return 0;
                }
                if (x > y) {
                    return -1;
                }
                return 1;
            })
            console.log("Ordenado por TELEFONO de forma DESCENDENTE")
            console.log(contactos);
        }
        if (ordenar == 2 && forma == 2){
            contactos.sort((x, y) =>{
                x = x.telefono;
                y = y.telefono;
            
                if (x == y) {
                    return 0;
                }
                if (x < y) {
                    return -1;
                }
                return 1;
            })
            console.log("Ordenado por TELEFONO de forma ASCENDENTE")
            console.log(contactos);
        }
        if (ordenar == 3 && forma == 1){
            contactos.sort((x, y) => {
                x= x.correo.toLowerCase();
                y= y.correo.toLowerCase();
            
                if (x == y) {
                    return 0;
                }
                if (x > y) {
                    return -1;
                }
                return 1;
            });
            console.log("Ordenado por CORREO de forma DESCENDENTE")
            console.log(contactos);
        }
        if (ordenar == 3 && forma == 2){
            contactos.sort((x, y) => {
                x = x.correo.toLowerCase();
                y = y.correo.toLowerCase();
            
                if (x == y) {
                    return 0;
                }
                if (x < y) {
                    return -1;
                }
                return 1;
            });
            console.log("Ordenado por CORREO de forma ASCENDENTE")
            console.log(contactos);
        }
        
    }
    