const { membersSophomore, joinTable } = require('../Users/Users');
const { addJoinTable, snapSophomore } = require('../DB/db');

const random = async (userId) => {
    return new Promise((resolve, reject) => {

        let arr = [];
        snapSophomore.where('random', '==', false).onSnapshot(snap => {
            snap.docs.forEach(e => arr.push(e.data()));
            RND(arr)
            arr = []
        })

        const RND = async (data) => {
            
            if (!userId) return;
            
            const join = await joinTable();
            const twin = join.twin.data;

            const twinID = twin.map(v => v.s_id);
            const sopID = data.map(v => v.s_id);

            const rndable = sopID.filter(e => !twinID.includes(e));


            const onRandom = rndable[Math.floor(Math.random() * rndable.length)];
            const [sop_rnd] = data.filter(v => v.s_id === onRandom);


            if (sop_rnd.twin) {
                const g = twin.filter(e => e.twin === sop_rnd.twin)[0];

                const re = [sop_rnd, data.filter(v => v.s_id === g.s_id)[0]];

                addJoinTable({
                    sophomore: [
                        { s_id: re[0].s_id },
                        { s_id: re[1].s_id }
                    ],
                    fresher: userId
                });

                // return resolve(["JACK POT", { 1: { firstName: re[0].firstName }, 2: { firstName: re[1].firstName } }]);
                userId = null;
                return resolve("JACK POT!!!")
            }

            addJoinTable({
                sophomore: [{ s_id: sop_rnd.s_id }],
                fresher: userId
            });

            userId = null;
            return resolve();
        }
    })

}


module.exports.random = random;