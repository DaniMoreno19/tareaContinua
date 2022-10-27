let contactos=
    [{nombre:'Maxwell Wright',telefono:'(0191) 719 6495',correo:'Curabitur.egestas.nunc@nonummyar.co.uk'}
    ,{nombre:'Raja Villareal',telefono:'0866 398 2895',correo:'posuere.vulputate@sed.com'}
    ,{nombre:'Helen Richards',telefono:'0800 1111',correo:'libero@convallis.edu'}];

    
  let opcion='';


    do{
        let opcion = prompt("Introduce la opción que quieras realizar: \n 1.-Mostrar el primer contacto \n 2-Mostrar el último contacto \n 3-Mostrar todos los contactos \n 4.-Añadir un nuevo contacto \n 5.-Salir del programa");
        
        switch(opcion){
            case '1':
                console.log(contactos[0]);
                break;
            case '2':
                console.log(contactos[(contactos.length)-1]);
                break;
            case '3':
                console.log(contactos);
                break;
            case '4':
                let nombre= prompt("Introduce el nombre y apellido");
                    let telefono= prompt("Introduce el teléfono");
                    let correo= prompt("Introduce el correo");
                    if(nombre.length==0||telefono.length==0||correo.length ==0){
                    alert("Debes introducir todos los campos")
                    }else{
                    let nuevoContacto=("nombre: "+nombre +", teléfono: " +telefono + ", correo: "  +correo);
                    contactos.push(nuevoContacto);
                    
                }
                console.log(contactos);
                break;
            case '5':
                break;
        }
    
    }while(opcion!=='5');

    
    
    /*
    do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
*/


