import Hero from './Hero';

const SpellsCard = ({ spell }) => {
    return (
        <div className="busca">
            <h1>{spell.name}</h1>
            <h2>Description: {spell.description}</h2>

        </div>

      

    )
  
}

const SpellsView = ({keyword, searchSpells, searchTextSpells, setSearchTextSpells}) => {
    const title = `Accio ${keyword}`

    const resultsHtml = searchSpells.map((obj,i) => {
        return <SpellsCard spell={obj} key={i}/>
    })

    const updateSearchTextSpells = (e) => {
        setSearchTextSpells(e.target.value)
    }



    return (
        <>
            
            <Hero text={title} />

            <form className="form">
                        <input
                            type='search'
                            placeholder='search'
                            aria-label='search'
                            value={searchTextSpells}
                            onChange={updateSearchTextSpells}
                        />
                    </form>
                    <button className="jenson" type="submit">
                        Search
                    </button>

            {resultsHtml}

        </>
    );
  };

export default SpellsView;