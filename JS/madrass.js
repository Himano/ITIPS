let test = "Kunde tar kontakt vedr. sin madrass som "


let textNodes = [

    {
        id: 1, 
        text: "Hva er problemet med madrassen?",
        options: [
            { 
                text: "Den synker ned",
                testNode: "synker og ikke holder formen sin, følger VETA artikkel 13608.2 ",
                tip: "VETA artikkel 13608.2",
                url: "#",
                nextText: 2
            
            },
            { 
                text: "Den lukter vondt",
                testNode: "lukter vondt ",
                tip: "Youtube",
                url: "https://www.youtube.com",
                nextText: 3
            },
            { 
                text:"Komfortgaranti",
                testNode: "Komfortgaranti ",
                nextText:4
            }
        ]
    },

    {
        id: 2,
    text: "Er madrassen over eller under 1år gammel?",
    options: [
        {
        text:"Over 1 år gammel",
        testNode: ". Madrassen er over 1år gammel og har sunket ",
        nextText: 5
    }, 
    {
        text:"under 1 år gammel",
        testNode: ". Madrassen er under 1år gammel og har allerede sunket, vi stoler på kunde og godkjenner utbytte av produktet ",
        nextText: 0
    }

]
    },

    {
        id: 5,
    text: "Hvor mye har madrassen sunket?",
    options: [
        {
        text:"1-3cm",
        testNode: "1-3cm. Det er normalt at madrasser synker såpass iløp av noen år. Det vil skje med de fleste madrasser og er da ikke grunnlag for godkjent reklamasjon.",
        nextText: 5
    }, 
    {
        text:"3+ cm",
        testNode: "3+ cm. Vi anser synking av denne grad som en produktfeil og godkjenner reklamasjonen. Kunde kan velge mellom ombytte eller heving av kjøp mot kvittering.",
        nextText: 0
    }

]
    },

   {

    id: 3,
    text: "Hvor mye har madrassen sunket?",
    options: [
        {
        text:"1-3cm",
        testNode: "1-3cm. Det er normalt at madrasser synker noe over tid. I løpet av noen år er 1-3cm helt normalt. Det vil skje med de fleste madrasser og er da ikke grunnlag for godkjent reklamasjon.",
        nextText: 5
    }, 
    {
        text:"3+ cm",
        testNode: "3+ cm. Vi anser synking av denne grad som en produktfeil og godkjenner reklamasjonen. Kunde kan velge mellom ombytte eller heving av kjøp mot kvittering.",
        nextText: 0
    }

]

   }

];