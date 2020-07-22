const { membersSophomore, joinTable } = require('../Users/Users');
const { addJoinTable } = require('../DB/db');

const random = (userId) => {
    return new Promise((resolve, reject) => {

        membersSophomore().then(async sop => {
            const join = await joinTable();
            const twin = join.twin.data;

            const twinId = twin.map(v => v.s_id);
            const sopId = sop.map(v => v.s_id);

            const rndable = sopId.filter(e => !twinId.includes(e));


            const rnd = rndable[Math.floor(Math.random() * rndable.length)];

            const [sop_rnd] = sop.filter(v => v.s_id === rnd);


            if (sop_rnd.twin) {
                const g = twin.filter(e => e.twin === sop_rnd.twin)[0];

                const re = [sop_rnd, sop.filter(v => v.s_id === g.s_id)[0]];

                addJoinTable({
                    sopohomore: [
                        { s_id: re[0].s_id },
                        { s_id: re[1].s_id }
                    ],
                    fresher: userId
                });

                return resolve(["JACK POT", { 1: { firstName: re[0].firstName }, 2: { firstName: re[1].firstName } }]);
            }


            addJoinTable({
                sopohomore: [
                    { s_id: sop_rnd.s_id },
                ],
                fresher: userId
            });

            resolve(sop_rnd.firstName);
        })
    })

}


module.exports.random = random;