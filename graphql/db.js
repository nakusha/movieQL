export const people = [
    {
        id: 0,
        name: "yeonsu",
        age: 36,
        gender: "male",
        job: "S/W"
    },
    {
        id: 1,
        name: "suyeon",
        age: 36,
        gender: "female",
        job: "S/W Programmer"
    },
    {
        id: 2,
        name: "222",
        age: 24,
        gender: "male",
        job: "44"
    },
    {
        id: 3,
        name: "5151",
        age: 36,
        gender: "male",
        job: "S/W 1231"
    },
    {
        id: 4,
        name: "767",
        age: 36,
        gender: "male",
        job: "S/W 124124"
    }
]

export const getById = id => {
    const filteredId = people.filter(person => person.id === id);
    return filteredId[0];
}