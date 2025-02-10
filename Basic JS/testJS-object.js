const employee = [
    {
        id: 1,
        name: 'Por',
        age: 23,

        slogan: () => {
            console.log('PorZa')
        }
    },
    {
        id: 2,
        name: 'Nes',
        age: 28,

        slogan: () => {
            console.log('NesZa')
        }
    }
]

console.log(employee[0].slogan)