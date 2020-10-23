const Database = require('./db');
const saveOrphanage = require ('./saveOrphanage');

Database.then(async db => {


   // inserir dados na tabela
    // await saveOrphanage(db,    {
    //     lat: "-27.0075663",
    //     lng: "-48.623033",
    //     name: "Lar dos Meninos",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "1232313333336721312",
    //     images: [
    //         "https://images.unsplash.com/photo-1586458132313-b6191b25f567?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours: "Horário de visita das 8h até 18h",
    //     open_on_weekends: "0"
    // })
    //consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // // consultar apenas 1 orfanato, pelo id
    // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "5"')
    // console.log(orphanage)

    // deletar dado da tabela
    // await db.run("DELETE FROM orphanages WHERE id = '4'") 
    

})