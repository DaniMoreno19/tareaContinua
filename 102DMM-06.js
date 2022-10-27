let contactos=
    [{nombre:'Maxwell Wright',telefono:'(0191) 719 6495',correo:'Curabitur.egestas.nunc@nonummyar.co.uk'}
    ,{nombre:'Raja Villareal',telefono:'0866 398 2895',correo:'posuere.vulputate@sed.com'}
    ,{nombre:'Helen Richards',telefono:'0800 1111',correo:'libero@convallis.edu'}];


    let opcion = prompt("Introduce la opción que quieras realizar: \n 1.-Mostrar todos los contactos \n 2-Mostrar un contacto específico \n 3.-Añadir un nuevo contacto \n 4.-Salir del programa \n");


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
        nombree= prompt("Introduce el nombre y apellido");
        telefonoo= prompt("Introduce el teléfono");
        correoo= prompt("Introduce el correo");
        addNewContact(contactos, nombree, telefonoo, correoo);
    }