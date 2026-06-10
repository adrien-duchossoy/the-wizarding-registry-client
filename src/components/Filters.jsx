import '../styles/Filters.css'

function Filters({ allSocieties,houses, bloodStatuses, selectedSociety, onSocietyChange, selectedHouse, onHouseChange, selectedBloodStatus, onBloodStatusChange }) {
    const hogwartsHouse = [... new Set (houses)]
    const bloodStatus = [... new Set(bloodStatuses)]

    return (
        <div className="filters-bar">

            <div className="filter-group">
                <select name="society" value={selectedSociety} onChange={onSocietyChange}>
                    <option value="">All societies</option>
                    {allSocieties.map((society) => (
                        <option key={society.id} value={society.id}>{society.name}</option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <select name="house" value={selectedHouse} onChange={onHouseChange}>
                    <option value="">All houses</option>
                    {hogwartsHouse.map((house) => (
                        <option key={house} value={house}>{house}</option>
                    ))}
                </select>
            </div>

            <div className="filter-group">
                <select name="bloodStatus" value={selectedBloodStatus} onChange={onBloodStatusChange}>
                    <option value="">All blood statuses</option>
                    {bloodStatus.map((bs) => (
                        <option key={bs} value={bs}>{bs}</option>
                    ))}
                </select>
            </div>

        </div>
    )
}

export default Filters