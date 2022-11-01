export default function TemperatureInput(props) {
    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    };

    const handleChange = e => {
        props.onTemperatureChange(e.target.value);
    };

    return (
        <div className="input">
            <fieldset>
                <legend>Enter temperature in {scaleNames[props.scale]}:</legend>
                <input
                    value={props.temperature}
                    onChange={handleChange}
                />
            </fieldset>

        </div>
    )
}