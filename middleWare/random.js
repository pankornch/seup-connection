const { Stack, joinedStack } = require('./Stack');

const random = async (data) => {
    const { fetch_senior, fetch_table, user } = data

    await addStack(fetch_senior, fetch_table)

    const RND = () => {
        const size = Stack.size();
        const twin = Math.floor(Math.random() * 10) % size === size - 1
        const r = Math.floor(Math.random() * 10) % (size - 1)

        if (twin && !joinedStack.duplicates() && joinedStack.size() !== 0) {
            return joinedStack.add(Stack.get(r), user);
        }


        const result = Stack.get(r)
        Stack.remove(r)
        joinedStack.add(result, user)
        return joined(result)
    }

    const joined = (result) => {
        const s = fetch_senior.filter(e => e._id === result).
            joinTable({
                senior: s.map(e => {
                    return {
                        _id: e._id,
                        s_id: e.s_id,
                        hint: e.hint
                    }
                }),
                junior: user.map(e => {
                    return {
                        _id: e._id,
                        s_id: e.s_id
                    }
                })
            })
        return s.map(e => e.hint)

    }

    return RND()
}

const addStack = async (fetch_senior, fetch_table) => {
    const t = fetch_table.map(e => e.senior._id)
    const s = fetch_senior.filter(e => !t.includes(e._id))
    return new Promise(async (resolve, reject) => {
        await s.forEach(i => {
            if (!Stack.includes(i._id)) {
                Stack.add(i._id)
            }
        })
        t.forEach(i => {
            if (!joinedStack.includes(i)) {
                joinedStack.add(i)
            }
        })
        resolve()
    })
}

module.exports.random = random;