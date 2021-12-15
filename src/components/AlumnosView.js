import Hero from './Hero';

const CharacterCard = ({ character }) => {
    return (
        <div className="busca">
            <h1>{character.name}</h1>
            <h2>Birth: {character.birth}</h2>
            <h2>Death: {character.death}</h2>
            <h2>House: {character.house}</h2>
            <h2>Patronus: {character.patronus}</h2>
            <h2>Species: {character.species}</h2>
        </div>
        

    )
}

const AlumnosView = ({keyword, searchResults, searchText, setSearchText}) => {
    const title = `Accio ${keyword}`

    const resultsHtml = searchResults.map((obj,i) => {
        return <CharacterCard character={obj} key={i}/>
    })

    const updateSearchText = (e) => {
        setSearchText(e.target.value)
    }



    return (
        <>
            
            <Hero text={title} />

            <form className="form">
                        <input
                            type='search'
                            placeholder='search'
                            aria-label='search'
                            value={searchText}
                            onChange={updateSearchText}
                        />
                    </form>
                    <button className="jenson" type="submit">
                        Search
                    </button>

            {resultsHtml}

        </>
    );
  };

export default AlumnosView;