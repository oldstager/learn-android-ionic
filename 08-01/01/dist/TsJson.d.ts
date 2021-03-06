export declare const getAllData: () => {
    glossary: {
        title: string;
        GlossDiv: {
            title: string;
            GlossList: {
                GlossEntry: {
                    ID: string;
                    SortAs: string;
                    GlossTerm: string;
                    Acronym: string;
                    Abbrev: string;
                    GlossDef: {
                        para: string;
                        GlossSeeAlso: string[];
                    };
                    GlossSee: string;
                };
            };
        };
    };
};
