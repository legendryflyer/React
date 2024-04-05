let info4 =
    [
        {
            fullName: "tavish",
            lastName: "anade",
            parent: {
                father: "suresh anade",
                mother: "manjusha anade"
            }
        },
        {
            fullName: "ankit",
            lastName: "bhisikar",
            parent: {
                father: "arun bhisikar",
                mother: "pushpa bhisikar"
            }
        }
    ]


console.log(info4[0])
console.log(info4[1].parent.father)
console.log(info4[0].parent.mother)

console.log(info4[0]?.parent?.father)
