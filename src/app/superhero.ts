export default [
    {
        name: "batman",
        creators: ["Bob Kane", "Bill Finger"],
        firstAppearance: "Year 1939",
        livesIn: "Gotham City",
    },
    {
        name: "Chhota Bheem",
        creators: [
            "Raj Viswanadha",
            "Arun Shendurnikar",
            "Nidhi Anand"
        ],
        firstAppearance: "Year 2008",
        livesIn: "India",
    },
];

function findSuperhero(name: string): SuperHero[] {
    return superheroes.find(x => x.name === name);
}

export function getSuperheroLocation(name: string): string {
    return findSuperhero(name).livesIn;
}

export function getSuperheroCreators(name: string): string{
    return findSuperhero(name).creators;
}