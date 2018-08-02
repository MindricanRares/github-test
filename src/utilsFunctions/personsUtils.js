const persons = [
    {
        "firstName": "Doe",
        "lastName": "Jon",
        "sex": "M",
        "age": 23
    },
    {
        "firstName": "Jon",
        "lastName": "Doe",
        "sex": "M",
        "age": 23
    },
    {
        "firstName": "Biggus",
        "lastName": "Dikkus",
        "sex": "M",
        "age": 22
    },
    {
        "firstName": "Cooler",
        "lastName": "Deke",
        "sex": "",
        "age": 28
    },
    {
        "firstName": "Just",
        "lastName": "Deke",
        "sex": "",
        "age": 25
    },
    {
        "firstName": "Wouldja",
        "lastName": "Blowme",
        "sex": "F",
        "age": 20
    },
    {
        "firstName": "Little",
        "lastName": "Tim",
        "sex": "F",
        "age": 80
    },
    {
        "firstName": "Ben",
        "lastName": "Dover",
        "sex": "M",
        "age": 68,
    }
]

export function getPersonsData(){

    const result = persons.map(person => {
        const personData = person.firstName + "-" + person.lastName + "-" + person.age;
        return personData;
    });

    return result;
}
