import express from "express";

const router = express.Router();

const users = [
    {
        username: 'Dan',
        email: 'Dan@gmail.com',

        Adresse: 'TrollStien: 13',
        PostNr: '3984',
        
        ID: '390h03bw0f'

    },
    {
        username: 'Stian',
        email: 'Stian@gmail.com',
        
        Adresse: 'SteinVik: 37B',
        PostNr: '1394',

        ID: 'HU#)8h9fhso'
    },
    {
        username: 'Håkon',
        email: 'Håkon@Magic.nu',

        Adresse: 'TvilingVeien 2B',
        PostNr: '3674',

        ID: 'UOH#8ou390sH'

    }
];


/* Alltid Req, res = Request først, Respons etter. */
router.get('/', (req, res) => {
    res.json(users)

})

export default router;