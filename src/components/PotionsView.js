import Hero from './Hero';

const PotionsCard = ({ potion }) => {
    return (
        <div className="busca">
            <h1>{potion.name}</h1>
            <h2>Description: {potion.description}</h2>
        </div>
        

    )
}

const PotionsView = ({keyword, searchPotions, searchTextPotions, setSearchTextPotions}) => {
    const title = `Accio ${keyword}`

    const resultsHtml = searchPotions.map((obj,i) => {
        return <PotionsCard potion={obj} key={i}/>
    })

    const updateSearchTextPotions = (e) => {
        setSearchTextPotions(e.target.value)
    }



    return (
        <>
            
            <Hero text={title} />

            <form className="form">
                        <input
                            type='search'
                            placeholder='search'
                            aria-label='search'
                            value={searchTextPotions}
                            onChange={updateSearchTextPotions}
                        />
                    </form>
                    <button className="jenson" type="submit">
                        Search
                    </button>

            {resultsHtml}

        </>
    );
  };

export default PotionsView;