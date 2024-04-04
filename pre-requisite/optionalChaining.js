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


console.log(info4[0]?.paren?.father)