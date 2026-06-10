

function SocietyForm ({formData, onSubmit, onChange}) {

    return (
        <div className='new-society-form-container'>
            <form onSubmit={onSubmit}>
                <label>Name</label>
                <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={onChange}
                />

                <label>Description</label>
                <input
                    type='text'
                    name='description'
                    value={formData.description}
                    onChange={onChange}
                />

                <label>Danger Level</label>
                <select
                    name='dangerLevel'
                    value={formData.dangerLevel}
                    onChange={onChange}
                >
                    <option value=''>Select danger level</option>
                    <option value="harmless">Harmless</option>
                    <option value="monitored">Monitored</option>
                    <option value="extreme-danger">Extreme Danger</option>
                    <option value="banned">Banned</option>
                </select>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SocietyForm