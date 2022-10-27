

let contactos=
    [{nombre:'Maxwell Wright',telefono:'(0191) 719 6495',correo:'Curabitur.egestas.nunc@nonummyar.co.uk'}
    ,{nombre:'Raja Villareal',telefono:'0866 398 2895',correo:'posuere.vulputate@sed.com'}
    ,{nombre:'Helen Richards',telefono:'0800 1111',correo:'libero@convallis.edu'}];

    let nombre= prompt("Introduce el nombre y apellido");
    let telefono= prompt("Introduce el teléfono");
    let correo= prompt("Introduce el correo");
    let nuevoContacto=("nombre: "+nombre +", teléfono: " +telefono + ", correo: "  +correo);
    contactos.push(nuevoContacto);
    console.log(contactos[0]);
    console.log(contactos[contactos.length-1]);
