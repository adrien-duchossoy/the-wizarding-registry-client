import { getRandomSocietyValue } from '../utils/randomize'
import randomizeBtnImg from '../assets/images/randomize-btn.png'

function SocietyForm({ formData, onSubmit, onChange, onRandomizeAll }) {

    const randomize = (fieldName) => {
        onChange({ target: { name: fieldName, value: getRandomSocietyValue(fieldName) } })
    }

    return (
        <div className='new-society-form-container'>
            <form onSubmit={onSubmit}>

                <label>Name</label>
                <div className="field-row">
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={onChange}
                    />
                    <button type="button" className="randomize-btn" onClick={() => randomize('name')}><img src={randomizeBtnImg} alt="randomize" /></button>
                </div>

                <label>Description</label>
                <div className="field-row">
                    <input
                        type='text'
                        name='description'
                        value={formData.description}
                        onChange={onChange}
                    />
                    <button type="button" className="randomize-btn" onClick={() => randomize('description')}><img src={randomizeBtnImg} alt="randomize" /></button>
                </div>

                <label>Danger Level</label>
                <div className="field-row">
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
                    <button type="button" className="randomize-btn" onClick={() => randomize('dangerLevel')}><img src={randomizeBtnImg} alt="randomize" /></button>
                </div>

                <button type="button" onClick={onRandomizeAll}>Randomize All</button>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SocietyForm
