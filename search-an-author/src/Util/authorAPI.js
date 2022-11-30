const authorAPI = {

    async search(term) {
        return fetch(`https://openlibrary.org/search/authors.json?q=${term}&offset=0&limit=20`
        ).then( response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.numFound <= 0 || jsonResponse.docs.length <= 0) {
                return [];
            }
            return jsonResponse.docs.map(author => {
                const authorsArr = jsonResponse.docs;

                let key = author.key;
                
                for (let i = 0; i < authorsArr.length; i++) {
                    if (authorsArr[i].key === key) {
                        key = key + 1
                    }
                }
                
                return ({
                    key: key,
                    name: author.name,
                    alternateNames: author.alternate_names,
                    birthDate: author.birth_date,
                    deathDate: author.death_date,
                    topWork: author.top_work,
                    workCount: author.work_count,
                    topSubjects: author.top_subjects
                })
            });
        });        
    }
};

export default authorAPI;