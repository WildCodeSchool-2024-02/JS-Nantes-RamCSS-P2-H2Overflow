import './styles/Groundwatercard.css'

function Groundwatercard() {

    return (
        <>
            <div className="GWcontainer">
                <p className='level-legend'>Taux de remplissage actuel</p>
                <div className="GWlevel">
                    <div className='percentage-box'>
                        <p className='GWpercentage'>40%</p>
                    </div>
                    <img className='GWvisual-level' src="../src/assets/images/watergroung_level.png" alt="water level" />
                </div>
            </div>
        </>
    );
};

export default Groundwatercard;