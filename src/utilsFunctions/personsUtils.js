const persons = [
    {
        "firstName": "Jon",
        "lastName": "Doe",
        "sex": "M",
        "age": 123
    },
    {
        "firstName": "Anon",
        "lastName": "Imus",
        "sex": "M",
        "age": 22
    },
    {
        "firstName": "Dont",
        "lastName": "Know",
        "sex": "",
        "age": 28
    },
    {
        "firstName": "Dont",
        "lastName": "Care",
        "sex": "",
        "age": 25
    },
    {
        "firstName": "Big",
        "lastName": "Tim",
        "sex": "F",
        "age": 20
    },
    {
        "firstName": "Little",
        "lastName": "Tim",
        "sex": "F",
        "age": 80
    },
]

export function getPersonsData(){

    const result = persons.map(person => {
        const personData = person.firstName + "-" + person.lastName + "-" + person.age;
        return personData;
    });

    return result;
}
