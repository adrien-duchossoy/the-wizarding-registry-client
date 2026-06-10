import '../styles/WizardForm.css'

import wizardPic from '../assets/images/wizard-profile-pic.png'
import ministryLogo from '../assets/images/ministry-of-magic-logo-long.png'

function WizardForm({ formData, onSubmit, onChange, isEditing, onDelete, onClose }) {

    return (
        <div className='new-wizard-form-container'>

            <div className='form-header'>
                <p className='status-stamp'>{formData.status}</p>
                <button type="button" onClick={onClose}>X Close</button>
            </div>

            <div className='form-body'>
                <form onSubmit={onSubmit}>




                    <div className='right-column'>

                        <div className='schooling-info'>
                            <p>SCHOOLING :</p> <span>Attended Hogwarts School of Witchcraft and Wizardry</span>
                        </div>

                        <label>House</label>
                        <select
                            name="house"
                            id="house"
                            value={formData.house}
                            onChange={onChange}
                        >
                            <option value="">Select Hogwarts House</option>
                            <option value="gryffindor">Gryffindor</option>
                            <option value="slytherin">Slytherin</option>
                            <option value="ravenclaw">Ravenclaw</option>
                            <option value="hufflepuff">Hufflepuff</option>
                        </select>

                        <div className='wand-section'>
                            <label>Wand Wood</label>
                            <select
                                name="wand.wood"
                                id="wand.wood"
                                value={formData.wand.wood}
                                onChange={onChange}
                            >
                                <option value="">Select wand wood</option>
                                <option value="acacia">Acacia</option>
                                <option value="alder">Alder</option>
                                <option value="apple">Apple</option>
                                <option value="ash">Ash</option>
                                <option value="aspen">Aspen</option>
                                <option value="beech">Beech</option>
                                <option value="blackthorn">Blackthorn</option>
                                <option value="black walnut">Black Walnut</option>
                                <option value="cedar">Cedar</option>
                                <option value="cherry">Cherry</option>
                                <option value="chestnut">Chestnut</option>
                                <option value="cypress">Cypress</option>
                                <option value="dogwood">Dogwood</option>
                                <option value="ebony">Ebony</option>
                                <option value="elder">Elder</option>
                                <option value="elm">Elm</option>
                                <option value="english oak">English Oak</option>
                                <option value="fir">Fir</option>
                                <option value="hawthorn">Hawthorn</option>
                                <option value="hazel">Hazel</option>
                                <option value="holly">Holly</option>
                                <option value="hornbeam">Hornbeam</option>
                                <option value="larch">Larch</option>
                                <option value="laurel">Laurel</option>
                                <option value="vine">Vine</option>
                                <option value="willow">Willow</option>
                                <option value="yew">Yew</option>
                            </select>

                            <label>Wand Core</label>
                            <select
                                name="wand.core"
                                id="wand.core"
                                value={formData.wand.core}
                                onChange={onChange}
                            >
                                <option value="">Select wand core</option>
                                <option value="dragon heartstring">Dragon Heartstring</option>
                                <option value="unicorn hair">Unicorn Hair</option>
                                <option value="phoenix feather">Phoenix Feather</option>
                                <option value="thestral tail hair">Thestral Tail Hair</option>
                                <option value="veela hair">Veela Hair</option>
                                <option value="kneazle whisker">Kneazle Whisker</option>
                                <option value="troll whisker">Troll Whisker</option>
                                <option value="dittany stalk">Dittany Stalk</option>
                            </select>

                            <div className='wand-length-row'>
                                <label>Wand length</label>
                                <input
                                    type="number"
                                    name="wand.lengthInches"
                                    value={formData.wand.lengthInches}
                                    onChange={onChange}
                                /> <span>inches</span>
                            </div>
                        </div>


                        <label>Blood status</label>
                        <select
                            name="bloodStatus"
                            id="bloodStatus"
                            value={formData.bloodStatus}
                            onChange={onChange}
                        >
                            <option value="">Select blood status</option>
                            <option value="pure-blood">Pure blood</option>
                            <option value="half-blood">Half-blood</option>
                            <option value="muggle-born">Muggle born</option>
                            <option value="muggle">Muggle</option>
                            <option value="squibs">Squibs</option>
                            <option value="half-breeds">Half-breeds</option>
                        </select>

                        <label>Patronus</label>
                        <input
                            type="text"
                            name="patronus"
                            value={formData.patronus}
                            onChange={onChange}
                        />

                        <label>Specialty</label>
                        <select
                            name="specialty"
                            id="specialty"
                            value={formData.specialty}
                            onChange={onChange}
                        >
                            <option value="">Select specialty</option>

                            <optgroup label="Combat & Offensive">
                                <option value="dueling">Dueling</option>
                                <option value="curse casting">Curse Casting</option>
                                <option value="curse breaking">Curse Breaking</option>
                                <option value="dark arts">Dark Arts</option>
                            </optgroup>

                            <optgroup label="Mind Magic">
                                <option value="legilimency">Legilimency</option>
                                <option value="occlumency">Occlumency</option>
                            </optgroup>

                            <optgroup label="Transformation">
                                <option value="transfiguration">Transfiguration</option>
                                <option value="animagus">Animagus</option>
                            </optgroup>

                            <optgroup label="Healing & Protection">
                                <option value="healing magic">Healing Magic</option>
                                <option value="shield charms">Shield Charms</option>
                            </optgroup>

                            <optgroup label="Divination & Mystery">
                                <option value="divination">Divination</option>
                                <option value="ancient runes">Ancient Runes</option>
                                <option value="arithmancy">Arithmancy</option>
                            </optgroup>

                            <optgroup label="Creatures">
                                <option value="magizoology">Magizoology</option>
                                <option value="dragon taming">Dragon Taming</option>
                                <option value="parseltongue">Parseltongue</option>
                            </optgroup>

                            <optgroup label="Rare & Forbidden">
                                <option value="necromancy">Necromancy</option>
                                <option value="blood magic">Blood Magic</option>
                                <option value="wandless magic">Wandless Magic</option>
                                <option value="nonverbal magic">Nonverbal Magic</option>
                                <option value="time magic">Time Magic</option>
                                <option value="soul magic">Soul Magic</option>
                            </optgroup>

                            <optgroup label="Potions & Alchemy">
                                <option value="potions">Potions</option>
                                <option value="alchemy">Alchemy</option>
                            </optgroup>
                        </select>



                    </div>

                    <div className='left-column'>

                        <div></div>

                        <div className='form-identity-card'>

                            <img className='ministry-logo' src={ministryLogo} alt="Ministry of Magic logo header" />

                            <div className="photo-container">
                                <img src={wizardPic} alt="" />
                            </div>

                            <div className='name-row'>
                                <div>
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={onChange}
                                    />
                                </div>

                                <div>
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={onChange}
                                    />
                                </div>
                            </div>

                            <label>Gender</label>
                            <select
                                type="text"
                                name="gender"
                                value={formData.gender}
                                onChange={onChange}
                            >
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="non-binary">Non-binary</option>
                            </select>
                        </div>

                    </div>

                    <div className='form-footer'>
                        <button type="submit">{isEditing ? "Save" : "Register"}</button>
                        {isEditing && <button type="button" onClick={onDelete}>Delete Wizard</button>}
                    </div>

                </form>
            </div>

        </div>
    )
}

export default WizardForm
