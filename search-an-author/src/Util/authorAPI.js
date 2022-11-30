const authorAPI = {

    async search(term) {
        return fetch(`https://openlibrary.org/search/authors.json?q=${term}&offset=0&limit=10000000`
        ).then( response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.numFound <= 0 || jsonResponse.docs.length <= 0) {
                return [];
            }
            return jsonResponse.docs.map(author => {                                
                return ({
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